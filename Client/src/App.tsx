import React from 'react'
import './App.css';
import  Navigation from './Customer/Components/Navigation/Navigation'
import Homepage from './Customer/pages/HomePage/Homepage';
function App() {
  return (
    <div>
        <div >
            <Navigation></Navigation>
            <div>
              <Homepage></Homepage>
            </div>
        </div>
    </div>
  )
}

export default App;