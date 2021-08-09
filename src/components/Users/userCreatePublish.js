import React, { useState } from 'react';
import { connect } from 'react-redux';
import QuillEditor from '../Publish/QuillEditor';
import { submitContent } from '../../store/actions/textEditorAction';

function userCreatePublish(props) {
    
    const [content, setContent] = useState("");

    const onEditorChange = (value) => {
        setContent(value);
    }

    var btnDisableCheck = props.signedInUserDetails.uid ? false : true;

    const onSubmit = (event) => {
        event.preventDefault();

        setContent("");

        const variables = {
            content: content,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            createdBy: {
                type: "user", //user/admin/editor
                name: props.signedInUserDetails.displayName ? props.signedInUserDetails.displayName : "No Name",
                id: props.signedInUserDetails.uid,
            },
            isSubmitted: false,
            isPublished: false,
            isDeleted: false,
        }

        props.submitContent(variables)
        if(props.submitError){
            alert(`Unable to save, ${JSON.stringify(props.submitError)}`)
        }
        else {
            alert(`Saved successfully, please wait for confimation.`)
        }
    }
        return (
            
            <div className="bg-light p-2" style={{minHeight:'auto'}}>
                    <QuillEditor 
                        placeholder={"Write a story..."}
                        onEditorChange={onEditorChange}
                    />
                    <form onSubmit={onSubmit}>
                        <button className="btn btn-block btn-outline-success my-2 " disabled={btnDisableCheck} onSubmit={onSubmit}>Save</button>
                    </form>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        submitError: state.textEditor.submitError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitContent: (content) => dispatch(submitContent(content)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(userCreatePublish)
