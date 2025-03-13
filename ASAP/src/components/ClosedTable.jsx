import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import * as Constants from '../assets/Constants';

const rows = [
  { id: 1, title: 'Frankenstien', author: 'Mary Shelly', isbn: '000000000', format: 'Book', publication: '1923', status: 'Suggested' },
];

export default function ClosedTable() {
  return (
    <DataGrid rows={rows} columns={Constants.columns} />
  );
}