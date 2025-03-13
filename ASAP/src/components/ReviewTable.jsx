import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import * as Constants from '../assets/Constants';

const rows = [
  { id: 1, title: 'The Wizard of Oz', author: 'L. Frank Baum', isbn: '000000000', format: 'Book', publication: '1980', status: 'Suggested' },
];


export default function ReviewTable() {
  return (
    <DataGrid rows={rows} columns={Constants.columns} />
  );
}