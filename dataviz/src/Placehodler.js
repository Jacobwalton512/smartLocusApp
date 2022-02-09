import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import './App.css';
import AppBarheader from './Components/AppBar';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import StartDatePicker from './Components/StartDate';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 100,
}));


function App() {
  const [startDate, setStartDate] = useState(190);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <AppBarheader />
        <Box sx={{ width: '100%', paddingTop : '50px' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <div>
                CHART GOES HERE
              </div>
            </Item>
            <Item>
              <div>
                {startDate}
              </div>
            </Item>
            <Item>1c</Item>
            <Item>1d</Item>
            <Item>1e</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <StartDatePicker />
            </Item>
          </Grid>
        </Grid>
      </Box>
      </div>
    </LocalizationProvider>
  );
}

export default App;