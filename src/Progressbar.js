import React from "react";
import "@navikt/ds-css";

import { ProgressBar } from "@navikt/ds-react";

function ProgressBarDemo(){
    const [isIndeterminate, setIsIndeterminate] = React.useState(false);

    return (
  
      <div style={{width: '300px', margin: '20px' }}>
        <p id="indeterminate-working">Jobber med saken</p>
        <ProgressBar 
          aria-labelledby="indeterminate-working"
          simulated={{
            seconds: 6,
            onTimeout: () => {
              console.info("Ferdig!");
              setIsIndeterminate(true);
            }
          }} />
          {isIndeterminate && <p>Oi, dette tok lengre tid enn forventet, gitt !</p>}
      </div>);

}

export default ProgressBarDemo;