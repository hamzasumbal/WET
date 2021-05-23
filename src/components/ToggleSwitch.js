import React, { useState , useContext, useEffect} from "react";
import { View, Switch, StyleSheet } from "react-native";
import ThemeContext from "../contexts/ThemeContext";

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(null);
  const {state : theme, changeTheme,} = useContext(ThemeContext)
  const toggleSwitch = () => {
      
    if(isEnabled)
    {
        changeTheme("dark")
    }
    else
    {
        changeTheme("light")
    }

    setIsEnabled(previousState => !previousState)
};


useEffect(()=>{

    if(theme === "dark")
    {
        setIsEnabled(false)
    }
    else if (theme === "light")
    {
        setIsEnabled(true)
    }
    
})
  

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ToggleSwitch;