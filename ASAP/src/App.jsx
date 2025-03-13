import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
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
import Grid from '@mui/material/Grid2';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


//const APIurl = "/PHP/asap/TitleRequests.php"
const APIurl = "/staticData.json"

function App() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const myrows = { id: 1, title: '', author: '', isbn: '', format: '', publication: '', status: 1 };
  const [allSuggestions, setAllSuggestions] = useState([myrows, myrows, myrows, myrows, myrows]);





  useEffect(() => {
    //fetch('/PHP/asap/TitleRequests.php')
    fetch('/staticData.json')
      .then(response => response.json())
      .then(data => groupData(data));
  }, []); // The empty array ensures the effect runs only once after the initial render

  function groupData(data) {
    var groupedArray = [[], [], [], [], []]
    for (var row of data) {
      groupedArray[(row.status - 1)].push(row);
    }

    setAllSuggestions(groupedArray)
  }


  useEffect(() => {
    console.log(allSuggestions[1]);
  }, [allSuggestions]);

  return (
    <>
      <CssBaseline />
      <Container>
        <Box variant="plain" >
          <Grid container spacing={2} sx={{ alignItems: 'center', justifyContent: 'center'}}>
            <Grid size={ 1 }>
              <img src="/logo.png" style={{width:"100%"}}/>
            </Grid>
            <Grid size={ 11 } sx={{ justifyContent: 'center'}}>
              <Typography variant="h4" sx={{ marginBottom: "20px" }}>
                Auto Suggest a Purchase
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="Tabs">
              <Tab label="Suggestions" value="1" />
              <Tab label="To Purchase" value="2" />
              <Tab label="Holds Placed" value="4" />
              <Tab label="Closed" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <SuggestionsTable rows={allSuggestions[0]}></SuggestionsTable>
          </TabPanel>
          <TabPanel value="2">
            <PurchaseTable rows={allSuggestions[1]}></PurchaseTable>
          </TabPanel>
          <TabPanel value="3">
            <ReviewTable rows={allSuggestions[3]}></ReviewTable>
          </TabPanel>
          <TabPanel value="4">
            <HoldTable rows={allSuggestions[2]}></HoldTable>
          </TabPanel>
          <TabPanel value="5">
            <ClosedTable rows={allSuggestions[4]}></ClosedTable>
          </TabPanel>
        </TabContext>
      </Container>
      <ToastContainer
        position="bottom-right"
      />
    </>
  )
}

export default App
