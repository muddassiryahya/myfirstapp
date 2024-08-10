import AppLayout from "../components/Layout";
import AppCard from "../components/ANTcard";
import { useState } from 'react'

function Dashbord() {
    console.log("useState--->", useState("Ahmed"));
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <AppLayout title="SMIT">
                <div>
                    <h1>Hello</h1>
                    <AppCard />
                    <h2>{counter}</h2>
                    <button onClick={() => setCounter(counter + 1)}>Increament</button>
                </div>
            </AppLayout>
        </div>
    )
}

export default Dashbord;