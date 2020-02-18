// Import the React libraries
import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import ComponentDetail from './ComponentDetail'

// Create react component 
const App = () =>{
    return (
        <div className="ui container comments">
        
        <ComponentDetail author="Naga"/> 
        <ComponentDetail author="Harsha"/>
        <ComponentDetail author="Vardhan"/> 

        </div>
    )
}


// Display the React component
ReactDOM.render(<App />, document.querySelector("#root"))