import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import DrawerLeft from '../Components/Common/DrawerLeft'
import Box from '@mui/material/Box';
import EpicCustomDialog from './Common/EpicCustomDailog';

export default function Epics() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    let projects = localStorage.getItem("rows");
    projects = JSON.parse(projects)
    setProjects(projects)
  }, [])

  const handleDeleteEpic = (Projectindex, epicDataIndex) => {
    const addNewEpic = projects && projects.map((project, index) => {
      if (index == Projectindex) return { ...project, epic: project.epic.filter((item, i) => i !== epicDataIndex) }
      return project
    })
    setProjects(addNewEpic)
  };

  const handleSave = () => {
    window.localStorage.setItem("rows", JSON.stringify(projects))
  }

  return (
    <>
      <DrawerLeft />
      <Box
        component="main"
        className="right-container"
        sx={{ flexGrow: 1, bgcolor: 'background.default', py: 12, px: 4 }}
      >

        <div className="epics-pg">
          <div className="save-btn-sec">
            <Button className="cus-btn" onClick={handleSave} >Save</Button>
          </div>
          {
            projects && projects.map((project, projectIndex) => {
              return <div className="pro-rep">
                <div className="pro-head">
                  <h3>{project.projectTitle}</h3>
                  <span>
                    <EpicCustomDialog projects={projects} setProjects={setProjects} projectIndex={projectIndex} />
                  </span>
                </div>
                <ul>
                  {
                    project.epic.map((epicData, epicDataIndex) => {
                      return <li>
                        <h4>{epicData.name}</h4>
                        <select>
                          <option>Priority 1</option>
                          <option>Priority 2</option>
                          <option>Priority 3</option>
                        </select>
                        <div className="epic-delete">
                          <DeleteIcon onClick={() => handleDeleteEpic(projectIndex, epicDataIndex)} />
                        </div>
                      </li>
                    })
                  }
                </ul>
              </div>
            })
          }

        </div>
      </Box>
    </>
  );
}