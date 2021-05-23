import React, {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeContext from '../contexts/ThemeContext'

const Colors  = ()=>{


    const {state : theme} = useContext(ThemeContext)

    let Colors;


    if(theme === "dark")
    {
        Colors =  {

            bg: '#000000',
            text: '#FFFFFF',
            accent: 'rgb(44,44,46)',
            shade: '#007aff',
            red: '#ff3b30',
            green: '#4cd964',
            blue: "#007aff"
        }
    }

    if(theme === "light"){
        Colors =  {

            bg : '#FFFFFF',
            text: '#000000',
            accent : 'rgb(209,209,214)',
            shade : '#007aff',
            red : '#ff3b30',
            green : '#4cd964',
            blue : "#007aff"
        }
    }


    return Colors
}

export default Colors;


/* const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('themeTest')
      if(value !== null) {
        console.log("Sdfsdfsd")
      }
      else {
          console.log("Saahgdjhagsdjaghsjgdhajs")
      }
    } catch(e) {
      // error reading value
    }
  }
 */
  

/* export default {

        bg: '#000000',
        text: '#FFFFFF',
        accent: 'rgb(44,44,46)',
        shade: '#007aff',
        red: '#ff3b30',
        green: '#4cd964',
        blue: "#007aff"
    }
 */

//light mode

/* export default {

    bg : '#FFFFFF',
    text: '#000000',
    accent : 'rgb(209,209,214)',
    shade : '#007aff',
    red : '#ff3b30',
    green : '#4cd964',
    blue : "#007aff"
} */