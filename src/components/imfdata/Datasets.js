import React, { Component } from 'react'
import Dataitem from './Dataitem';

class Datasets extends Component {
  render() {
    return (
      <div style={dataStyle}>
        {this.props.datasets.map(dataset => (
          <Dataitem key={dataset["@id"]} dataitem={dataset} />
        ))}
      </div>
    );
  }
}

const dataStyle ={
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}
export default Datasets


