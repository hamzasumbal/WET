import React, { useState , useContext, useEffect} from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
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
        <Text style = {{
            fontSize : 20,
            paddingHorizontal : 10
        }}>🌙</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style = {{
            fontSize : 25,
            paddingHorizontal : 10
        }}>☀️</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection : "row"
  }
});

export default ToggleSwitch;