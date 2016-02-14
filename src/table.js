import React, { Component } from 'react';
import Row from './row';

export default class App extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Markets</th>
            <th>Opening</th>
            <th className='mid'>Sell</th>
            <th className='mid'>Buy</th>
            <th className='mid'>Update</th>
            <th className='mid'>Change</th>
            <th className='mid'>% Change</th>
            <th className='mid'>High</th>
            <th className='mid'>Low</th>
          </tr>
        </thead>
        <Row data={this.props.data} />
      </table>
    );
  }
}
