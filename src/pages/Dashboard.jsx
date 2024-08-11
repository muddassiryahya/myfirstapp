import AppLayout from "../components/Layout";
import AppCard from "../components/ANTcard";
import { useState } from 'react'

function Dashbord() {
    // console.log("useState--->", useState("Ahmed"));
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Maaz");

    const [todos, setTodos] = useState([
        { value: "Anas" },
        { value: "Imran" }
    ]);
    const [value, setValue] = useState("");

    const addTodo = () => {
        setTodos([...todos, { value }]);
        setValue("");
    }


    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <br /> <br />

            <button onClick={addTodo}>Add Todo</button>

            <br /> <br />

            <ul>
                {todos.map((v, i) => <li key={i}>{v.value}</li>)}
            </ul>
            <br />

            <AppLayout title="SMIT">
                <div>
                    <h1>Hello</h1>
                    <AppCard />
                    <h2>{counter}</h2>
                    <button onClick={() => setCounter(counter + 1)}>Increament</button>
                    <br /> <br />
                    <h2>{name}</h2>
                    <button onClick={() => setName("Tamim")}>Update</button>
                    <br /> <br />
                </div>
            </AppLayout>

        </div>
    )
}

export default Dashbord;