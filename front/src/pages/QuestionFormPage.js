import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { postQuestion } from '../actions/questionActions'
import { connect } from 'react-redux'
import { FormInput } from "../components/FormInput"

const FormPage = ({ dispatch, loading, redirect, userId, url, name, userEmail }) => {
    const [formState, setFormState] = useState({
        type: "OPEN (LONG OPEN BOX)",
        category: "SOFTWARE DEVELOPMENT"
    })

    const [content, setContent] = useState("")
    const history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        const data = {
            ...formState,
            userId,
            url,
            name,
            question: content,
            userEmail
        }
        dispatch(postQuestion(data));
    };

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    useEffect(() => {
        if (redirect) {
            history.push(redirect);
        }
    }, [redirect, history])

    return (
        <section>
            <h1>New Question</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="type">Type</label>
                    <select className="type" onChange={handleInputChange} id="type">
                        <option value="OPEN (LONG OPEN BOX)">OPEN (LONG OPEN BOX)</option>
                        <option value="OPINION (SHORT OPEN BOX)">OPINION (SHORT OPEN BOX)</option>
                        <option value="WITH RESULT (OPEN BOX WITH LINK)">WITH RESULT (OPEN BOX WITH LINK)</option>
                        <option value="WITH EVIDENCE (OPEN BOX WITH VIDEO)">WITH EVIDENCE (OPEN BOX WITH VIDEO)</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select className="type" onChange={handleInputChange} id="category">
                        <option value="TECHNOLOGY AND COMPUTER">TECHNOLOGY AND COMPUTER</option>
                        <option value="SCIENCES">SCIENCES</option>
                        <option value="SOFTWARE DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
                        <option value="SOCIAL SCIENCES">SOCIAL SCIENCES</option>
                        <option value="LANGUAGE">LANGUAGE</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="question"></label>
                    <FormInput id="form-question__text" setContent={setContent} />
                </div>
                <button type="submit" className="btn btn-dark button" disabled={loading} >{
                    loading ? "Saving ...." : "Save"
                }</button>
            </form>
        </section>
    );
}
const mapStateToProps = state => ({
    loading: state.question.loading,
    redirect: state.question.redirect,
    hasErrors: state.question.hasErrors,
    userId: state.auth.uid,
    url: state.auth.photoURL,
    name: state.auth.displayName,
    userEmail: state.auth.email
})

export default connect(mapStateToProps)(FormPage)