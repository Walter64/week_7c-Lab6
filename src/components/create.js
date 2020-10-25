// import React - allows components to be defined as classes or functions.
import React from 'react';

// Create class
export class Create extends React.Component{

    //render() method is the only required method in a class component, called by default
    render(){
        return(
            <div>
                <h1>This is the Create component</h1>
            </div>
        );
    }

}