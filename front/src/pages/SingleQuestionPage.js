import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchQuestion, deleteAnswer } from '../actions/questionActions'

import { Question } from '../components/Question'
import { Answer } from '../components/Answer'
import { Link } from 'react-router-dom'
import QuestionRateForm from "./QuestionRateForm";

const SingleQuestionPage = ({
  match,
  dispatch,
  question,
  hasErrors,
  loading,
  userId,
  url,
  name,
  redirect
}) => {
  const { id } = match.params
  useEffect(() => {
    dispatch(fetchQuestion(id))
  }, [dispatch, id])

  const onDelete = (id) => {
    dispatch(deleteAnswer(id))
  }

  const renderQuestion = () => {
    if (loading.question) return <p>Loading question...</p>
    if (hasErrors.question) return <p>Unable to display question.</p>

    return (
      <div>
        <Question question={question} />{" "}
        <QuestionRateForm question={question} />
      </div>
    );
  };

  const renderAnswers = () => {
    return (question.answers && question.answers.length) ? question.answers.map(answer => (
      <Answer key={answer.id}
        answer={answer}
        userId={userId}
        onDelete={onDelete}
      />
    )) : <p>Empty answer!</p>;
  }

  return (
    <section>
      {renderQuestion()}
      {userId && <Link to={"/answer/" + id} className="btn btn-dark button right">
        Reply
      </Link>}

      <h2>Answers</h2>
      {renderAnswers()}
    </section>
  )
}

const mapStateToProps = state => ({
  question: state.question.question,
  loading: state.question.loading,
  hasErrors: state.question.hasErrors,
  userId: state.auth.uid,
  url: state.auth.photoURL,
  nombre: state.auth.displayName,
  redirect: state.question.redirect,
})

export default connect(mapStateToProps)(SingleQuestionPage)
