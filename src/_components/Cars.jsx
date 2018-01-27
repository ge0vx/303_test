import React from 'react';
import {render} from 'react-dom';

class Cars extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                                <th>name</th>
                                <th>model</th>
                                <th>manufacturer</th>
                                <th>cost_in_credits</th>
                                <th>length</th>
                                <th>max_atmosphering_speed</th>
                                <th>passengers</th>
                                <th>cargo_capacity</th>
                                <th>consumables</th>
                                <th>vehicle_class</th>
                                <th>url</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.cars.map(function(car,i){
                        return (
                            <tr key={i} >
                                <td>{car.name}</td>
                                <td>{car.model}</td>
                                <td>{car.manufacturer}</td>
                                <td>{car.cost_in_credits}</td>
                                <td>{car.length}</td>
                                <td>{car.max_atmosphering_speed}</td>
                                <td>{car.passengers}</td>
                                <td>{car.cargo_capacity}</td>
                                <td>{car.consumables}</td>
                                <td>{car.vehicle_class}</td>
                                <td>{car.url}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
               )
    }
}

export default Cars