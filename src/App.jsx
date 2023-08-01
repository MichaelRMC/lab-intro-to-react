import React from "react";
import "./index.css";

function App() {
  return <div className="container">
          <header>
            <NavBar />
          </header>
          <UserProfile />
          <br />
          <Posts />
          <aside>
            <Contacts />
          </aside>
  </div>;
}

export default App;
