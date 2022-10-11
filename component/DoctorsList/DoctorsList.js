import React from "react";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import bgImg from "../../assets/bg-three.png";
import TopBar from "../common/TopBar/TopBar";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const fontScale = Dimensions.get("window").fontScale;

export default function DoctorsList() {
  return (
    <ImageBackground source={bgImg} style={styles.container}>
      <TopBar></TopBar>
      <View style={styles.inputView}>
        <TextInput placeholder="Search Doctor" style={styles.input} />
      </View>
      <ScrollView
        style={{
          width: "100%",
        }}
      >
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Dr. Amitav Aronnya
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Specialized IN:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Location:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            District:
          </Text>
        </View>
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Dr. Amitav Aronnya
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Specialized IN:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Location:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            District:
          </Text>
        </View>
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Dr. Amitav Aronnya
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Specialized IN:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Location:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            District:
          </Text>
        </View>
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Dr. Amitav Aronnya
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Specialized IN:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Location:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            District:
          </Text>
        </View>
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Dr. Amitav Aronnya
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Specialized IN:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Location:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            District:
          </Text>
        </View>
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Dr. Amitav Aronnya
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Specialized IN:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Location:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            District:
          </Text>
        </View>
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Dr. Amitav Aronnya
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Specialized IN:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Location:
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            District:
          </Text>
        </View>
      </ScrollView>
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  inputView: {
    marginTop: "2%",
    width: "90%",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#DB1F26",
    fontSize: 20 / fontScale,
  },
  allDonor: {
    fontSize: 35 / fontScale,
    color: "#fff",
    fontWeight: "700",
  },
  card: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#DB1F26",
    borderRadius: 12,
    marginVertical: 10,
    elevation: 10,
    padding: 10,
  },
  memberBtn: {
    marginTop: 20,
    backgroundColor: "#EB3738",
    width: "90%",
    bottom: "2%",
    elevation: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20 / fontScale,
    fontWeight: "700",
  },
});
