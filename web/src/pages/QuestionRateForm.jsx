import React from "react";
import { connect } from "react-redux";
import { postReview } from "../actions/questionActions";

import { useForm } from "react-hook-form";
import Rate from "../components/Rate";

function QuestionReviewForm({ question, user, dispatch, loading, hasErrors }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        dispatch(postReview(data.review, question.id, user));
    };

    const renderQuestions = () => {
        return question.userReviews.includes(user);
    };
    if (loading) return <p>Loading ...</p>;
    if (hasErrors) return <p>Unable to display questions.</p>;

    return (
        <div className="card text-center">
            <div className="card-header">
            Review Questions
            </div>
            <div className="card-body">
            {renderQuestions() || user === null ? (
            <div>
            Rating promedio:
            <Rate question={question} 
            />
            </div>
        ) : (
            <form  onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="review"></label>
            <select data-width="100%"
            className="form-select form-select-lg mb-5" aria-label=".form-select-lg example"
            {...register("review")} id="">
                <option value=""> Seleccione una opción de review </option>
                <option value="1">{`😭`}</option>
                <option value="2">{`😲`}</option>
                <option value="3">{`😍`}</option>
            </select>
            <button type="submit" className="btn btn-dark">
                Enviar
            </button>
            </form>
        )}
            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    loading: state.question.loading,
    hasErrors: state.question.hasErrors,
    question: state.question.question,
    user: state.auth.uid,
});

export default connect(mapStateToProps)(QuestionReviewForm);