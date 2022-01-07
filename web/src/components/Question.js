import React from 'react'
import { Link } from 'react-router-dom'
import user from "../images/user.png";

export const Question = ({ question, excerpt, onDelete }) => (
  <article className={excerpt ? 'question-excerpt' : 'question'}>
    <div className="card mb-3">
      <div className="row g-0">
        <h6 className="card-header"></h6>
        <h2>{question.question}</h2>
        <p>{question.category}  - <small>{question.type}</small></p>

        <div className='col-md-2'>
          <img src={question.key != null ? question.key : user}
            alt="img-fluid rounded-end"
          />
        </div>
      </div>
    </div>
    {onDelete && (
      <button className="btn btn-dark button right" onClick={() => onDelete(question.id)}>DELETE</button>
    )}
    {excerpt && (
      <Link to={`/question/${question.id}`} className="btn btn-dark button">
        View Question
      </Link>
    )}
  </article>
)
