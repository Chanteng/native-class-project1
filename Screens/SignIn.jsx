import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const SignIn = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity  >
      <Entypo name="arrow-left" size={30} color="white" onPress={() => props.navigation.goBack()} />
      </TouchableOpacity>
      <Text style={{fontSize: 30, marginLeft: 120, color: "white"}}>SignIn</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/1.jpg")}
          style={{ resizeMode: "contain", flex: 1 }}
        />
      </View>

    <View style={styles.textcontainer}>
   
   <Text style={{fontSize: 16, marginTop: 20, color: "red"}}>Email or Password incorrect, please check and try again.</Text>
    
    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 25}}>
    <Text style={{fontSize: 16}}>Email</Text>
    <TextInput placeholder='oismediagh@gmail.com' />
    </View>
    <TextInput placeholder='Type Here' style={{borderBottomColor: "blue", borderBottomWidth: 1}} />
    
    <View>
    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 25}}>
    <Text style={{fontSize: 16}}>Password</Text>
    <TextInput placeholder='Abeg type your thing' />
    </View>
    <TextInput placeholder='Type Here' style={{borderBottomColor: "blue", borderBottomWidth: 1}} />
    
  
  <View style={styles.btn}>
    <TouchableOpacity  onPress={() => props.navigation.navigate("Home")} >
      <Text style={{fontSize: 24, color: "white", fontWeight: "bold"}}>SIGN IN</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.text}>
    <Text style={{fontSize: 20}}>Forget?  </Text>
    <Text style={{fontSize: 20, borderBottomWidth: 2}}>Reset Password</Text>
  </View>
  </View>
    </View>

    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 0.1,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "blue"
  },

  imageContainer: {
    flex: 0.5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",

  },


  textcontainer: {
    flex: 0.6,
    marginTop: 2,
    paddingHorizontal: 16
  },

  btn: {
    backgroundColor: "blue",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },

  text: {
    flexDirection: "row",
    marginTop: 15
  }
})