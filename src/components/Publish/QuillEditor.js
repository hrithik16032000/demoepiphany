import React from 'react';
import { uploadImage } from '../../store/actions/textEditorAction';
import firebase from "../../config/firebase.js";
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";
import axios from 'axios';
const __ISMSIE__ = navigator.userAgent.match(/Trident/i) ? true : false;

const QuillClipboard = Quill.import('modules/clipboard');

class Clipboard extends QuillClipboard {

    getMetaTagElements = (stringContent) => {
        const el = document.createElement('div');
        el.innerHTML = stringContent;
        return el.getElementsByTagName('meta');
    };

    async onPaste(e) {
        let clipboardData = e.clipboardData || window.clipboardData;
        let pastedData = await clipboardData.getData('Text');

        const urlMatches = pastedData.match(/\b(http|https)?:\/\/\S+/gi) || [];
        if (urlMatches.length > 0) {
            e.preventDefault();
            urlMatches.forEach(link => {
                axios.get(link)
                    .then(payload => {
                        // let title, image, url, description;
                        let title, image, url;
                        for (let node of this.getMetaTagElements(payload)) {
                            if (node.getAttribute("property") === "og:title") {
                                title = node.getAttribute("content");
                            }
                            if (node.getAttribute("property") === "og:image") {
                                image = node.getAttribute("content");
                            }
                            if (node.getAttribute("property") === "og:url") {
                                url = node.getAttribute("content");
                            }
                            // if (node.getAttribute("property") === "og:description") {
                            //     description = node.getAttribute("content");
                            // }
                        }

                        const rendered = `<a href=${url} target="_blank"><div><img src=${image} alt=${title} width="20%"/><span>${title}</span></div></a>`;

                        let range = this.quill.getSelection();
                        let position = range ? range.index : 0;
                        this.quill.pasteHTML(position, rendered, 'silent');
                        this.quill.setSelection(position + rendered.length);
                    })
                    .catch(error => console.error(error));
            });
        } else {
            super.onPaste(e);
        }
    }
}

Quill.register('modules/clipboard', Clipboard, true);

const BlockEmbed = Quill.import('blots/block/embed');

class ImageBlot extends BlockEmbed {

    static create(value) {
        const imgTag = super.create();
        imgTag.setAttribute('src', value.src);
        imgTag.setAttribute('alt', value.alt);
        imgTag.setAttribute('width', '480px')
        imgTag.setAttribute('class', 'rounded mx-auto d-block my-2');
        return imgTag;
    }

    static value(node) {
        return { src: node.getAttribute('src'), alt: node.getAttribute('alt') };
    }
}

ImageBlot.blotName = 'image';
ImageBlot.tagName = 'img';
Quill.register(ImageBlot);

class VideoBlot extends BlockEmbed {

    static create(value) {
        if (value && value.src) {
            const videoTag = super.create();
            videoTag.setAttribute('src', value.src);
            videoTag.setAttribute('title', value.title);
            // videoTag.setAttribute('width', '480px')
            // videoTag.setAttribute('class', 'rounded mx-auto d-block my-2');
            videoTag.setAttribute('controls', '');

            return videoTag;
        } else {
            const iframeTag = document.createElement('iframe');
            iframeTag.setAttribute('src', value);
            iframeTag.setAttribute('frameborder', '0');
            iframeTag.setAttribute('width', '640px');
            iframeTag.setAttribute('height', '360px');
            // iframeTag.setAttribute('width', '480px')
            iframeTag.setAttribute('class', 'embed-responsive-item rounded mx-auto d-block');
            return iframeTag;
        }
    }
    static value(node) {
        if (node.getAttribute('title')) {
            return { src: node.getAttribute('src'), alt: node.getAttribute('title') };
        } else {
            return node.getAttribute('src');
        }
        // return { src: node.getAttribute('src'), alt: node.getAttribute('title') };
    }
}

VideoBlot.blotName = 'video';
VideoBlot.tagName = 'video';
Quill.register(VideoBlot);

