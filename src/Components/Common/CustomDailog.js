import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import CustomDatePicker from './CustomDatePicker'


export default function CustomDialog({ tableRows, setRows }) {
  const [open, setOpen] = useState(false);

  const [addFormData, setAddFormData] = useState({ projectTitle: '' })
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const handleAddFormChange = (event) => {
    const { value = "", name = "" } = event.target
    setAddFormData({ ...addFormData, [name]: value })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newProject = {
      projectTitle: addFormData.projectTitle,
      startDate: startDate || new Date().toDateString(),
      endDate: endDate || new Date().toDateString(),
      epic: []
    };
    const projectList = tableRows.concat(newProject)
    setRows(projectList);
    setOpen(false);
    setStartDate(null)
    setEndDate(null)
  };

  const handleSaveProject = () => {
    window.localStorage.setItem("rows", JSON.stringify(tableRows))
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="cus-add-project">
      <Button className="cus-btn orange-btn" onClick={handleClickOpen}>
        <span className="btn-icon">+</span> Add new project
      </Button>
      <Button className="cus-btn" onClick={handleSaveProject}>
        Save Project
      </Button>
      <Dialog open={open} className="cus-modal">
        <DialogTitle>Add a new project</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            noValidate
            autoComplete="off"
          >
            <div className="rep-filed">
              <TextField
                label="Tittle"
                id=""
                defaultValue=""
                fullWidth
                required
                name="projectTitle"
                onChange={handleAddFormChange}
              />
            </div>
            <div className="rep-filed">
              <CustomDatePicker
                label="Start Date"
                name="startDate"
                onChange={handleAddFormChange}
                value={startDate}
                setValue={setStartDate}
              />
            </div>
            <div className="rep-filed">
              <CustomDatePicker
                label="End Date"
                name="endDate"
                onChange={handleAddFormChange}
                value={endDate}
                setValue={setEndDate}
              />
            </div>
          </Box>
        </DialogContent>
        <DialogActions className="modal-foot-btn">
          <Button onClick={handleClose} className="cus-btn">Cancel</Button>
          <Button onClick={handleAddFormSubmit} className={`cus-btn orange-btn ${!addFormData.projectTitle ? 'disabled' : ''}`}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
