import React, {useState, useEffect} from 'react';
import CountryTable from "./CountryTable";
import countryFacade from "./countryFacade"
import './App.css';

const App = (props) => {
  const [countries, setCountries] = useState([]);
  const [labels, setlabels] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  function getData(){
    countryFacade.getCountries((data) => {
      console.log(name)
      if(name ==="")setCountries(data)
      else {
        setCountries(data.sort((a,b) => compare(a,b,name)));
        if(name === "revers") setCountries(countries.reverse())
      } 
    });
    countryFacade.getLabels((data) => {
      setlabels([...data]);
    });
  }

  let interval = setInterval(() => {}, 3000);
  useEffect(() => {
    getData();
    clearInterval(interval)
    interval = setInterval(() => {
      getData()
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [name]);

  const clickHandler = (evt) =>{
    const clickName = evt.target.innerHTML.toLowerCase()
    if(name === "revers"){
      if(name !== lastName){
        setName(clickName)
      }
    } else if(name === clickName) {
        setName("revers")
        setLastName(clickName)
    } else {
      setName(clickName)
    }
    // getData()
  }

  function compare(a,b,nameToFind){
    if(a[nameToFind] < b[nameToFind]){
      return 1
    }
    if(a[nameToFind] > b[nameToFind]){
      return -1
    }
    return 0
  }


    return (
      <div>
        <div className="App-header">
          <h2>React, State, Fetch</h2>
        </div>
        <div>
          <p>Your initial task is to fetch data from the server (see exercise for how to start it),
           and create a table below, with these data</p>          
          <CountryTable countries={countries} labels={labels} clickHandler={clickHandler}/>
        </div>
      </div>
    );
};


export default App;
