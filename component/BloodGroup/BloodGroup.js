import Slider from "@react-native-community/slider";
import { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import bgImage from "../../assets/bg-image.png";
import bloodDrop from "../../assets/blood-drop.png";
import locationIconGray from "../../assets/location-icon-gray.png";
import locationIcon from "../../assets/location-icon.png";
import tick from "../../assets/tick.png";
import weight from "../../assets/weight.png";
import TopCircle from "../common/TopCircle/TopCircle";

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

export default function BloodGroup({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const [range, setRange] = useState("50");

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
      <StatusBar translucent={false}></StatusBar>
      <TopCircle></TopCircle>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.heading}>
          <Image source={bloodDrop}></Image>
          <Text style={styles.text1}>Blood Group</Text>
          <View style={styles.bloodGrpList}>
            <FlatList
              data={bloodGroup}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
              key={2}
              numColumns={4}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              alignSelf: "flex-start",
              marginBottom: 10,
            }}
          >
            <Image source={locationIcon}></Image>
            <Text style={styles.text2}>Location</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: responsiveScreenWidth(90),
              height: responsiveScreenHeight(5),
              backgroundColor: "white",
              color: "#6A6A6A",
              paddingLeft: 5,
              paddingRight: 5,
              borderRadius: 5,
              marginBottom: 15,
              shadowColor: "#9A9A9A",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.1,
              shadowRadius: 7.49,

              elevation: 8,
            }}
          >
            <Image source={locationIconGray}></Image>
            <TextInput
              style={{ width: responsiveScreenWidth(50) }}
              defaultValue="Dhaka"
            ></TextInput>
            <Image style={{ marginRight: 10 }} source={tick}></Image>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
              marginBottom: 10,
            }}
          >
            <Image source={weight}></Image>
            <Text style={styles.text2}>Weight</Text>
            <Text style={styles.text3}>{range}KGS</Text>
          </View>
          <View style={{ width: responsiveScreenWidth(100) }}>
            <Slider
              style={{
                width: responsiveScreenWidth(100),
                height: 40,
              }}
              minimumValue={0}
              maximumValue={200}
              minimumTrackTintColor="#DB1F26"
              maximumTrackTintColor="#444444"
              thumbTintColor="#DB1F26"
              value={50}
              onValueChange={(value) => setRange(parseInt(value))}
            ></Slider>
          </View>
          <Pressable
            onPress={() => navigation.navigate("JoinOurCommunity")}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>Done</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    alignItems: "center",
    width: responsiveScreenWidth(90),
    zIndex: 100,
  },
  text1: {
    fontSize: responsiveFontSize(5),
    color: "#DB1F26",
    fontWeight: "700",
    textAlign: "center",
  },
  item: {
    height: responsiveScreenHeight(7),
    width: responsiveScreenHeight(7),
    borderRadius: 5,
    elevation: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: responsiveFontSize(3),
    fontWeight: "500",
  },
  bloodGrpList: {
    height: responsiveScreenHeight(20),
  },
  text2: {
    fontSize: responsiveFontSize(3),
    fontWeight: "700",
    color: "#fff",
    marginLeft: 5,
    marginRight: responsiveScreenWidth(45),
  },
  text3: {
    fontSize: responsiveFontSize(3),
    fontWeight: "700",
    color: "#fff",
    marginLeft: 5,
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
    fontSize: responsiveFontSize(4),
  },
});
