import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';
import ThemeContext from '../contexts/ThemeContext'

/* function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }
 */
export default function useCachedResources() {

    const [loadingComplete, setLoadingComplete] = useState(false)
    const {state : theme, changeTheme, isThemeStored} = useContext(ThemeContext)

    useEffect(() => {
        /*  async function loadResourcesAndDataAsync() {
           try {
     
             // Load fonts
             await Font.loadAsync({
                 LatoBlack: require('../../assets/fonts/Lato-Black.ttf'),
                 LatoBold: require('../../assets/fonts/Lato-Bold.ttf'),
                 Lato: require('../../assets/fonts/Lato-Regular.ttf'),
                 LatoThin: require('../../assets/fonts/Lato-Thin.ttf'),
             });
     
             // Load images
             const imageAssets = cacheImages([
                 require('../../assets/logo-simple.png'),
                 require('../../assets/homeIcons/comment.png'),
                 require('../../assets/homeIcons/like.png'),
                 require('../../assets/homeIcons/liked.png'),
                 require('../../assets/homeIcons/more.png'),
                 require('../../assets/homeIcons/options.png'),
                 require('../../assets/homeIcons/pause.png'),
                 require('../../assets/homeIcons/play.png'),
                 require('../../assets/homeIcons/views.png'),
                 require('../../assets/profileIcons/liked.png'),
                 require('../../assets/profileIcons/posts.png'),
                 require('../../assets/profileIcons/saved.png'),
                 require('../../assets/profileIcons/settings.png'),
                 require('../../assets/topicon.png')
     
             ]);
     
             await Promise.all([...imageAssets]);
           } catch (e) {
             console.warn(e);
           } finally {
             setLoadingComplete(true);
           }
         } */

        /* loadResourcesAndDataAsync(); */

            if(!isThemeStored())
            {
                const colorScheme = Appearance.getColorScheme();
                if (colorScheme === 'dark') {
                    changeTheme("dark")
                }else if (colorScheme === "light"){
                    changeTheme("light")
                }

            }
            setLoadingComplete(true);



    }, []);


    return [loadingComplete];
}