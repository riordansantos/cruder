import React from "react";
import Header from "../../components/Header/Header";

function LerMais() {
  return (
    <div>
      <Header />

      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>title</h2>
            </header>

            <div className="line"></div>

            <p>content</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LerMais;
