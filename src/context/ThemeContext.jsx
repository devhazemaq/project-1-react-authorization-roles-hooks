import { useEffect } from "react";
import { THEMES } from "../constants";

const { createContext, useContext, useState } = require("react");




export const ThemeContext = createContext(null) // ترى هاي بتقدر تحط فيها شيء غير الثيم أبحث عنها

export const useThemeContext = () => useContext(ThemeContext);


const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState(()=> localStorage.getItem('theme') ||THEMES.LIGHT );

  const toggleTheme = () => { 
    setTheme((prevState) => 
      prevState === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    )
  }

/*
  ترى تقدر تعمل متغير وتحط بيه قينة الثيم وتسندو للوكل سترج 
  بس فيه معضلة إنو لما يخزن القيمة بكون مخزن القيمة الحالية اللي هو تغير بي ما تغيرت لسا ماصار رندر
  فالحل انو تستخدم بريف ستيت
  طبعا بتقدر تستخدم اليوز إفكت وتسند قيمة الثيم الحالية بعد ما صار رندر
  ونا هين ما رح اعدل على الستيت يعني مارح ضلها تشتغل الا لما يسير تغير على الدبدنسس

*/

  useEffect(()=>{

  
    localStorage.setItem('theme',theme );
  },[theme])

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} > 
      {children} 
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;