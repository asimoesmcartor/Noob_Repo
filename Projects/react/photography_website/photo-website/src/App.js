import React, {Component} from 'react';
import '../node_modules/grommet-css'
import {Grid, Jumbotron } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

class App extends Component {
  render() {
    return (<div>
      <Jumbotron>
        <Grid>
          <h1>Photography Profile App</h1>
          <p>
            This app is used to test out the ease of React in NationBuilder.
          </p>

          <SearchForm />
        </Grid>
      </Jumbotron>;
      <Results />
    </div>);
  }
}

export default App;
