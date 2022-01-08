import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchQuestion, postAnswer } from '../actions/questionActions'
import { connect } from 'react-redux'
import { Question } from '../components/Question'
import { FormInput } from "../components/FormInput"

const FormPage = ({ dispatch, loading, redirect, match, hasErrors, question, userId, url, name }) => {
    const [content, setContent] = useState("")
    const { id } = match.params
    const history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        const data = {
            userId,
            questionId: id,
            url,
            name,
            answer: content,
        }
        dispatch(postAnswer(data));
    };

    useEffect(() => {
        dispatch(fetchQuestion(id))
    }, [dispatch, id])

    useEffect(() => {
        if (redirect) {
            history.push(redirect);
        }
    }, [redirect, history])

    const renderQuestion = () => {
        if (loading.question) return <p>Loading question...</p>
        if (hasErrors.question) return <p>Unable to display question.</p>

        return <Question question={question} />
    }


    return (
        <section>
            {renderQuestion()}
            <h1>New Answer</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="answer">Answer</label>
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
    question: state.question.question,
    hasErrors: state.question.hasErrors,
    userId: state.auth.uid,
    url: state.auth.photoURL,
    name: state.auth.displayName
})

export default connect(mapStateToProps)(FormPage)