import React, { useState } from 'react';
//import { UseToggle } from './UseToggle';

const SearchEnglish = () => {
    const [dataInput, setDataInput] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [infoVerb, setInfoVerb] = useState([]);
    const [showTable, setShowTable] = useState(false);
    //const [isTextChanged, setIsTextChanged] = useToggle();
    //const [on, setOn] = UseToggle(true);
   // const [toggle, setToggle] = useState(false);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        //console.log(inputValue)
        //setInfoVerb([])
        setShowTable(false)
        if(inputValue === ""){
          console.log("texto vacio")
          setDataInput([]);
          setSuggestions([]);
        }else{
          setDataInput(inputValue);
          // Realizar la solicitud a la API para obtener las sugerencias
          fetchSuggestions(inputValue);
        }
      };
      const fetchSuggestions = (searchQuery) => {
        // Realizar la solicitud a la API para obtener las sugerencias
        fetch(`http://localhost/HOST/verbs/get-verbs2.php?name=${searchQuery}`)
          .then(response => response.json())
          .then(
            data => {
              if (typeof data === 'object') {
                //setSuggestions(data);
                console.log("objeto")
                //console.log(data)
                if(data.success === 0){
                  console.log("no hay resultados")
                }else{
                  setSuggestions(data);
                }
              } else {
                console.log("no resultados");
                //setSuggestions([]);
              }
            } 
          )
          .catch(error => console.error(error));
      };

      const onSearch =(searchName) => {
        setDataInput(searchName);
        //setData([]);
        //console.log(searchName);
        setSuggestions([]);
        consultApi(searchName);
      }
      const consultApi = (name) => {
        console.log("Consultar Api");
        console.log(name)
  
        fetch(`http://localhost/HOST/verbs/search-verb.php?name=${name}`)
        .then(respuesta => respuesta.json())
        .then(data1 => {
          console.log(data1);
          setInfoVerb(data1);
          setShowTable(true)
        })
        .catch(err => console.log(err))
      }

      /*const toggleButton = () =>{
        setToggle(!toggle)
      }*/

  return (
    <div className='content-search'>
      <div className='search-top'>
        <div className='search'>
          <input
            type="text"
            value={dataInput}
            onChange={handleInputChange}
            placeholder="Buscar Ingles..."
          />    
        </div>
        <div className='search-result'>
            {suggestions.map((item, index) => (
              <div
                onClick={()=>onSearch(item.verbo_esp)} 
                key={index}>{item.verbo_esp}
              </div>
            ))}
      
        </div>
      </div>
      <div className='content-table'>
        {
          showTable === false
          ? 
          <p className='hide-message'> Nada </p>
          : 
          <table className="table">
            <thead>
              <tr>
                {/*<th scope="col">#</th>*/}
                <th scope="col">Infinitive Present</th>
                <th scope="col">Simple Past</th>
                <th scope="col">Past Participle</th>
                <th scope="col">Gerund</th>
                <th scope="col">Español</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/*<th scope="row">1</th>*/}
                <td>{infoVerb.infinitive}</td>
                <td>{infoVerb.simple_past}</td>
                <td>{infoVerb.past_participle}</td>
                <td>{infoVerb.gerund}</td>
                <td>{infoVerb.verbo_esp}</td>
              </tr>
            </tbody>
          </table>
        }
      </div>
     
    </div>
  )
}

export default SearchEnglish