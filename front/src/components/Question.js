import React from 'react'
import { Link } from 'react-router-dom'
import user from "../images/user.png";
import Swal from 'sweetalert2'

export const Question = ({ question, excerpt, onDelete }) => (
  <article className={excerpt ? 'question-excerpt' : 'question'}>
    <div className="card mb-3">
      <div className="row g-0">
        <h3 className="card-header"></h3>
        <h4>{question.category}  - <small>{question.type}</small></h4>
        <div className='question-style' dangerouslySetInnerHTML={{ __html:question.question}} />

        <div className='col-md-2'>
          <img src={question.key != null ? question.key : user}
            alt="img-fluid rounded-end" width={100}
          />
        </div>
      </div>
    </div>
    {onDelete && (
      <button className="btn btn-dark btn btn-danger" onClick={() => {
        Swal.fire({
          title: "¿Seguro que quiere eliminar esta pregunta?",
          text: "Sus respuestas tambien serán eliminadas",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#000000",
          cancelButtonColor: "#b80000",
          confirmButtonText: "Si",
        }).then((result) => {
          if (result.isConfirmed) {
            onDelete(question.id)
            Swal.fire("Eliminado", "La pregunta fue eliminada", "success");
          }
        });
      }} >Borrar pregunta</button>
    )}
    {excerpt && (
      <Link to={`/question/${question.id}`} className="btn btn-dark button">
        View Question
      </Link>
    )}
  </article>
)
