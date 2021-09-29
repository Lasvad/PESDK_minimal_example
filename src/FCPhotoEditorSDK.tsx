// import { UIEvent, PhotoEditorSDKUI } from 'photoeditorsdk'
// import React from 'react'

// export const PhotoEditorSDK = (props: any) => {
//   React.useEffect(() => {
//     initEditor()
//   }, [])
//   const initEditor = async () => {
//     const editor = await PhotoEditorSDKUI.init({
//       container: '#editor',
//       layout: 'basic',
//       theme: 'dark',
//       displayCloseWarning: true,
//       image: 'http://localhost:3000/assets/example.jpg', // Image url or Image path relative to assets folder
//       license: ''
//     })
//     console.log('PhotoEditorSDK for Web is ready!')
//     editor.on(UIEvent.EXPORT, imageSrc => {
//       console.log('Exported ', imageSrc)
//     })
//   }

//   return <div id="editor" style={{ width: '100vw', height: '100vh' }} />
// }
