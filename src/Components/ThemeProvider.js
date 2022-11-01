import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext() ;
function ThemeProvider(props) {
    const [theme , setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || false) ;
    useEffect(() =>{
        localStorage.setItem('theme' , JSON.stringify(theme))
    } , [theme])
  return (
    <div>ThemeProvider</div>
  )
}

export default ThemeProvider