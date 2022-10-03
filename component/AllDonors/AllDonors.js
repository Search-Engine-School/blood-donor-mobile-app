import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import arrow from "../../assets/arrow-icon.png";
import bgImg from "../../assets/bg-three.png";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const fontScale = Dimensions.get("window").fontScale;

export default function AllDonors() {
  return (
    <ImageBackground source={bgImg} style={styles.container}>
      <View style={styles.topbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            style={styles.arrow}
            source={arrow}
          ></Image>
        </Pressable>
        <Text style={styles.allDonor}>All donors</Text>
      </View>
      <ScrollView>
        <View style={styles.card}>
          <View
            style={{
              height: 40,
              width: 50,
              backgroundColor: "#DB1F26",
              borderRadius: 5,
              position: "absolute",
              right: 10,
              top: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20 / fontScale,
                fontWeight: "700",
              }}
            >
              O+
            </Text>
          </View>
          <Text
            style={{
              width: "80%",
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Kamrul Haider Chowdhury
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Bandar, Chattogram
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            01675654439
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Last Donate: 03/10/2022
          </Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              height: 40,
              width: 50,
              backgroundColor: "#DB1F26",
              borderRadius: 5,
              position: "absolute",
              right: 10,
              top: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20 / fontScale,
                fontWeight: "700",
              }}
            >
              O+
            </Text>
          </View>
          <Text
            style={{
              width: "80%",
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Kamrul Haider Chowdhury
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Bandar, Chattogram
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            01675654439
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Last Donate: 03/10/2022
          </Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              height: 40,
              width: 50,
              backgroundColor: "#DB1F26",
              borderRadius: 5,
              position: "absolute",
              right: 10,
              top: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20 / fontScale,
                fontWeight: "700",
              }}
            >
              O+
            </Text>
          </View>
          <Text
            style={{
              width: "80%",
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Kamrul Haider Chowdhury
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Bandar, Chattogram
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            01675654439
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Last Donate: 03/10/2022
          </Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              height: 40,
              width: 50,
              backgroundColor: "#DB1F26",
              borderRadius: 5,
              position: "absolute",
              right: 10,
              top: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20 / fontScale,
                fontWeight: "700",
              }}
            >
              O+
            </Text>
          </View>
          <Text
            style={{
              width: "80%",
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Kamrul Haider Chowdhury
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Bandar, Chattogram
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            01675654439
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Last Donate: 03/10/2022
          </Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              height: 40,
              width: 50,
              backgroundColor: "#DB1F26",
              borderRadius: 5,
              position: "absolute",
              right: 10,
              top: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20 / fontScale,
                fontWeight: "700",
              }}
            >
              O+
            </Text>
          </View>
          <Text
            style={{
              width: "80%",
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Kamrul Haider Chowdhury
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Bandar, Chattogram
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            01675654439
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Last Donate: 03/10/2022
          </Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              height: 40,
              width: 50,
              backgroundColor: "#DB1F26",
              borderRadius: 5,
              position: "absolute",
              right: 10,
              top: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20 / fontScale,
                fontWeight: "700",
              }}
            >
              O+
            </Text>
          </View>
          <Text
            style={{
              width: "80%",
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Kamrul Haider Chowdhury
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Bandar, Chattogram
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            01675654439
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Last Donate: 03/10/2022
          </Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              height: 40,
              width: 50,
              backgroundColor: "#DB1F26",
              borderRadius: 5,
              position: "absolute",
              right: 10,
              top: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20 / fontScale,
                fontWeight: "700",
              }}
            >
              O+
            </Text>
          </View>
          <Text
            style={{
              width: "80%",
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Kamrul Haider Chowdhury
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Bandar, Chattogram
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            01675654439
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Last Donate: 03/10/2022
          </Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              height: 40,
              width: 50,
              backgroundColor: "#DB1F26",
              borderRadius: 5,
              position: "absolute",
              right: 10,
              top: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20 / fontScale,
                fontWeight: "700",
              }}
            >
              O+
            </Text>
          </View>
          <Text
            style={{
              width: "80%",
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Kamrul Haider Chowdhury
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Bandar, Chattogram
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            01675654439
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Last Donate: 03/10/2022
          </Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              height: 40,
              width: 50,
              backgroundColor: "#DB1F26",
              borderRadius: 5,
              position: "absolute",
              right: 10,
              top: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20 / fontScale,
                fontWeight: "700",
              }}
            >
              O+
            </Text>
          </View>
          <Text
            style={{
              width: "80%",
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Kamrul Haider Chowdhury
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Bandar, Chattogram
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            01675654439
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Last Donate: 03/10/2022
          </Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              height: 40,
              width: 50,
              backgroundColor: "#DB1F26",
              borderRadius: 5,
              position: "absolute",
              right: 10,
              top: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20 / fontScale,
                fontWeight: "700",
              }}
            >
              O+
            </Text>
          </View>
          <Text
            style={{
              width: "80%",
              fontSize: 25 / fontScale,
              fontWeight: "700",
            }}
            numberOfLines={2}
          >
            Kamrul Haider Chowdhury
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Bandar, Chattogram
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            01675654439
          </Text>
          <Text
            style={{
              fontSize: 20 / fontScale,
              fontWeight: "400",
            }}
            numberOfLines={2}
          >
            Last Donate: 03/10/2022
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  topbar: {
    height: height * 0.1,
    backgroundColor: "#DB1F26",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
  },
  arrow: {
    height: height * 0.03,
    width: height * 0.03,
    marginRight: 20,
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
});
