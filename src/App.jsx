import logo from './logo.svg';
import './App.css';
// import Button from '@mui/material/Button';
import Input from './components/input';
import BasicCard from './components/MUIcard';
import Dashbord from './pages/Dashboard';
import { useState } from 'react'
import BasicForm from './components/Form';
import Button from 'react-bootstrap/Button';




function App() {
  const arr = ["One", "Two", "Three"];

  const getData = (a) => {
    console.log("parent...", a);
  };

  const [value, setValue] = useState("");

  const [type, setType] = useState("login");

  return (
    <div>
      <div className='container'>
        <div className="row justify-content-center">
          {type === "login" ?

            <div className="col-6 p-5">
              <h2>Login</h2>
              <BasicForm />

              <Button onClick={() => setType("register")} variant="link">Registration Now!</Button>
            </div>

            :

            <div className="col-6 p-5">
              <h2>Register</h2>
              <BasicForm />

              <Button onClick={() => setType("login")} variant="link">Login Now!</Button>
            </div>
          }
        </div>
      </div>

      <br /><br /><br />
      
      <input
        value={value} onChange={(e) => setValue(e.target.value
        )} type="text"
      />

      <h3>{value}</h3>
      <button onClick={() => setValue("")}>Reset</button>

      <br /><br />
      {/* <Button className='btn1' variant="contained">Contained</Button> */}
      <br />
      <br />

      <Input onChange={(e) => console.log(e.target.value)} />

      {arr.map((v, i) => (
        <BasicCard key={i} v={v} i={i} getData={getData} />
      ))}
      <br /><br /><br />

      <Dashbord />

    </div>

  );
}

export default App;
