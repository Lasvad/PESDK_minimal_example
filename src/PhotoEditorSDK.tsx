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
      license: '',
      custom: {
        languages: {
          en: {
            warningModals: {
              discardChanges: {
                headingDelimiter: ':',
                body: 'You have unsaved changes. Are you sure you want to discard the changes?',
                buttonYes: 'Discard changes',
                buttonNo: 'Keep Changes'
              },
              unsavedChanges: {
                headingDelimiter: ':',
                body: 'You have unsaved changes. Are you sure you want to exit?',
                buttonYes: 'Exit without saving',
                buttonNo: 'Cancel'
              }
            }
          }
        }
      }
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
    return <div id="editor" style={{ width: '100vw', height: '100vh' }} />
  }
}
