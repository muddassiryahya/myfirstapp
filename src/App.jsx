import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Input from './components/input';
import BasicCard from './components/MUIcard';
import Dashbord from './pages/Dashboard';



function App() {
  const arr = ["One", "Two", "Three"];

  const getData = (a) => {
    console.log("parent...", a);
  };

  return (
    <div>
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
