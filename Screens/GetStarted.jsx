import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const GetStarted = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/1.jpg")}
          style={{ resizeMode: "contain", flex: 1 }}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={{ fontSize: 16, marginTop: 10 }}>
          {" "}
          OIS_MEDIA is the lastest and fastes Media In the World Now. We Design
          and Print STickers, Banners, and Others...
        </Text>
        <Text style={{fontSize: 16, marginTop: 20}}>Sign in or register with your OIS_MEDIA account.</Text>
      </View>

      <View style={styles.link}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
        <Text style={{fontSize: 20, borderBottomWidth: 2}}>REGISTER</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => props.navigation.navigate("SignIn")}>
        <Text style={{fontSize: 20, borderBottomWidth: 2}}>SIGN IN</Text>
      </TouchableOpacity>
    </View> 


    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  imageContainer: {
    flex: 0.5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",

  },

  textContainer: {
    flex: 0.1,

  },

  link: {
    flex: 0.4,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  
    
  }
});
