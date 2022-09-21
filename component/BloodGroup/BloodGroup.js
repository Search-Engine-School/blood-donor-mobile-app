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

export default function BloodGroup() {
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
              justifyContent: "space-between",
              width: "100%",
              height: 61,
              backgroundColor: "white",
              color: "#6A6A6A",
              fontSize: 16,
              marginRight: 25,
              marginLeft: 25,
              paddingLeft: 10,
              paddingRight: 10,
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
            <Image
              style={{ marginRight: 10 }}
              source={locationIconGray}
            ></Image>
            <TextInput
              style={{ width: "80%" }}
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
          <View style={{ width: 390 }}>
            <Slider
              style={{
                width: "100%",
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
          <Pressable style={styles.btn}>
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
    width: 390,
    zIndex: 100,
  },
  text1: {
    fontSize: 40,
    color: "#DB1F26",
    fontWeight: "700",
    textAlign: "center",
  },
  item: {
    height: 70,
    width: 70,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
  },
  bloodGrpList: {
    height: 200,
  },
  text2: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
    marginLeft: 5,
    marginRight: 200,
  },
  text3: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
    marginLeft: 5,
  },
  btn: {
    width: 377,
    height: 61,
    marginRight: 25,
    marginLeft: 25,
    backgroundColor: "#EB3738",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  textBtn: {
    color: "#fff",
    fontSize: 30,
  },
});
