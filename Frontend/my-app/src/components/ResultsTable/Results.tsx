import { Table } from '@mantine/core';
import { useState } from "react";
import './Results.css'
import { TableEntryModal } from '../TableEntryModal/TableEntryModal';


export default function Results({ tableData }) {
  const rows = tableData.map((entry) => (
    <tr key={new Date().getTime()}>
      <td>{new Date().toDateString()}</td>
      <td>{entry.uuid}</td>
      <td>{entry.type}</td>
      <td>{entry.country}</td>
      <td>{entry.model}</td>
      <td><TableEntryModal tableEntryData={entry}></TableEntryModal></td>
    </tr>
  ));


  return (

    <div className='results'> {/* Result Table */}

      <Table>
        <thead>
          <tr>
            <th>Since</th>
            <th>Session id</th>
            <th>Type</th>
            <th>Country</th>
            <th>Model</th>
            <th>Show</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>




    </div>


  )
}