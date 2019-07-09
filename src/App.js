import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Datasets from './components/imfdata/Datasets';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    datasets: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({loading: true});

    const res = await axios.get('/REST/SDMX_JSON.svc/Dataflow');
    //const res = await axios.get('https://api.github.com/users')
    //axios.get('http://dataservices.imf.org/REST/SDMX_JSON.svc/Dataflow').then(res => console.log(res.data));
    //axios.get('/REST/SDMX_JSON.svc/Dataflow').then(res => console.log(res.data));
    //axios.get('https://api.github.com/users').then(res => console.log(res.data));
    
    this.setState({datasets: res.data.Structure.Dataflows.Dataflow, loading: false});
    console.log(res.data);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Datasets loading={this.state.loading} datasets={this.state.datasets} />
        </div>

      </div>
    );
  }
}

export default App;
