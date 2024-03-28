import React from 'react'

class Hello extends React.Component{
    componentWillUnmount(){
        console.log("this is component")
    } 
    render(){
        return(
            <div>
                <h1>This is hello componenet</h1>
            </div>
        )
    }
}

export default Hello;

