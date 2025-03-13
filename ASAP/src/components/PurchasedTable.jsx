import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import * as Constants from '../assets/Constants';
const rows = [
  { id: 1, title: 'The Mysteries of the Universe: Discover the Best-kept Secrets of Space', author: 'Will Gater', isbn: '000000000', format: 'Book', publication: '2015', status: 'Suggested' },
];


export default function PurchasedTable() {
  return (
    <DataGrid rows={rows} columns={Constants.columns} />
  );
}