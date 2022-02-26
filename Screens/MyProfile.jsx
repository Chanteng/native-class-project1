import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const MyProfile = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity  >
      <Entypo name="arrow-left" size={30} color="white" onPress={() => props.navigation.goBack()} />
      </TouchableOpacity>
      <Text style={{fontSize: 30, marginLeft: 120, color: "white"}}>My Profile</Text>
      </View>

      <View style={styles.imgtext}>
          <View style={styles.imageContainer}>
            <Image  source={require("../assets/1.jpg")}
          style={{ resizeMode: "contain", borderRadius: 500, height:100, width:100 }} />
          <View style={styles.text}>
            <Text style={{fontSize:25, fontWeight: "bold"}}>Oduro Isaac Sapey</Text>
            <Text style={{fontSize:20}}>CEO</Text>
          </View>
          </View>
      </View>

      <View style={{flexDirection: "row", paddingHorizontal: 16, marginBottom: 20}}>
      <Entypo name="twitter-with-circle" size={40} color="black" />
      <Entypo style={{marginLeft: 20}} name="linkedin-with-circle" size={40} color="black" />
      </View>

      <View style={{paddingHorizontal: 16}}>
          <View style={{flexDirection: "row"}}>
      <Ionicons name="call-outline" size={24} color="black" />
      <Text style={{fontSize:20, marginLeft: 20}}>+233 (570) 885 254</Text>
      </View>
      <View style={{flexDirection: "row", marginTop: 10}}>
      <AntDesign name="mail" size={24} color="black" />
      <Text style={{fontSize:20, marginLeft: 20}}>oismediagh@gmail.com</Text>
      </View>
      <View style={{flexDirection: "row" , marginTop: 10}}>
      <EvilIcons name="location" size={24} color="black" />
      <Text style={{fontSize:20, marginLeft: 20}}>Kasoa - Washinton DC, Ghana</Text>
      </View>
      </View>

    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
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

      imgtext: {
          flex: 0.2,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
      
      },

      imageContainer: {
          flexDirection: "row",
      },

      text: {
          padding: 16,
      }

    
})