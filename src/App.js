import React, { Component } from 'react';

class Row extends Component {
  render() {
    var marketNodes = this.props.data.map(function(market) {
      return (
        <tr key={market.name}>
          <td>
            <span>{market.name}</span>
          </td>
          <td className='number'>{market.openingLevel}</td>
          <td className='number red'>{market.sellPrice}</td>
          <td className='number blue'>{market.buyPrice}</td>
          <td className='number'>{market.update}</td>
          <td className='number'>{market.change}</td>
          <td className='number'>{market.percentChange}</td>
          <td className='number'>{market.high}</td>
          <td className='number'>{market.low}</td>
        </tr>
      );
    });
    return (
      <tbody>{marketNodes}</tbody>
    );
  }
}

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
