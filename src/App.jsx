import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Input from './components/input';
import BasicCard from './components/MUIcard';
import Dashbord from './pages/Dashboard';
import { useState } from 'react'



function App() {
  const arr = ["One", "Two", "Three"];

  const getData = (a) => {
    console.log("parent...", a);
  };

  const [value, setValue] = useState("")

  return (
    <div>
          
      <input
        value={value} onChange={(e) => setValue(e.target.value
        )} type="text"
      />

      <h3>{value}</h3>
      <button onClick={() => setValue("")}>Reset</button>

      <br /><br />
      <Button className='btn' variant="contained">Contained</Button>
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
