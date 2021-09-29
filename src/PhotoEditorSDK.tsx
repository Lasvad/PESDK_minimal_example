import { UIEvent, PhotoEditorSDKUI, Tool } from 'photoeditorsdk'
import React from 'react'

export class PhotoEditorSDK extends React.Component {
  componentDidMount() {
    this.initEditor()
  }
  async initEditor() {
    const editor = await PhotoEditorSDKUI.init({
      container: '#editor',
      layout: 'basic',
      theme: 'dark',
      displayCloseWarning: true,
      image: 'http://localhost:3000/assets/example.jpg', // Image url or Image path relative to assets folder
      license: '',
      defaultTool: Tool.TRANSFORM,
      tools: [Tool.TRANSFORM, Tool.ADJUSTMENT]
    })
    console.log('PhotoEditorSDK for Web is ready!')
    editor.on(UIEvent.EXPORT, imageSrc => {
      console.log('Exported ', imageSrc)
    })

    editor.on(UIEvent.EXPORT, imageSrc => {
      console.log('exported')
    })
    editor.on(UIEvent.CLOSE, () => {
      console.log('closed')
    })
  }

  render() {
    return <div id="editor" />
  }
}
