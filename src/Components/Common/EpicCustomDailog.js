import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';


export default function EpicCustomDialog({ projects, setProjects, projectIndex }) {
  const [open, setOpen] = useState(false);

  const [addFormData, setAddFormData] = useState({ projectTitle: '' })

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
      name: addFormData.projectTitle,
    };

    const addNewEpic = projects && projects.map((project, index) => {
      if (index == projectIndex) return { ...project, epic: project.epic.concat(newProject) }
      return project
    })
    setProjects(addNewEpic)
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="cus-add-project">
      <Button className="cus-btn orange-btn" onClick={handleClickOpen}>
        <span className="btn-icon"  >+</span> Add Epic
      </Button>
      <Dialog open={open} className="cus-modal">
        <DialogTitle>Add a new Epic</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            noValidate
            autoComplete="off"
          >
            <div className="rep-filed">
              <TextField
                label="Epic Tittle"
                id=""
                defaultValue=""
                fullWidth
                required
                name="projectTitle"
                onChange={handleAddFormChange}
              />
            </div>
          </Box>
        </DialogContent>
        <DialogActions className="modal-foot-btn">
          <Button onClick={handleClose} className="cus-btn">Cancel</Button>
          <Button onClick={handleAddFormSubmit} className={`cus-btn orange-btn ${!addFormData.projectTitle ? 'disabled' : ''}`}>Add Epic</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
