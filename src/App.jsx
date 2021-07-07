import React, { useState } from "react";

import Todos from "./Todos";

const App = () => {
    const [InputText, setInputText] = useState()
    const [Items, setItems] = useState([])

    const InputEvents = (event) => {
        setInputText(event.target.value)
    }

    const ClickItems = () => {
        setItems((oldItems) => {
            return [...oldItems, InputText]
        })
        setInputText("");
    }
    return (
        <div>
            <div className="Main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text"
                        placeholder="add a Items"
                        onChange={InputEvents}
                        value={InputText}
                    />

                    <button onClick={ClickItems} >+  </button>
                    <hr />

                    <ol>


                        {Items.map((val, index) => {
                            return <Todos
                                key={index}
                                text={val} />
                        })
                        }
                    </ol>

                </div>
            </div>
        </div>

    )
}
export default App;
