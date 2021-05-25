import React, { useState, useEffect, useContext } from 'react';
import { Asset } from 'expo-asset';
import { Appearance } from 'react-native';
import ThemeContext from '../contexts/ThemeContext'

function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

export default function useCachedResources() {

    const [loadingComplete, setLoadingComplete] = useState(false)
    const {state : theme, changeTheme, isThemeStored} = useContext(ThemeContext)

    useEffect(() => {
         async function loadResourcesAndDataAsync() {


            if(!await isThemeStored())
            {
                const colorScheme = Appearance.getColorScheme();
                if (colorScheme === 'dark') {
                   await  changeTheme("dark")
                }else if (colorScheme === "light"){
                    await changeTheme("light")
                }

            }


           try {
     
             // Load images
             const imageAssets = cacheImages([
                 require('../../assets/phoneback.png'),
                 require('../../assets/phonefront.png'),
                 require('../../assets/profileimage.jpg'),
                 require('../../assets/logo.png'),
             ]);
     
             await Promise.all([...imageAssets]);
           } catch (e) {
             console.warn(e);
           } finally {
             setLoadingComplete(true);
           }
         }

        loadResourcesAndDataAsync();

           



    }, []);


    return [loadingComplete];
}