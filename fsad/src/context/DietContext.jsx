import { createContext, useState } from "react";
export const DietContext=createContext();

export const DietProvider=({children})=>{
const [water,setWater]=useState(0);
const [calories,setCalories]=useState(0);
const [isDark,setIsDark]=useState(false);
const [user,setUser]=useState(null);

const toggleTheme=()=>{
  setIsDark(!isDark);
  document.body.classList.toggle('dark');
}

return(
<DietContext.Provider value={{water,setWater,calories,setCalories,isDark,toggleTheme,user,setUser}}>
{children}
</DietContext.Provider>
)
}