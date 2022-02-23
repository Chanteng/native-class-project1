import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home"
import Details from "./Screens/Details"
import Login from "./Screens/Login"
import Register from "./Screens/Register"
import GetStarted from './Screens/GetStarted';



const Stack = createStackNavigator();

 const App =() => {
  return (
    <View style={styles.container}>
     
     <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
     <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
     </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16, 
  },
});


export default App;
