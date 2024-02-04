import React from 'react'
import ReactDOM from 'react-dom/client'
import { DevSupport } from '@react-buddy/ide-toolbox'

import './scss/styles.scss'

import App from './App.tsx'
import { ComponentPreviews, useInitial } from '~/dev'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
      <App />
    </DevSupport>
  </React.StrictMode>
)
