import React from 'react';

function List()
{

    const design2={
        color:'green',
        padding : '30px',
        backgroundColor:'black',
        borderRadius:'50px'
    }
    return(
        <React.Fragment>
            <h2>Here are the some list of features that you can see on my website</h2>
            <ol style={design2}>
                <li>Current Date</li>
                <li>Current Time</li>
                <li>Calculator</li>
                <li>Paragraphs</li>
                <li>Images</li>
                <li>Links</li>
          </ol>
        </React.Fragment>

    );
}
 export default List;