import React from 'react';

function Heading()
{
    const design={
        color:'White',
        padding : '30px',
        backgroundColor:'black',
        borderRadius:'50px',
        fontSize:'50px'
    }

    const design1={
        color:'red',
        padding : '30px',
        backgroundColor:'black',
        borderRadius:'50px'
    }

    
    const myname='Tom';
    return(
        <React.Fragment>
            <h1 style={design}>Welcome to my Website</h1>
            <h2 style={design1}>My name is {myname}, How can I help you?</h2>
        </React.Fragment>
    )
}
export default Heading;