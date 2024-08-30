import { useState } from 'react';
import './App.css';
//import Search from './Components/Search';
//import Search2 from './Components/Search2';
import SearchSpanish from './Components/SearchSpanish';
import SearchEnglish from './Components/SearchEnglish';

function App() {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () =>{
    setToggle(!toggle)
    changeMode();
    console.log(toggle);
  }
  const changeMode =() =>{
    const fondo = document.querySelector(".wrapper");
    fondo.classList.toggle('darkmode');
    console.log("cambiar modo");

  }
  return (
    <div className="wrapper">
      <div className='center-content'>

      
        <div className="form-check form-switch">
          <input onChange={toggleButton} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label">{toggle?'English':'Español'}</label>
          <div className="Toggle">
            {/*<button className={on ? 'on' : 'off'} on={on} onClick={() => { setOn.onToggle() }}>
                <div className="switch"/>
            </button>*/}
            {/*<button onClick={toggleButton}>{toggle?'on':'off'}</button>*/}
          </div>
        </div>
        {
          toggle === true
          ? 
          <SearchEnglish />
          : 
          <SearchSpanish />
        }
      </div>
      
    </div>
  );
}

export default App;
