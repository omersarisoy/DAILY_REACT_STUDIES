import React from "react";
import ReactDOM from "react-dom";

class Recap extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Constructor Method",
             data: [],
        }
     
    }

    static getDerivedStateFromProps(props, state){
        return {name: props.name}
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then ((response) => response.json())
        .then((data) => this.setState({data: data}))

    }
    
    
    render(){
        return(
            <div>
                <p>This is a {this.state.name}</p>
                <p>This will print the names vaailable in API users data</p>

                { this.state.data.map(item => 
                <h3 key = {item.id}> {item.name} </h3>)}
                
            </div>  
        )
    }
}


export default Recap;