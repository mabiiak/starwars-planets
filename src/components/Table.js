import React from 'react';
import planetsFetch from './Fetch';

export default function Table() {
  planetsFetch();
  return (
    <table>
      <th>
        <td>Name</td>
        <td>Rotation period</td>
        <td>Orbital Period</td>
        <td>Diameter</td>
        <td>Climate</td>
        <td>Gravity</td>
        <td>Terrain</td>
        <td>Surface Water</td>
        <td>Population</td>
        <td>Films</td>
        {/*
          map com data criando
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        */}
      </th>
    </table>
  );
}
