import AppLayout from "../components/Layout";
import AppCard from "../components/ANTcard";
import { useState } from 'react'

function Dashbord() {
    // console.log("useState--->", useState("Ahmed"));
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Maaz");

    const [todos, setTodos] = useState([
        {
            value: "Anas",
            disabled: true
        },
        {
            value: "Imran",
            disabled: true
        }
    ]);
    const [value, setValue] = useState("");

    const addTodo = () => {
        setTodos([...todos, { value, disabled: true }]);
        setValue("");
    }


    return (
        <div>
            <br />
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />

            <br /> <br />

            <button onClick={addTodo}>Add Todo</button>
            <button onClick={() => setTodos([])}>Delete All</button>

            <br /> <br />

            <ul>
                {todos.map((v, i) => <li key={i}>

                    <input
                        disabled={v.disabled} type="text" defaultValue={v.value}
                        onChange={(e) => v.value = e.target.value}
                    />

                    {v.disabled ?

                        <button onClick={() => {
                            todos.splice(i, 1, { ...v, disabled: false })
                            setTodos( [...todos] )
                        }}>Edit</button>

                        :

                        <button onClick={() => {
                            v.disabled = true;
                            setTodos([...todos]);
                        }}>Update</button>
                    }



                    <button onClick={() => {
                        const oldTodos = [...todos];
                        oldTodos.splice(i, 1)
                        setTodos(oldTodos)
                    }}>Delete</button>

                </li>)}
            </ul>

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