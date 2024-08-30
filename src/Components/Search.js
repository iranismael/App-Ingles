/*import React, { useEffect, useState } from 'react'

const Search = () => {
  const [data, setData] = useState([])
  const [filterData, setFilterData ] = useState([])
  const [value, setValue] = useState([]);
  const [infoVerb, setInfoVerb] = useState([]);
  const [showTable, setShowTable] = useState(false);

    useEffect(()=>{
        //fetch("https://jsonplaceholder.typicode.com/users")
        fetch('http://localhost/HOST/verbs/get-verbs.php')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          //setData(data);
          setFilterData(data);
        })
        .catch(err => console.log(err))
    },[])
    
    const handleFilter = (value) => {
      setValue(value);
      setInfoVerb([])
      setShowTable(false)
      //const res = filterData.filter(f => f.name.toLowerCase().includes(value))
      const res = filterData.filter(f => f.verbo_esp.toLowerCase().includes(value))
      setData(res);
      if(value === ""){
        setData([])
      }
    }

    const onSearch =(searchName) => {
      setValue(searchName);
      setData([]);
      console.log(searchName);
      consultApi(searchName)
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
  return (
    <div className='content-search'>
      <div className='search-top'>
        <div className='search'>
            <input type="text" value={value} placeholder='Escribe ...' onChange={e => handleFilter(e.target.value)}/>    
        </div>
        <div className='search-result'>
          {data.map((d, i) => (
            <div key={i} onClick={()=>onSearch(d.verbo_esp)}>
              {d.verbo_esp}
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
              
                <th scope="col">Infinitive Present</th>
                <th scope="col">Simple Past</th>
                <th scope="col">Past Participle</th>
                <th scope="col">Gerund</th>
                <th scope="col">Español</th>
              </tr>
            </thead>
            <tbody>
              <tr>
               
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

export default Search

*/