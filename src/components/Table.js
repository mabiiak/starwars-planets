import React, { useEffect, useState } from 'react';
import planetsFetch from '../services/Fetch';
import TableStyled from './Style';

export default function Table() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    planetsFetch()
      .then(({ results }) => {
        const data = results;
        setPlanets(data);
      });
  }, [setPlanets]);

  return (
    <TableStyled>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      {
        planets.map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        ))
      }
    </TableStyled>
  );
}
