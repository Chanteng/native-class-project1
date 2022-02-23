import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const Register = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity  >
      <Entypo name="arrow-left" size={30} color="white" onPress={() => props.navigation.goBack()} />
      </TouchableOpacity>
      <Text style={{fontSize: 30, marginLeft: 120, color: "white"}}>Register</Text>
      </View>

      <View style={styles.imagecontainer}>

      </View>

    <View style={styles.textcontainer}>
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
    <Text style={{fontSize: 16}}>Full Name</Text>
    <TextInput placeholder='Oduro Isaac Sapey' />
    </View>
    <TextInput placeholder='Type Here' style={{borderBottomColor: "blue", borderBottomWidth: 1}} />
  
  
    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
    <Text style={{fontSize: 16}}>Email</Text>
    <TextInput placeholder='oismediagh@gmail.com' />
    </View>
    <TextInput placeholder='Type Here' style={{borderBottomColor: "blue", borderBottomWidth: 1}} />
    
    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
    <Text style={{fontSize: 16}}>Phone Number</Text>
    <TextInput placeholder='(+233) 570 885 254' />
    </View>
    <TextInput placeholder='Type Here' style={{borderBottomColor: "blue", borderBottomWidth: 1}} />
    
    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
    <Text style={{fontSize: 16}}>Role</Text>
    <TextInput placeholder='CEO' />
    </View>
    <TextInput placeholder='Type Here' style={{borderBottomColor: "blue", borderBottomWidth: 1}} />
    
    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
    <Text style={{fontSize: 16}}>Twitter</Text>
    <TextInput placeholder='@ois_media' />
    </View>
    <TextInput placeholder='Type Here' style={{borderBottomColor: "blue", borderBottomWidth: 1}} />
    
    <View>
    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
    <Text style={{fontSize: 16}}>LinkIn</Text>
    <TextInput placeholder='oismediagh@gmail.com' />
    </View>
    <TextInput placeholder='Type Here' style={{borderBottomColor: "blue", borderBottomWidth: 1}} />
    
  
  <View style={styles.btn}>
    <TouchableOpacity>
      <Text style={{fontSize: 24, color: "white", fontWeight: "bold"}}>REGISTER</Text>
    </TouchableOpacity>
  </View>
  </View>
    </View>

    </View>
  )
}

export default Register

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

  imagecontainer: {
    flex: 0.2,
    backgroundColor: "pink"
  },

  textcontainer: {
    flex: 0.5,
    marginTop: 2
  },

  btn: {
    backgroundColor: "blue",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50
  }
})