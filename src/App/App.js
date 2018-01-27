import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
//import People from './cars';

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
        return(
            <div></div>
        );
    }
}

export {App};