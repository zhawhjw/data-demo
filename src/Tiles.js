import React from 'react';
import Tile from './Tile'

export default class Tiles extends React.Component {
    render() {
        // Create tile for each item in data array
        // Pass data to each tile and assign a key
        return (
            <div className="tiles">
                {this.props.data.map((data) => {
                    return <Tile data={data} key={data.id} />
                })}
            </div>
        );
    }
}