






// import React, { Component } from 'react';
// import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { connect } from 'react-redux';
// import { stateToHTML } from 'draft-js-export-html';
// import { submitContent } from '../../store/actions/textEditorAction';

// class TextEditor extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           //editorState: EditorState.createEmpty(),
//         };
//         const exisitingContent = window.localStorage.getItem('content');

//         if(exisitingContent) {
//           this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(exisitingContent)));
//         } else {
//           this.state.editorState = EditorState.createEmpty();
//         }
//       }

//   //image upload callback
//   uploadCallback = (file) => {
//     return new Promise((resolve, reject) => {
//       const data = new FormData();
//       data.append("image", file)
//       console.log(file);
//       resolve({data: {link: data["image"] }})
//     });
//   }

//   //ToolBar Options Or Settings
//   toolbarOptions = {
//     options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'link', /*'embedded',*/ 'image', 'remove', 'history'],
//     inline: {
//       options: ['bold', "italic", "underline", "strikethrough"]
//     },
//     blockType: { inDropdown: true },
//     list: { inDropdown: false },
//     embedded: { 
//           defaultSize: {
//           height: '360px',
//           width: 'auto',
//           },
//         },
//   image: { 
//         defaultSize: {
//           height: '360px',
//           width: 'auto',
//         }, 
//         urlEnabled: true,
//         uploadEnabled: true,
//         uploadCallback: this.uploadCallback,
//         previewImage: true,
//         inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
//       }    
//   }

//   //Change State
//   onEditorStateChange = (editorState) => {
//     const contentState = editorState.getCurrentContent();
//     this.saveContent(contentState)
//     this.setState({
//       editorState,
//     });
//     //window.localStorage.setItem('content', JSON.stringify(convertToRaw(editorState)));
//   };

//   //Save in Local Storage
//   saveContent = (content) => {
//     window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
//   }

//   setEditorReference = (ref) => {
//     this.editorReferece = ref;
//     ref.focus();
//   }

//   //save content on DataBase
//   saveContentOnDB = (editorState) => {
//     // const contentState = this.state.editorState.getCurrentContent();
//     // var resp = JSON.stringify(convertToRaw(contentState));
//     // console.log(resp);
//     this.props.submitContent(JSON.stringify(stateToHTML(this.state.editorState.getCurrentContent())))
//   }
    
//   //convert To HTML
//   exportHTML = () => {
//     // console.log(convertToHTML(this.state.editorState.getCurrentContent()));
//     console.log(stateToHTML(this.state.editorState.getCurrentContent()));
//   }
//   render() {
//     const { editorState } = this.state;
//     if( !editorState ) {
//       return (
//         <div className="conatiner text-center text-primary">
//           <h5>Loading...</h5>
//         </div>
//       )
//     }
//       return (
//         <div className="container" style={{marginBottom:"6rem"}}>
//             <div className="col-12">
//               <Editor
//                 editorRef={this.setEditorReference}
//                 editorState={editorState}
//                 wrapperClassName="wrapper-class"
//                 editorClassName="editor-class"
//                 toolbarClassName="toolbar-class"
//                 onEditorStateChange={this.onEditorStateChange}
//                 toolbar={this.toolbarOptions}
//                 plugins={{}}
//                 // onChange={this.onChange}
//               />
//             </div>
//             <div className="col-12 mt-2">
//               <div className="row justify-content-center">
//                 <div className="col-3">
//                   <button className="btn btn-block btn-secondary" onClick={this.exportHTML}>Preview</button>
//                 </div>
//                 <div className="col-3">
//                   <button className="btn btn-block btn-primary" onClick={this.saveContentOnDB}>Save</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       }
// }

// const mapStateToProps = (state) => {
//   return {
//     submittedContent: state.textEditor.submittedContent,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     submitContent: (content) => dispatch(submitContent(content)),
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps) (TextEditor);