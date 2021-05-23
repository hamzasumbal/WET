import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const ThemeContext = React.createContext();


export const Provider = ({ children}) => {
//define States
    const [theme, setTheme] = useState("light");

    const isThemeStored = async ()=>{

        try {
            const value = await AsyncStorage.getItem('themeTest')
            if(value !== null) {
              setTheme(value)
              console.log("theme is stored already ", value)
              return true;
            }
                console.log("theme is not stored already")
                return false;
          } catch(e) {
            // error reading value
          }
    }

    const changeTheme = async (theme)=>{

        setTheme(theme)

        try {
            await AsyncStorage.setItem('themeTest', theme)
          } catch (e) {
            // saving error
          }

        console.log("theme is now set to : ", theme)
    }

   /*  const addblogpost = async (title1, content1, callback) => {
         await jsonserver.post("/blogposts", { title: title1,  content: content1 });
         setblogpost([...blogpost, { title: title1, content: content1 }])
         if (callback)
         {
             callback();
         }
    } 



 */

    return <ThemeContext.Provider value={{ state: theme, changeTheme, isThemeStored }}>

        {children}
    </ThemeContext.Provider>


}

export default ThemeContext;