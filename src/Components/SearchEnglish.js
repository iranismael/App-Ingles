import React, { useState } from 'react';


const SearchEnglish = () => {
    const [dataInput, setDataInput] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [infoVerb, setInfoVerb] = useState([]);
    const [showTable, setShowTable] = useState(false);

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
          fetch(`https://ismaelfloresdev.com/app-ingles/verbs/get-verbs-english.php?name=${searchQuery}`)
        //fetch(`http://localhost/HOST/verbs/get-verbs-english.php?name=${searchQuery}`)
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
        
        fetch(`https://ismaelfloresdev.com/app-ingles/verbs/search-verb-english.php?name=${name}`)
        //fetch(`http://localhost/HOST/verbs/search-verb-english.php?name=${name}`)
        .then(respuesta => respuesta.json())
        .then(data1 => {
          console.log(data1);
          setInfoVerb(data1);
          setShowTable(true)
        })
        .catch(err => console.log(err))
      }

  return (
    <div className='content-search'>
      <div className='search-top'>
        <div className='search'>
          <input
            type="text"
            value={dataInput}
            onChange={handleInputChange}
            placeholder="Search Verb ..."
          />    
        </div>
        <div className='search-result'>
            {suggestions.map((item, index) => (
              <div
                onClick={()=>onSearch(item.verbo_ing)} 
                key={index}>{item.verbo_ing}
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
          <div className='content-table-info'>
            <div>
              <h3>Español</h3>
              <p>{infoVerb.verbo_esp}</p>
            </div>
            <div>
              <h3>Infinitive Present</h3>
              <p>{infoVerb.infinitive}</p>
            </div>
            <div>
              <h3>Simple Past</h3>
              <p>{infoVerb.simple_past}</p>
            </div>
            <div>
              <h3>Past Participle</h3>
              <p>{infoVerb.past_participle}</p>
            </div>
            <div>
              <h3>Gerund</h3>
              <p>{infoVerb.gerund}</p>
            </div>
          </div>
          
        }
      </div>
     
    </div>
  )
}

export default SearchEnglish