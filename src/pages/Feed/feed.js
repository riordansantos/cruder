import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "./feed.css";

import More from "../../images/more.svg";

import HeaderMain from "../../components/HeaderMain/HeaderMain";

function Feed() {
  return (
    <div>
      <HeaderMain />

      <main>
        <div className="cards">
          return(
          <div className="card" key={key}>
            <header>
              <h2>title</h2>
              <img src={More} />
            </header>

            <div className="btns">
              <div className="btn-edit">
                <Link to="/edite">
                  <button>Edit</button>
                </Link>
              </div>

              <div className="btn-readmore">
                <Link to="/lermais">
                  <button>Ler mais</button>
                </Link>
              </div>

              <div className="btn-delete">
                <button>delete</button>
              </div>
            </div>
          </div>
          )
        </div>
      </main>
    </div>
  );
}

export default Feed;
