import React from "react";
import {
    Button,
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import bgImg from "../../assets/bg-three.png";
import TopBar from "../common/TopBar/TopBar";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const fontScale = Dimensions.get("window").fontScale;

export default function ThalassemiaProfile() {
    return (
        <ImageBackground source={bgImg} style={styles.container}>
          <TopBar></TopBar>
          <View style={styles.inputCard}>
          <Text
                style={{
                  fontSize: 17 / fontScale,
                  fontWeight: "bold",
                  textAlign:'center'
                }}
              >
                Jahidull Islam
              </Text>
          </View>
          <ScrollView
            style={{
              width: "100%",
            }}
          >
        <View style={styles.inputView}>
            <Pressable style={styles.Btn}>
              <Text style={{color:'white', fontSize:20,}}>Thalassemia Profile</Text>
            </Pressable>
          </View>

            <View style={styles.card}>
            <Text
                style={{
                  fontSize: 16/ fontScale,
                  fontWeight: "500",
                }}
                numberOfLines={2}
              >
                Age:
              </Text>
              <Text
                style={{
                  fontSize: 16 / fontScale,
                  fontWeight: "500",
                }}
              >
                Sex:
              </Text>
              <Text
                style={{
                  fontSize: 16 / fontScale,
                  fontWeight: "500",
                }}
              >
                First Detected:
              </Text>
              <Text
                style={{
                  fontSize: 16 / fontScale,
                  fontWeight: "500",
                }}
              >
                Any Operation:
              </Text>
            </View>
            <View style={styles.inputView}>
            <Pressable style={styles.Btn2}>
              <Text style={{color:'white', fontSize:20,}}>Blood Transfer</Text>
            </Pressable>
          </View>
          <View style={styles.card}>
            <Text
                style={{
                  fontSize: 16/ fontScale,
                  fontWeight: "500",
                }}
              >
             First Blood Transfer:
              </Text>
              <Text
                style={{
                  fontSize: 16 / fontScale,
                  fontWeight: "500",
                }}
              >
            Last Blood Transfer:
              </Text>
              <Text
                style={{
                  fontSize: 16 / fontScale,
                  fontWeight: "500",
                }}
              >
                Next Blood Transfer:
              </Text>
            </View>
            <View style={{flexDirection:'row',width: "90%",
           alignSelf: "center",
           backgroundColor: "#fff",
           borderWidth: 2,
           borderColor: "#DB1F26",
          borderRadius: 12,
        marginVertical: 10,
        elevation: 40,
        padding: 10,}}>
     <View style={{ flex: 1}} >
            <TouchableOpacity
      style={styles.button }
    >
      <Text style={styles.text}>Doctor</Text>
    </TouchableOpacity>
                </View> 
      <View style={{ flex: 2 ,flexDirection:'column'}}>
      <View style={styles.inputCard}>
          <Text
                style={{
                  fontSize: 17 / fontScale,
                  fontWeight: "bold",
                  textAlign:'center'
                }}
              >
                Jahidull Islam
              </Text>
          </View>
          <View style={styles.inputCard}>
          <Text
                style={{
                  fontSize: 17 / fontScale,
                  fontWeight: "bold",
                  textAlign:'center'
                }}
              >
                Jahidull Islam
              </Text>
          </View>
        </View>   
            </View>
            <View style={{flexDirection:'row',width: "90%",
           alignSelf: "center",
           backgroundColor: "#fff",
           borderWidth: 2,
           borderColor: "#DB1F26",
          borderRadius: 12,
        marginVertical: 10,
        elevation: 40,
        padding: 10,}}>
     <View style={{ flex: 1}} >
            <TouchableOpacity
      style={styles.button }
    >
      <Text style={styles.text}>Hospital</Text>
    </TouchableOpacity>
                </View> 
      <View style={{ flex: 2 ,flexDirection:'column'}}>
      <View style={styles.inputCard}>
          <Text
                style={{
                  fontSize: 15 / fontScale,
                  fontWeight: "bold",
                  textAlign:'center'
                }}
              >
               Shevron
              </Text>
          </View>
          <View style={styles.inputCard}>
          <Text
                style={{
                  fontSize: 15 / fontScale,
                  fontWeight: "bold",
                  textAlign:'center'
                }}
              >
                Evercare 
              </Text>
          </View>
        </View>   
            </View>
          
          </ScrollView>
        </ImageBackground>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "center",
        paddingTop: StatusBar.currentHeight,
      },
      Btn: {
        marginTop: 20,
        backgroundColor: "#EB3738",
        width: "80%",
        bottom: "2%",
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        left:'50%'
      },
      Btn2: {
        marginTop: 20,
        backgroundColor: "#EB3738",
        width: "80%",
        bottom: "2%",
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        left:'50%'
      },
      inputCard: {
        width: "70%",
        alignSelf: "center",
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#DB1F26",
        borderRadius: 12,
        marginVertical: 10,
        elevation: 10,
        padding: 10,
      },
      card: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#DB1F26",
        borderRadius: 12,
        marginVertical: 10,
        elevation: 40,
        padding: 10,
      },
      btnText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 20 / fontScale,
        fontWeight: "700",
      },  
      button: {
        backgroundColor: '#DB1F26',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginVertical: 10,
        top:40
      },
      text: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold",
      }
    });
    