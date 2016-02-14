import React, { Component } from 'react';

export default class Row extends Component {
  render() {
    var marketNodes = this.props.data.map(function (market) {
      return (
        <tr key={market.name}>
          <td>
            <span>{market.name}</span>
          </td>
          <td className='number'>{market.opening}</td>
          <td className='number red'>{market.sell}</td>
          <td className='number blue'>{market.buy}</td>
          <td className='number'>{market.updateTime}</td>
          <td className='number'>{market.change}</td>
          <td className='number'>{market.changePercentage}</td>
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
