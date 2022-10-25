import React from "react";

import style from "./Country.module.css";

const Country = (props) => {
    const {country} = props;

    const {name, flags, capital, population, area, languages, currencies } = country;
  

    let lang = "";
    for(let x in languages){
        lang += languages[x] + ", ";
    }

    // console.log(country);

    const handelRemoveCountry = (name) => {
        props.onRemoveCounrty(name);
    }


    
    return(
        <artical className={style.country}>
            <div >
                <img src={flags.png} alt={name.common} className={style.flags}/>
                <h3>Name:- {name.common}</h3>
                <h3>Capital:- {capital}</h3>
                 <h3>Languages:- {lang}</h3>
                <h3>Population:- {population}.</h3> 
                <h3>Area:- {area} Square/KM. </h3>
                <button className={style.btn} onClick={() => {
                    handelRemoveCountry(name.common) }}>
                        Remove Country
                </button>
            </div>
        </artical>
    );
}

export default Country;