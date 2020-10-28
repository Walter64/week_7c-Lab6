// import React - allows components to be defined as classes or functions.
import React from 'react';

// import Movies component
import { Movies } from './movies';

// http client make request and get a response back get method
import axios from 'axios';

// Read class
export class Read extends React.Component{

    // state object - stores JSON object of JSON collection of movie information
    state = {
        movies: [ ]
    };

    componentDidMount(){
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
        .then(Response => {
            this.setState({movies:Response.data.Search});
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    //render() method is the only required method in a class component, called by default
    // embed Movies component in Read component 
    // pass data from the Read state to the Movies component
    render(){
        return(          
            <div>                
                <h1>This is the Read Component</h1>                
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}