import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import * as Constants from '../assets/Constants';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const rows = [
  { id: 1, title: 'Frankenstien', author: 'Mary Shelly', isbn: '000000000', format: 'Book', publication: '1923', status: 'Suggested' },
];

export default function SuggestionsTable() {
  const columns = [
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'author', headerName: 'Author', width: 150 },
    { field: 'isbn', headerName: 'ISBN/ISSN', width: 150 },
    { field: 'format', headerName: 'Format', width: 150 },
    { field: 'publication', headerName: 'Publication Date', width: 150 },
    {
      field: "action",
      headerName: "-",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          return alert(JSON.stringify(thisRow, null, 4));
        };

        return (
          <>
            <Button onClick={handleClickOpen}>Sort</Button>
          </>
        )
      }
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DataGrid rows={rows} columns={Constants.columns} />
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Sort this suggestion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Decide of your library will purchase this item. Making a selection here will email all patrons who requested the item that their suggestion was reviewed, and the decision that was reached.
          </DialogContentText>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Suggestion Result</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              1 suggestion
              2 purchased
              3 hold
              4 Review
              5 Closed
              <FormControlLabel value="1" control={<Radio />} label="Suggestion" />
              <FormControlLabel value="2" control={<Radio />} label="Purchase" />
              <FormControlLabel value="3" control={<Radio />} label="Hold" />
              <FormControlLabel value="4" control={<Radio />} label="Review" />
              <FormControlLabel value="5" control={<Radio />} label="Closed" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>

  );
}