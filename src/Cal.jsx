import React from 'react';

function Cal(a,b)
{
    let add=a+b;
    return(add);
}

function Cal1(a,b)
{
    let sub =a-b;
    return(sub);
}

function Cal2(a,b)
{
    let mul = a*b;
    return (mul);
}

export default Cal;
export {Cal1,Cal2};