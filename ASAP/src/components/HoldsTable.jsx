import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import * as Constants from '../assets/Constants';

const rows = [
  { id: 1, title: 'History of the USA', author: 'John Smith', isbn: '000000000', format: 'Book', publication: '2000', status: 'Suggested' },
];



export default function HoldsTable() {
  return (
    <DataGrid rows={rows} columns={Constants.columns} />
  );
}