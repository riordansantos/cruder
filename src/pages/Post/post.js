import React from "react";
import Header from "../../components/Header/Header";
import "./post.css";
import {useForm} from 'react-hook-form';

function Post() {

    const { register, handleSubmit, formState: { erros}} = useForm();
  return (
    <div>
      <Header />

      <main>
        <div className="card-post">
          <h1>Criar postagem</h1>
          <div className="line-post"></div>

          <div className="card-body-post">
            <form>
              <div className="fields">
                <label>Título</label>
              </div>

              <div className="fields">
                <label>Descrição</label>
              </div>

              <div className="fields">
                <label>Conteúdo</label>
              </div>

              <div className="btn-post">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Post;
