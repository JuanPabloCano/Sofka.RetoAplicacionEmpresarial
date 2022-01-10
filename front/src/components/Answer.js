import React from 'react'
import 'firebase/firestore';
import 'firebase/auth';
import user from "../images/user.png"
import Swal from 'sweetalert2'


export const Answer = ({ answer, userId, onDelete }) => (
  <aside className="answer">
    <div className="card mb-3">
      <div className="row g-0">
        <h6 className="card-header">{answer.nombre != null ? answer.nombre : "Unrecognized"}</h6>

        <div className="col-md-2">
          <img src={answer.url != null ? answer.url : user} alt="img" width={100} />
        </div>

        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">Respuesta</h5>
            <div className='question-style' dangerouslySetInnerHTML={{ __html: answer.answer }} />

            {answer.userId === userId &&
              <button className="btn btn-dark btn btn-danger" onClick={() => {
                Swal.fire({
                  title: "¿Seguro que quiere eliminar esta respuesta?",
                  text: "Sus respuestas tambien serán eliminadas",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#000000",
                  cancelButtonColor: "#b80000",
                  confirmButtonText: "Si",
                }).then((result) => {
                  if (result.isConfirmed) {
                    onDelete(answer.id)
                    Swal.fire("Eliminado", "La respuesta fue eliminada", "success");
                  }
                });
              }} >Borrar respuesta</button>}
          </div>

        </div>

      </div>

    </div>
    <div>

    </div>

  </aside>
)
