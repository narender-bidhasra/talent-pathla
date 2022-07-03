import * as React from 'react';
import DrawerLeft from '../Components/Common/DrawerLeft'
import CustomTable from '../Components/Common/CustomTable'
import Box from '@mui/material/Box';

export default function Projects() {
  return (
    <>
      <DrawerLeft />
      <Box
        component="main"
        className="right-container"
        sx={{ flexGrow: 1, bgcolor: 'background.default', py: 12, px: 4 }}
      >
        <CustomTable />
      </Box>
    </>
  );
}