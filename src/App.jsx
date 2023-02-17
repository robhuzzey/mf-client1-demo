import React from "react";
import ReactDOM from "react-dom";
import Header from "header/Header";

import "./index.css";

const App = () => (
    <>
        <Header />
        <div>Hi there, I'm client1 test push with header</div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));