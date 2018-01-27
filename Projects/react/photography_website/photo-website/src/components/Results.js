import React from 'react';
import { Grid, ListGroup, ListGroupItem } from 'react-bootstrap';

const Results = () => (
  <Grid>
    <h2>Results List</h2>
    <ListGroup>
      <ListGroupItem href="#">Item 1</ListGroupItem>
      <ListGroupItem href="#">Item 2</ListGroupItem>
      <ListGroupItem href="#" disabled>Item 3</ListGroupItem>
    </ListGroup>
  </Grid>

);

export default Results;
