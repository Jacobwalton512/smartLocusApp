import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AppBarheader from './Components/AppBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EnergyUsage from "./Components/Charts/EnergyUsage";
import PropTypes from 'prop-types';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { withStyles } from '@material-ui/core/styles';
import { ALL, FIRSTBLOCK,SECONDBLOCK, THIRDBLOCK, FOURTHBLOCK } from '../constants';

const styles = {
    updateTables:  {
      paddingTop: 60,
    },
    buttonStyling: {
      marginTop: 15,
      marginLeft: 8,
    },
    tableHeader: { 
      textAlign: "center",
    }
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const values = [
   ALL,
   FIRSTBLOCK,
   SECONDBLOCK,
   THIRDBLOCK,
   FOURTHBLOCK,
];

function Home(props) {
    const [energyUsage, setEnergyusage] = useState(100);
    const [zones, setZones] = React.useState([]);
    const [tableHeader, setTableHeader] = useState("Displaying All Zones");
    const [chartData, setChartData] = useState(
      [
        ['x', 'SmartLocus Equipped', 'Test System'],
        ['January', energyUsage, 10 ],
        ['February', 10, 14],
        ['March', 23, 25],
        ['April', 17, 22],
        ['May', 18, 21],
        ['June', 9, 14],
        ['July', 11, 17],
        ['August', 27, 35],
      ]
    );
    const { classes } = props;

    const allData = [
      ['x', 'SmartLocus Equipped', 'Test System'],
      ['January', energyUsage, 10 ],
      ['February', 58, 78],
      ['March', 23, 25],
      ['April', 17, 22],
      ['May', 18, 21],
      ['June', 9, 14],
      ['July', 11, 17],
      ['August', 27, 35],
    ]
    const lineData1 = [
      ['x', 'SmartLocus Equipped', 'Test System'],
      ['January', energyUsage, 10 ],
      ['February', 10, 14],
      ['March', 23, 25],
      ['April', 17, 22],
      ['May', 18, 21],
      ['June', 9, 14],
      ['July', 11, 17],
      ['August', 27, 35],
    ]
    const lineData2 = [
      ['x', 'SmartLocus Equipped', 'Test System'],
      ['January', energyUsage, 10 ],
      ['February', 50, 39],
      ['March', 23, 25],
      ['April', 17, 22],
      ['May', 18, 21],
      ['June', 9, 14],
      ['July', 11, 17],
      ['August', 27, 35],
    ]
    const lineData3 = [
      ['x', 'SmartLocus Equipped', 'Test System'],
      ['January', energyUsage, 10 ],
      ['February', 85, 90],
      ['March', 23, 25],
      ['April', 17, 22],
      ['May', 18, 21],
      ['June', 9, 14],
      ['July', 11, 17],
      ['August', 27, 35],
    ]
    const lineData4 = [
      ['x', 'SmartLocus Equipped', 'Test System'],
      ['January', energyUsage, 10 ],
      ['February', 85, 90],
      ['March', 23, 79],
      ['April', 17, 89],
      ['May', 18, 21],
      ['June', 9, 14],
      ['July', 11, 17],
      ['August', 27, 35],
    ]

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setZones(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    const selectData = () => {
      if (zones.includes(ALL)){
        setChartData(allData);
        setTableHeader("Displaying All Zones")
      } else if (zones.includes(FIRSTBLOCK)){
        setChartData(lineData1);
        setTableHeader("Displaying Zones 1-5")
      } else if (zones.includes(SECONDBLOCK)){
        setChartData(lineData2);
        setTableHeader("Displaying Zones 6-10")
      } else if (zones.includes(THIRDBLOCK)){
        setChartData(lineData3);
        setTableHeader("Displaying Zones 11-15")
      } else if (zones.includes(FOURTHBLOCK)){
        setChartData(lineData4);
        setTableHeader("Displaying Zones 16-20")
      }
    }
    
    const selectZones = (zones) => {
      selectData(zones);
      setZones([]);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          <AppBarheader />
          <Box sx={{ width: '100%', paddingTop : '50px' }}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <div className={classes.tableHeader}>{tableHeader}</div>             
              <div>
                <EnergyUsage data={chartData ? (chartData) : ([])} />
              </div>
            </Grid>
        <Grid item xs={6}>
        <div className={classes.updateTables}>
          <div>
          <FormControl sx={{ m: 1, width: 400 }}>
            <InputLabel id="demo-multiple-checkbox-label">Zone</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={zones}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {values.map((zone) => (
                <MenuItem key={zone} value={zone}>
                  <Checkbox checked={zones.indexOf(zone) > -1} />
                  <ListItemText primary={zone} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className={classes.buttonStyling}>
          <Button variant="contained" size="large" onClick={selectZones}>
            Update
          </Button>
          </div>
          </div>
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