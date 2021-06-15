import React from 'react';



function Images()
{
    const imgsrc='https://girl.jpg';

    return(
        <React.Fragment>
           <img src={imgsrc} alt="girl"></img>
        </React.Fragment>

    );
}
export default Images;