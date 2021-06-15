import React from 'react';

function Time()
{
    const cdate= new Date();
     const d=cdate.toLocaleDateString();

   const  t=cdate.toLocaleTimeString();
    return(
          <React.Fragment>
            <h4>Current date is {d}</h4>
            <h4>Current time is {t}</h4>

          </React.Fragment>
    );
}
export default Time;