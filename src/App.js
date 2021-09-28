import { PhotoEditorSDK } from './PhotoEditorSDK'
import './App.css'

import image from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>

      <PhotoEditorSDK />
    </div>
  )
}

export default App
