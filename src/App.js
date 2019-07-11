import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Datasets from './components/imfdata/Datasets';
import Search from './components/imfdata/Search';
import Alert from './components/layout/alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    datasets: [],
    loading: false,
    alert: null
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('/REST/SDMX_JSON.svc/Dataflow');
    //const res = await axios.get('https://api.github.com/users')
    //axios.get('http://dataservices.imf.org/REST/SDMX_JSON.svc/Dataflow').then(res => console.log(res.data));
    //axios.get('/REST/SDMX_JSON.svc/Dataflow').then(res => console.log(res.data));
    //axios.get('https://api.github.com/users').then(res => console.log(res.data));

    this.setState({ datasets: res.data.Structure.Dataflows.Dataflow, loading: false });
    //console.log(res.data);
  }

  searchDataset = async text => {
    const res = await axios.get(`/REST/SDMX_JSON.svc/DataStructure/${text}`);
    console.log(res.data);
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search
                    searchDataset={this.searchDataset}
                    setAlert={this.setAlert}
                  />
                  <Datasets loading={this.state.loading} datasets={this.state.datasets} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
            </Switch>

          </div>

        </div>
      </Router>
    );
  }
}

export default App;
