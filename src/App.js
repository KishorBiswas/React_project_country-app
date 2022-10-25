import React, {useState, useEffect} from "react";

import Countries from "./Component/Countries";
import "./App.css";
import Search from "./Component/Search";



let url = "https://restcountries.com/v3.1/all";

function App() {

const [isLoding, setLoding] = useState(null);
const [isError, setError] = useState(null);
const [countries, setCountries] = useState([]);
const [filterCountries, setFilterCountries] = useState(countries);



const fetchData = async (url) => {
  setLoding(true);
  try{
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setFilterCountries(data);
    setLoding(false);
    setError(null);

    // console.log(countries);

  }catch(error){
    setLoding(false);
    setError(error);
  }
  }

  useEffect(()=>{
    fetchData(url);
  }, [])




  const removeCountry = (name) => {
    const filter = filterCountries.filter((country) => {
        return country.name.common !== name
    });

    setFilterCountries(filter);
  }




  const searchCountry = (searchData) => {
    const searchCountryName = searchData.toLowerCase();

    const newFilterCountry = countries.filter((country) => {
      const newCountry = country.name.common.toLowerCase(); 

      return newCountry.startsWith(searchCountryName);
    })
    // console.log(newFilterCountry);
    setFilterCountries(newFilterCountry);
   
  }



  return (
   <div>
    <h1>Country App</h1>
    <Search onSearchCountry={searchCountry} />

    <main>
      <h4>Number of Country:- {filterCountries.length}/{countries.length}</h4>
      <h4>Remove Number of Country:- {countries.length - filterCountries.length}</h4>
    </main>

    {isLoding && <h2>Data is under process....</h2>}
    {isError && <h2>{isError.message}</h2>}
    {countries && <Countries countries={filterCountries} onRemoveCountry={removeCountry} /> }
   </div>
  );
}

export default App;
