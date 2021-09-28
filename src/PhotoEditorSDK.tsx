import { UIEvent, PhotoEditorSDKUI } from 'photoeditorsdk'
import React from 'react'

export class PhotoEditorSDK extends React.Component {
  componentDidMount() {
    this.initEditor()
  }
  async initEditor() {
    const editor = await PhotoEditorSDKUI.init({
      container: '#editor',
      displayCloseWarning: true,
      image: 'http://localhost:3000/assets/example.jpg', // Image url or Image path relative to assets folder
      license: ''
    })
    console.log('PhotoEditorSDK for Web is ready!')
    editor.on(UIEvent.EXPORT, imageSrc => {
      console.log('Exported ', imageSrc)
    })
  }

  render() {
    return <div id="editor" style={{ width: '100vw', height: '100vh' }} />
  }
}
