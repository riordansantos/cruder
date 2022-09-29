import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "./feed.css";

import More from "../../images/more.svg";

import HeaderMain from "../../components/HeaderMain/HeaderMain";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://upload-my-api.herokuapp.com/post")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("deu errado");
      });
  }, []);
  return (
    <div>
      <HeaderMain />

      <main>
        <div className="cards">
          {posts.map((post, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{post.title}</h2>
                  <img src={More} />
                </header>
                <div className="line">
                  <p>{post.description}</p>
                </div>
                <div className="btns">
                  <div className="btn-edit">
                    <Link to="/edit">
                      <button>Edit</button>
                    </Link>
                  </div>

                  <div className="btn-readmore">
                    <Link to="/lermais">
                      <button>Read More</button>
                    </Link>
                  </div>

                  <div className="btn-delete">
                    <button>delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Feed;
