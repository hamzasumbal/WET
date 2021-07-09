import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const ThemeContext = React.createContext();


export const Provider = ({ children}) => {

    const [theme, setTheme] = useState("light");

    const isThemeStored = async ()=>{

        try {
            const value = await AsyncStorage.getItem('theme')
            if(value !== null) {
              setTheme(value)
              console.log("theme is already set to ", value)
              return true;
            }
                console.log("theme is not set")
                return false;
          } catch(e) {
            // error reading value
          }
    }

    const changeTheme = async (theme)=>{

        setTheme(theme)

        try {
            await AsyncStorage.setItem('theme', theme)
          } catch (e) {
            // saving error
          }

        console.log("theme is now set to : ", theme)
    }


    return <ThemeContext.Provider value={{ state: theme, changeTheme, isThemeStored }}>

        {children}
    </ThemeContext.Provider>


}

export default ThemeContext;