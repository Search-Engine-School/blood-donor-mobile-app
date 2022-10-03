import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, FlatList,TouchableOpacity, Pressable} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth
} from "react-native-responsive-dimensions";
import  { useState } from "react";
import locationImage from "../../assets/location.png";
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
    <Text style={styles.text}>Donar Details</Text>
     </View>
     <View>
     <View style={styles.pinBox}>
     <View
            style={{
              width: "90%",
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              marginBottom: 15,
            }}
          >
            <Text style={styles.inputLabel}>FULL NAME</Text>
            <TextInput
              style={styles.input}
              defaultValue="type your name"
            ></TextInput>
          </View>
          <View
            style={{
              width: "90%",
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              marginBottom: 15,
            }}
          >
            <Text style={styles.inputLabel}>Area</Text>
            <TextInput
              style={styles.input}
              defaultValue="type area"
            ></TextInput>
          </View>
          <View
            style={{
              width: "90%",
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              marginBottom: 15,
            }}
          >
            <Text style={styles.inputLabel}>Phone</Text>
            <TextInput
              style={styles.input}
              defaultValue="type your Phone"
            ></TextInput>
          </View>
          <View
            style={{
              width: "90%",
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              marginBottom: 15,
            }}
          >
            <Text style={styles.inputLabel}>Last Date of Donation</Text>
            <TextInput style={styles.input} defaultValue="01/01/90"></TextInput>
          </View>
          <View
            style={{
              width: "90%",
              marginBottom: 15,
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
    width:429,
    height:101,
    top: 0,
   backgroundColor: "#DB1F26",
   borderRadius:10
  },
  text:{
    width:141,
    height:25,
    marginTop:46,
    marginLeft:77,
    fontSize:20,
    fontWeight:"700",
    color:'#FFFFFF'
  },  
  pinBox: {
    marginTop:100,
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(105),
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 20,
    backgroundColor: "#fff",
  },
  inputLabel: {
    color: "black",
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "600",
  },
  bloodGrpList: {
    height: responsiveScreenHeight(20),
  },
  item: {
    height: responsiveScreenHeight(3),
    width: responsiveScreenHeight(3),
    border: 12,
    borderColor:'red',
    elevation: 10,
    alignItems: "center",
    marginLeft:25,
    justifyContent: 'space-between'
  },
  btn: {
    width: responsiveScreenWidth(60),
    height: responsiveScreenHeight(6),
    backgroundColor: "#EB3738",
    borderRadius: 100,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  textBtn: {
    color: "#fff",
  },
  });