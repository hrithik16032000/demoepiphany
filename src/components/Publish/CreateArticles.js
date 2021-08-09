import React, { useState } from 'react';
import { connect } from 'react-redux';
import QuillEditor from './QuillEditor';
import { submitContent } from '../../store/actions/textEditorAction';
import { Redirect } from 'react-router-dom';

function CreateArticles(props) {
    const [content, setContent] = useState("");

    const onEditorChange = (value) => {
        setContent(value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        setContent("");

        const variables = {
            content: content,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            userName: "Dummy User"
        }

        console.log("SIZE:::::::", JSON.stringify(content).length * 2 );

        props.submitContent(variables)
        console.log(variables);
    }

    if(!props.auth.uid) {
        return (
            <div>
                <Redirect to='/user/signin' />
            </div>
        )
    }

    return (
        <div>
            <div className="container mt-2 justify-content-center">
            <QuillEditor 
                placeholder={"Write a story..."}
                onEditorChange={onEditorChange}
            />
            <form onSubmit={onSubmit}>
                <button className="btn btn-success m-1" onSubmit={onSubmit}>Save</button>
            </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //passing the create project as props to component
        submitContent: (content) => dispatch(submitContent(content)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (CreateArticles);