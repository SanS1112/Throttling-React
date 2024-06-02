import { useState } from 'react'
import './App.css'


let i = 0;

function App() {
  const [ui, setUi] = useState("");


  function handleChange(e){
    if(i==0){
  i=i+1;
  console.log("Fetching Data for: ",e.target.value);
  setUi(e.target.value);
  setTimeout(()=>{
    console.log("Fetched Data");
    i=0;
  }, 2000);
  }else{ console.log("Request Throttled for: ",e.target.value);
  setUi(e.target.value);
}
}

  return (
    <>
      <h2>Throttling Search</h2>
      <input type="text" value={ui} onChange={handleChange} />
      <h3> {ui}</h3>
    </>
  );
}

export default App
