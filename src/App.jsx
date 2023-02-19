import React, {useCallback, useState} from "react";
import ReactDOM from "react-dom";
import Header from "host/Header";
import TextContext from "host/TestContext";

import "./index.css";

const App = () => {
    const [count, setCount] = useState(0);
    const updateCount = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    return (
        <>
            <TextContext.Provider value={count}>
                <Header />
                <div>Hi there, I'm client1 test push with header</div>
                <button onClick={updateCount}>Update Value!</button>
            </TextContext.Provider>
        </>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));