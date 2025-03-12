import { useState } from 'react'
import myLogo from './assets/jpl.png'
import './App.css'
import SuggestionForm from './suggestionForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width:"600px"}}>
      <div className="form-group row justify-content-center">
        <div className="col-4" style={{textAlign:"right"}}>
          <img className='img-fluid' src={myLogo} />
        </div>
        <div className="col-8">
          <h3 style={{ color: "#0569B3" }}>Suggest a Purchase</h3>
        </div>
      </div>
      <SuggestionForm></SuggestionForm>
    </div>  
  )
}

export default App
