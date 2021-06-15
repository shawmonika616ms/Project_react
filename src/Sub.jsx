import React from 'react';

const cstyle={}
 function Sub()
 {

    const curdate= new Date();
     const d = curdate.getHours();

     let greet=''
    if(d>=8 && d<=11)
    {
        greet = 'Good Morning';
        cstyle.color='Green';
    }
    else if(d>=12 && d<=20)
    {
        greet ='Good Afternoon';
        cstyle.color='Red';
    }
    else
    {
    greet ='Good Night';
    cstyle.color='Blue';
    }

      
     return(
         <h1>Hello Everyone,<span style={cstyle}> {greet}</span></h1>

     );
 }
 export default Sub;