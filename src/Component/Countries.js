import React from "react";

import Country from "./Country";
import { v4 as uuidv4 } from "uuid";
import style from "./Countries.module.css";


const Countries = (props) => {
    
    // console.log(props.countries);
    return(
       <section className={style.countries}>
            {/* <h2>This is a Countries Component</h2> */}

           {
            props.countries.map((country) => {
                const countryNew = { country, id: uuidv4() }

                return <Country {...countryNew} key={countryNew.id} onRemoveCounrty= {props.onRemoveCountry} /> 
            })
           }
       </section>

    );
}

export default Countries;