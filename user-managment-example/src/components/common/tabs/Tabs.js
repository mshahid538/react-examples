import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link as RouterLink } from "react-router-dom";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" component={RouterLink} to="/"/>
        <Tab label="Dashboard" component={RouterLink} to="/dashboard"/>
        <Tab label="Singin" component={RouterLink} to="/signin"/>
        <Tab label="Singup" component={RouterLink} to="/signup"/>
      </Tabs>
    </Box>
  );
}
