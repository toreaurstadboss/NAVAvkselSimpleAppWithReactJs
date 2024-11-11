import React from "react";
import "@navikt/ds-css";



function FormDemo(){
  
    return (

      <form style={{ margin: '100px' }}>
        <label aria-describedby="description_Aarsinntekt">Årsinntekt, i kroner</label>
        <input type="text"></input>
        <p id="description_Aarsinntekt" aria-hidden="true">Her skal du skrive inn i kroner og ikke i øre!</p>
      </form>
  
    );
}

export default FormDemo;