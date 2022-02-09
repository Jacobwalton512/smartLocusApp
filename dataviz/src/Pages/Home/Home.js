import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AppBarheader from './Components/AppBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import StartDatePicker from './Components/StartDate';
import EndDatePicker from './Components/EndDate';
import EnergyUsage from "./Components/Charts/EnergyUsage";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    datePicker:  {
      paddingTop: 60,
    }
}


function Home(props) {
    function handleChange(){
        console.log("No fucking way.")
    }
    const [startDate, setStartDate] = useState(190);
    const { classes } = props;
    const lineData = [
            ['x', 'SmartLocus', 'Average', 'Test1'],
            [0, 0, 0, 0],
            [1, 10, 5, 6],
            [2, 23, 15, 6],
            [3, 17, 9, 8],
            [4, 18, 10, 9],
            [5, 9, 5, 9],
            [6, 11, 3, 9],
            [7, 27, 19, 9],
        ]
        const lineData2 = [
            ['x', 'SmartLocus', 'Average', 'Test2'],
            [0, 0, 0, 0],
            [1, 10, 5, 6],
            [2, 23, 15, 6],
            [3, 17, 9, 8],
            [4, 18, 10, 9],
            [5, 9, 5, 9],
            [6, 11, 3, 9],
            [7, 27, 19, 9],
        ]
        const lineData3 = [
            ['x', 'SmartLocus', 'Average', 'Test3'],
            ['january', 0, 0, 0],
            [1, 10, 5, 6],
            [2, 23, 15, 6],
            [3, 17, 9, 8],
            [4, 18, 10, 9],
            [5, 9, 5, 9],
            [6, 11, 3, 9],
            [7, 27, 19, 9],
        ]
    console.log(lineData);
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          <AppBarheader />
          <Box sx={{ width: '100%', paddingTop : '50px' }}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>             
              <div>
                <EnergyUsage data={lineData} />
              </div>
              <div>
                <EnergyUsage data={lineData2} />
              </div>
              <div>
                <EnergyUsage data={lineData3} />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.datePicker}>
                <StartDatePicker onChange={handleChange}/>
              </div>
              <div className={classes.datePicker}>
                <EndDatePicker />
              </div>
            </Grid>
          </Grid>
        </Box>
        </div>
      </LocalizationProvider>
    );
  }

  Home.propTypes = {
      classes: PropTypes.object.isRequired,
  }
  
  export default withStyles(styles)(Home);