import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import bgImage from "../../assets/register-bg.png";
import TopCircle from "./../common/TopCircle/TopCircle";

export default function Register({ navigation }) {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [confirmationTxt, setConfirmationTxt] = useState("");

  useEffect(() => {
    if (password === confirmPass) {
      setConfirmationTxt("Password matched");
    } else {
      setConfirmationTxt("pass doesn't match");
    }
  });
  const handleSubmit = async () => {
    // console.log({ name, mobile, password, cPassword });
    const response = await axios.post(
      "https://busy-rose-bull-belt.cyclic.app/create",
      {
        name,
        mobile,
        password,
        cPassword,
      }
    );
    console.log(response.data);
  };

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        <TopCircle></TopCircle>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.registerBox}>
            <Text style={styles.text}>Create Account</Text>
            <Text style={styles.inputLabel}>Full Name</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter Your Full name"
              value={fullname}
              onChangeText={(text) => setFullname(text)}
              autoCapitalize={"none"}
            />

            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Phone Number"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              autoCapitalize={"none"}
            />

            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />

            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={(text) => setConfirmPass(text)}
            />
            <Text>{confirmationTxt}</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("verify")}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>Sign up</Text>
          </Pressable>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    height: responsiveScreenHeight(100),
  },
  registerBox: {
    zIndex: 100,
    width: responsiveScreenWidth(90),
  },
  text: {
    color: "#DB1F26",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(4),
    fontWeight: "700",
    marginBottom: 14,
  },
  inputLabel: {
    color: "rgba(68, 68, 68, 0.99)",
    fontSize: responsiveScreenFontSize(2.5),
    fontWeight: "600",
    marginBottom: 17,
  },
  input: {
    height: responsiveScreenHeight(5),
    backgroundColor: "white",
    color: "#6A6A6A",
    fontSize: responsiveScreenFontSize(2),
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
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveScreenHeight(5),
  },
  logo: {
    width: responsiveScreenWidth(100),
  },
  btn: {
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(6),
    backgroundColor: "#EB3738",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "25%",
  },
  textBtn: {
    color: "#fff",
    fontSize: responsiveScreenFontSize(4),
  },
  orText: {
    color: "#fff",
    fontSize: responsiveScreenFontSize(3),
    textAlign: "center",
  },
  btn2: {
    flexDirection: "row",
    height: 45,
    alignItems: "center",
    backgroundColor: "#279DF3",
    borderRadius: 5,
    marginTop: 15,
    marginBottom: responsiveScreenHeight(3),
  },
});
