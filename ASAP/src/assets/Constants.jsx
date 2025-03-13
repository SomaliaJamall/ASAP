import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export const columns = [
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
                    <Button onClick={onClick}>Sort</Button>
                </>
            )
        }
    },
];