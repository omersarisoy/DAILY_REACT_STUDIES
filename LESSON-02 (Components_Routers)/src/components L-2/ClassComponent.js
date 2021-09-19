import React from "react"
class ClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {number:"1075"}
    }
    render(){
        return(
            <div className = "wrapper">
                <div>
                    <h1> CLARUSWAY </h1>

                    <p>Class Component</p>

                    <h3>My number is {this.state.number}</h3>
                    
                    <p>{this.props.surname}</p>
                    
                </div>
            </div>
        )
    }
}

export default ClassComponent
