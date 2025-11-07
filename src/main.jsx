import React from 'react'
import { createRoot } from 'react-dom/client'
import AIDubbingStudio from './App'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<AIDubbingStudio />)
