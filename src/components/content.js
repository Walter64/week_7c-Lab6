import React from 'react'

// Content class, with export keyword to export functions, variables so they can be accessed in other js files.
export class Content extends React.Component{

    //  When the component file is called it calls the render() method by default because that component needs to display the HTML markup or we can say JSX syntax.
    render(){
        // return a reference to the component or return null for stateless components
        return(
            // what will be displayed on page
            <div>
                <h1>Hello World</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}