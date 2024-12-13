import React, { useEffect, useState } from 'react'
import Mainpage from './project/components/pages/Mainpage'

const App = () => {
  const [theme, settheme] = useState('light')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  const handleThemeChange=()=>{
    settheme(theme==='light'?'dark':'light')
  }
  return (
    <div>
      <Mainpage change={handleThemeChange}/>
    </div>
  )
}

export default App
