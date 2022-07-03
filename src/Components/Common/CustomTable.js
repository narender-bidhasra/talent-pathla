import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomDialog from './CustomDailog';

import { rowData } from '../../table-data';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#edb700',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomTable() {
  const [open, setOpen] = useState(false);
  const [tableRows, setRows] = useState([])

  const handleDeleteProject = (index) => {
    setOpen(true);
    let updateRows = [...tableRows]
    updateRows = updateRows.filter((item, i) => i !== index)
    setRows(updateRows)
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    let projects = localStorage.getItem("rows" || []);
    projects = JSON.parse(projects)
    setRows(projects || [])
  }, [])

  return (
    <div className="cus-table">
      <CustomDialog setRows={setRows} tableRows={tableRows} />
      <TableContainer className="cus-table-inner" component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Start Date</StyledTableCell>
              <StyledTableCell>End Date</StyledTableCell>
              <StyledTableCell>Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows && tableRows.map((row, index) => (
              <StyledTableRow key={row.projectTitle}>
                <StyledTableCell component="th" scope="row">
                  {row.projectTitle}
                </StyledTableCell>
                <StyledTableCell>{(row.startDate)}</StyledTableCell>
                <StyledTableCell>{(row.endDate)}</StyledTableCell>
                <StyledTableCell>
                  <div className="delete-row">
                    <DeleteIcon onClick={() => handleDeleteProject(index)} />
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}