class PollBlot extends BlockEmbed {

    static create(value) {
        const prefixTag = document.createElement('span');
        prefixTag.innerText = "Poll Blot ";

        const bTag = document.createElement('b');
        bTag.innerText = value.title;

        const node = super.create();
        node.setAttribute('id', value.id);
        node.appendChild(prefixTag);
        node.appendChild(bTag);

        return node;
    }

    static value(node) {
        const id = node.getAttribute('id');
        const bTag = node.querySelector('b');
        const title = bTag.innerText;
        return { id, title };
    }

}

PollBlot.blotName = 'poll';
PollBlot.tagName = 'p';
PollBlot.className = 'poll-inner-post';
Quill.register(PollBlot);

class QuillEditor extends React.Component {

    bandId;
    placeholder;
    onEditorChange;
    onPollsChange;
    _isMounted;

    constructor(props) {
        super(props);

        this.state = {
            editorHtml: __ISMSIE__ ? "<p>&nbsp;</p>" : "",
            files: [],
        };

        this.reactQuillRef = null;

        this.inputOpenImageRef = React.createRef();
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleChange = (html) => {
        console.log('html', html)
        // renderToStaticMarkup(ReactHtmlParser(html, options));
        this.setState({
            editorHtml: html
        }, () => {
            this.props.onEditorChange(this.state.editorHtml);
        });
    };

    // I P
    imageHandler = () => {
        this.inputOpenImageRef.current.click();
    };
   
    insertImage = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (e.currentTarget && e.currentTarget.files && e.currentTarget.files.length > 0) {
            const image = e.currentTarget.files[0];

            const storage = firebase.storage();

            try {
                const uploadTask = storage.ref(`/articles_image/${image.name}`).put(image);

                uploadTask.on('state_changed',
                (snapshot) => {
                },
                (err) => {
                    console.log(err)
                },
                () => {
                    storage.ref('articles_image').child(image.name).getDownloadURL()
                    .then(firebaseURL => {

                        const quill = this.reactQuillRef.getEditor();
                        quill.focus();
            
                        let range = quill.getSelection();
                        let position = range ? range.index : 0;
            
                        quill.insertEmbed(position, "image", { src: firebaseURL, alt: image.name });
                        quill.setSelection(position + 1);
                        alert(`Image uploaded successfully.`)
                    })
                })
            }
            catch (e) {
                alert(`Something went wrong uploading the image. Please try again.`)
            }
        }
        else {
            return alert('failed to upload file')
       }
    };

    render() {
        return (
            <div>
                <div id="toolbar" className="">
                    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
                        <option value="1" />
                        <option value="2" />
                        <option value="" />
                    </select>
                    <button className="ql-bold" />
                    <button className="ql-italic" />
                    <button className="ql-underline" />
                    <button className="ql-strike" />
                    <button className="ql-insertImage">
                    <i class="fa fa-image"></i>
                    </button>
                    <button className="ql-link" />
                    <button className="ql-code-block" />
                    <button className="ql-video" />
                    <button className="ql-blockquote" />
                    <button className="ql-clean" />
                </div>
                <ReactQuill 
                    style={{minHeight:'100%'}}
                    ref={(el) => { this.reactQuillRef = el }}
                    theme={'snow'}
                    onChange={this.handleChange}
                    modules={this.modules}
                    formats={this.formats}
                    value={this.state.editorHtml}
                    placeholder={this.props.placeholder}
                />
                <input type="file" accept="image/*" ref={this.inputOpenImageRef} style={{ display: "none" }} onChange={this.insertImage} />
            </div>
        )
    }

    modules = {
        syntax: false,
        toolbar: {
            container: "#toolbar",
            handlers: {
                insertImage: this.imageHandler,
                insertPoll: this.pollHandler,
            }
        },

    };

    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'image', 'link',"code-block", "video", "blockquote", "clean"
    ];
}

export default QuillEditor;