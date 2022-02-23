import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import GetStarted from "./GetStarted";
import { NavigationContainer } from "@react-navigation/native";

const Home = (props) => {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../assets/Logo.png")}
        />
        <Text style={{fontSize: 30, marginLeft: 10}} >OIS_MEDIA</Text>
      </View>

      <View style={styles.text}>
        <Text style={{fontSize: 30, marginLeft: 10}} >OIS_MEDIA</Text>
        <Text style={{fontSize: 30, marginLeft: 10}} >CONTACT APP</Text>
      </View>

  


     <View style={styles.link}>
      <TouchableOpacity  onPress={() => props.navigation.navigate("GetStarted")}>
        <Text style={{fontSize: 30, borderBottomWidth: 2}}>Get Started</Text>
      </TouchableOpacity>
    </View> 

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  header: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },

  link: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  }
});
