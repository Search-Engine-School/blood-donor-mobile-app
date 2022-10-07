import React, { useState } from 'react';
import arrow from "../../assets/arrow-icon.png";
import { FlatList, Pressable, StyleSheet,Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth
} from "react-native-responsive-dimensions";
import {MaterialCommunityIcons} from '@expo/vector-icons'
const bloodGroup = [
  {
    id: 1,
    title: "A+",
  },
  {
    id: 2,
    title: "O+",
  },
  {
    id: 3,
    title: "B+",
  },
  {
    id: 4,
    title: "AB+",
  },
  {
    id: 5,
    title: "A-",
  },
  {
    id: 6,
    title: "O-",
  },
  {
    id: 7,
    title: "B-",
  },
  {
    id: 8,
    title: "AB-",
  },
];
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);


export default function DonnerDetails() {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#DB1F26" : "#fff";
    const color = item.id === selectedId ? "white" : "#DB1F26";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <MaterialCommunityIcons name='arrow-left' style={{top:51,left:40, color:'#fff',padding:0,fontSize:20,}}></MaterialCommunityIcons>
    <Text style={styles.text}>Donar Details</Text>
     </View>
     <View style={styles.jakhusi}>
     <View style={styles.pinBox}>
     <View
            style={{
              width: "90%",
              borderBottomWidth: 1,
              borderBottomColor: "#000",

            }}
          >
            <Text style={styles.inputLabel}>FULL NAME</Text>
            <TextInput
              style={styles.input}
             placeholder="type your name"
            ></TextInput>
          </View>
          <View
            style={{
              width: "90%",
              borderBottomWidth: 1,
              borderBottomColor: "#000"
            }}
          >
            <Text style={styles.inputLabel}>Area</Text>
            <TextInput
              style={styles.input}
             placeholder="type your area"
            ></TextInput>
          </View>
          <View
            style={{
              width: "90%",
              borderBottomWidth: 1,
              borderBottomColor: "#000",
            }}
          >
            <Text style={styles.inputLabel}>Phone</Text>
            <TextInput
              style={styles.input}
             placeholder="Phone number"
            ></TextInput>
          </View>
          <View
            style={{
              width: "90%",
              borderBottomWidth: 1,
              borderBottomColor: "#000",
          
            }}
          >
            <Text style={styles.inputLabel}>Last Date of Donation</Text>
            <TextInput style={styles.input} placeholder="01/01/90"></TextInput>
          </View>
          <View
            style={{
              width: "90%",
              marginBottom: 5,
            }}
          >
            <Text style={styles.inputLabel}>Blood Groups</Text>
          </View>
        <View style={styles.bloodGrpList}>
            <FlatList
              data={bloodGroup}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
              key={2}
              numColumns={6}
            />
            </View>  
          <View style={styles.location}>
            <Text style={styles.inputLabel1}>Location</Text>

          </View>
       
            <Pressable style={styles.btn}>
          <Text adjustsFontSizeToFit style={styles.textBtn}>
          Save
          </Text>
        </Pressable>
         
          </View>
        
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  header:{
    position:'absolute',
    width:'100%',
    height:"35%",
   backgroundColor: "#DB1F26",
   borderRadius:10,
   marginRight:20
  }, 

  text:{
    width:'100%',
    height:'30%',
    marginTop:26,
    marginLeft:107,
    fontSize:20,
    fontWeight:"700",
    color:'#FFFFFF'
  },  
  inputLabel: {
    color: "black",
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "600",},
  pinBox: {
    marginTop:100,
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(105),
    zIndex: 10,
    alignItems: "center",
    borderRadius: 10,
    elevation: 20,
    backgroundColor: "#fff",
  },

  bloodGrpList: {
    height: responsiveScreenHeight(20),
  },
  item: {
    height: responsiveScreenHeight(3),
    width: '10%',
    border: 12,
    borderColor:'red',
    elevation: 10,
    alignItems: "center",
    marginLeft:25,
    justifyContent: 'space-between',
    right:15
  },
  location: {
    height: 200,
    width: '80%',
    bottom:100,
    left:20
  },
  inputLabel1: {
    color: "black",
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "600",
    right: 40
  },
  btn: {
    width: responsiveScreenWidth(70),
    height: responsiveScreenHeight(6),
    backgroundColor: "#EB3738",
    borderRadius: 100,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
    bottom:60
  },
  textBtn: {
    color: "#fff",
    fontSize: 30,
  },
 
  });