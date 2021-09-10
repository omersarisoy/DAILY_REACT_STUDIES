import React from "react";

class ClassComponent extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = {counter:0}
    // };

    state = {counter:0}

    componentDidMount(){
        console.log("ComponentDidMount")
    };

    componentDidUpdate(){
        console.log("ComponentDidUpdate")
    };

    componentWillUnmount(){
        console.log("ComponentWillUnmount")
    }

    getIncrease =() => {
        this.setState({counter: this.state.counter + 1})
    }


    render(){
        console.log("Class counter:", this.state.counter)
        return(
            <div className="class">
                <h2>Class Component</h2>
                <p>
                    Counter:{this.state.counter}
                </p>

                <button onClick={this.getIncrease} >click</button>

            </div>
        )
    }
};

export default ClassComponent;