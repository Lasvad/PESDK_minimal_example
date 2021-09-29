import { PhotoEditorSDK } from './PhotoEditorSDK'
import './App.css'
import { Dialog } from '@blueprintjs/core'

import image from './logo.svg'

const styles = {
  modalEditor: {
    height: 800,
    width: 800,
    position: 'relative'
  }
}

function App() {
  return (
    <div className="App">
      <Dialog style={styles.modalEditor} isOpen>
        <PhotoEditorSDK />
      </Dialog>
    </div>
  )
}

export default App
