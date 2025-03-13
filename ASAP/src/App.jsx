import { useState, useEffect, useRef } from 'react'
import * as React from 'react';
import myLogo from './assets/jpl.png'
import './App.css'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './components/suggestionsTable'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SuggestionsTable from './components/suggestionsTable';
import ReviewTable from './components/ReviewTable';
import PurchaseTable from './components/PurchasedTable';
import HoldTable from './components/HoldsTable';
import ClosedTable from './components/ClosedTable';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const allSuggestions = useRef([])


  useEffect(() => {
    fetch('/PHP/asap/asap.php')
      .then(response => response.json())
      .then(data => allSuggestions.current = data);
  }, []); // The empty array ensures the effect runs only once after the initial render

  

  return (
    <>
      <CssBaseline />
      <Container>
        <Box variant="plain">
          <Typography variant="h3">
            Auto Suggest a Purchase
          </Typography>
        </Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="Tabs">
              <Tab label="Suggestions" value="1" />
              <Tab label="Purchase" value="2" />
              <Tab label="Holds Placed (Review)" value="4" />
              <Tab label="Closed" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <SuggestionsTable></SuggestionsTable>
          </TabPanel>
          <TabPanel value="2">
            <PurchaseTable></PurchaseTable>
          </TabPanel>
          <TabPanel value="3">
            <ReviewTable></ReviewTable>
          </TabPanel>
          <TabPanel value="4">
            <HoldTable></HoldTable>
          </TabPanel>
          <TabPanel value="5">
            <ClosedTable></ClosedTable>
          </TabPanel>
        </TabContext>
      </Container>
      {posts}
    </>
  )
}

export default App
