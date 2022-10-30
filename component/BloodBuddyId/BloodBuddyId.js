import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  Button,
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import bgImg from "../../assets/bg-three.png";
import TopBar from "../common/TopBar/TopBar";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const fontScale = Dimensions.get("window").fontScale;
export default function BloodBuddyId() {
  return (
    <ImageBackground source={bgImg} style={styles.container}>
      <TopBar></TopBar>
      <ScrollView
        style={{
          width: "100%",
        }}
      >
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 24 / fontScale,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Dr. Chandra Sekhor
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
            <Text
              style={{
                fontSize: 16 / fontScale,
                fontWeight: "500",
                flex: 1,
              }}
            >
              MBBS
            </Text>
            <Text
              style={{
                fontSize: 16 / fontScale,
                fontWeight: "500",
                flex: 1,
              }}
            >
              MRPC(in....)
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
            <Text
              style={{
                fontSize: 16 / fontScale,
                fontWeight: "500",
                flex: 1,
              }}
            >
              MPhill
            </Text>
            <Text
              style={{
                fontSize: 16 / fontScale,
                fontWeight: "500",
                flex: 1,
              }}
            >
              FCPS(in....)
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
            <Text
              style={{
                fontSize: 16 / fontScale,
                fontWeight: "500",
                flex: 1,
              }}
            >
              BCS
            </Text>
            <Text
              style={{
                fontSize: 16 / fontScale,
                fontWeight: "500",
                flex: 1,
              }}
            >
              MD
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16 / fontScale,
              fontWeight: "500",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Professor in Cumilla Medical College.
          </Text>
          <Text
            style={{
              fontSize: 16 / fontScale,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            (From...... To......)
          </Text>
        </View>
        <View style={styles.inputView}>
          <Pressable style={styles.Btn}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Bloodbuddy ID
            </Text>
          </Pressable>
        </View>
        <View style={styles.ReviewCard}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <AntDesign name="star" size={24} color="#DB1F26" />
            <AntDesign name="star" size={24} color="#DB1F26" />
            <AntDesign name="star" size={24} color="#DB1F26" />
            <AntDesign name="staro" size={24} color="#DB1F26" />
            <AntDesign name="staro" size={24} color="#DB1F26" />
          </View>
        </View>
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 22 / fontScale,
              fontWeight: "700",
              textAlign: "center",
              color: "#DB1F26",
            }}
          >
            Share your Experience
          </Text>
        </View>
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 16 / fontScale,
              fontWeight: "500",
              color: "#DB1F26",
            }}
          >
            Shams was feeling
          </Text>
          <Text
            style={{
              fontSize: 16 / fontScale,
              fontWeight: "500",
            }}
            numberOfLines={4}
          >
            ......................................................................................................................................................................................................................................................................................................
          </Text>
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
    left: "50%",
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
  ReviewCard: {
    width: "60%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 12,
    marginVertical: 10,
    elevation: 20,
    padding: 10,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20 / fontScale,
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#DB1F26",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
    top: 40,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  memberBtn: {
    left: "2%",
    backgroundColor: "#EB3738",
    width: "90%",
    bottom: "3%",
    elevation: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
  },
});
