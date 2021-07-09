import React, {useContext} from 'react';
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