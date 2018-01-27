import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
import Cars from "../_components/Cars.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cars: []}
    }

    componentDidMount(){
        var _this = this;
        axios.get('https://swapi.co/api/vehicles/').then(function(results){
            _this.setState({
                cars: results.data.results
            });            
        })
    }

    render(){
        return (<div>
            <h1>List of Vehicles</h1>
                <Cars cars={this.state.cars} />
            </div>
        );
    }
}

export {App};