import { useState } from 'react'
import myLogo from './assets/jpl.png'
import './App.css'
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Sheet';

function App() {
  const [count, setCount] = useState(0)

  return (
    <CssVarsProvider>
      <Sheet variant="plain">
        <Typography level="title-lg">
          Auto Suggest a Purchase
        </Typography>
        <Typography level="body-md">
          Welcome!
        </Typography>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App
