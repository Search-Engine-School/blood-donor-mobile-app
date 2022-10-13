import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import bgImg from "../../assets/bg-three.png";
import TopBar from "../common/TopBar/TopBar";

const Width = Dimensions.get("window").width;

const data = [
  {
    key: 1,
    name: "Thalassemia",
  },
  {
    key: 2,
    name: "Blood Calculator",
  },
  {
    key: 3,
    name: "Nesw Feed",
  },
  {
    key: 4,
    name: "vaccination",
  },
  {
    key: 5,
    name: "Profile",
  },
  {
    key: 6,
    name: "BMI Meter",
  },
  {
    key: 7,
    name: "Doctor",
  },
  {
    key: 8,
    name: "Hospital",
  },
  {
    key: 9,
    name: "Blood Myth",
  },
];
const numOfColumn = 3;
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

export default function SearchBlood() {
  //profile info
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.key === selectedId ? "#DB1F26" : "#fff";
    const color = item.key === selectedId ? "#fff" : "#DB1F26";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.key)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false}></StatusBar>
      <ImageBackground source={bgImg} style={styles.image}>
        <TopBar></TopBar>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View style={styles.inputView}>
            <TextInput
              multiline={true}
              numberOfLines={5}
              textAlignVertical="top"
              style={{
                backgroundColor: "#fff",
                width: responsiveScreenWidth(95),
                height: responsiveScreenHeight(15),
                padding: responsiveScreenHeight(2),
                fontSize: responsiveScreenFontSize(3),
                borderRadius: 10,
              }}
            ></TextInput>
            <Pressable style={styles.btn}>
              <Text style={styles.textBtn}>Search Blood</Text>
            </Pressable>
          </View>

          <View style={styles.list}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
              extraData={selectedId}
              numColumns={numOfColumn}
            ></FlatList>
          </View>
          <View style={styles.memberBtn}>
            <Pressable
              style={{
                width: "50%",
                borderRightWidth: 2,
                borderColor: "#fff",
              }}
            >
              <Text style={styles.btnText}>Community Member</Text>
            </Pressable>
            <Pressable
              style={{
                width: "50%",
              }}
            >
              <Text style={styles.btnText}>Active Donor</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
  },
  inputView: {
    flex: 1,
    width: responsiveScreenWidth(95),
    borderRadius: 10,
    alignItems: "center",
    marginVertical: responsiveScreenHeight(2),
  },
  btn: {
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(6),
    backgroundColor: "#EB3738",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
    elevation: 20,
  },
  textBtn: {
    color: "#fff",
    fontSize: responsiveScreenFontSize(4),
  },
  list: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveScreenHeight(2),
  },
  item: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenWidth(30),
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
    borderWidth: 2,
    borderColor: "#EB3738",
    margin: responsiveScreenWidth(0.5),
    borderRadius: 5,
  },
  title: {
    fontSize: responsiveScreenFontSize(2.2),
    textAlign: "center",
    fontWeight: "700",
  },
  memberBtn: {
    backgroundColor: "#EB3738",
    width: responsiveScreenWidth(95),
    bottom: responsiveScreenHeight(2),
    elevation: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(3),
    fontWeight: "700",
  },
});
