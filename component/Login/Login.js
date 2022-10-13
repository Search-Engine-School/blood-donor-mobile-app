import {
  Dimensions,
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
import { responsiveScreenFontSize } from "react-native-responsive-dimensions";
import bgImage from "../../assets/register-bg.png";
import TopCircle from "../common/TopCircle/TopCircle";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const fontScale = Dimensions.get("window").fontScale;

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TopCircle></TopCircle>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.loginBox}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="type your phone number"
          ></TextInput>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input} placeholder="password"></TextInput>
        </View>
        <Pressable style={styles.btn}>
          <Text adjustsFontSizeToFit style={styles.textBtn}>
            Login
          </Text>
        </Pressable>
        <Text style={styles.orText}>Or</Text>
        <Pressable style={styles.btn2}>
          <View style={styles.gicon}>
            <Image
              style={styles.googleImage}
              source={require("../../assets/google-icon.png")}
            ></Image>
          </View>
          <Text style={styles.textBtn2}>Sign in with Google</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("DropdownBoard")}>
          <Text numberOfLines={2} style={styles.orText}>
            Create New Account?
          </Text>
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  loginBox: {
    zIndex: 11,
    width: "90%",
  },
  inputLabel: {
    color: "rgba(68, 68, 68, 0.99)",
    fontSize: 25 / fontScale,
    fontWeight: "700",
    marginBottom: 15,
  },
  input: {
    height: height * 0.05,
    backgroundColor: "white",
    color: "#6A6A6A",
    fontSize: responsiveScreenFontSize(2),
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#9A9A9A",
    elevation: 15,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
  },
  btn: {
    width: width * 0.8,
    paddingVertical: 8,
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
    fontSize: 30 / fontScale,
  },
  orText: {
    color: "#fff",
    fontSize: 30 / fontScale,
    textAlign: "center",
  },
  btn2: {
    flexDirection: "row",
    height: 45,
    alignItems: "center",
    backgroundColor: "#279DF3",
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 20,
  },
  gicon: {
    backgroundColor: "#fff",
    justifyContent: "center",
    height: 42,
    width: 42,
    marginHorizontal: 2,
    alignItems: "center",
    borderRadius: 5,
  },
  googleImage: {
    height: 25,
    width: 25,
  },
  textBtn2: {
    color: "#fff",
    fontSize: 18 / fontScale,
    marginHorizontal: "2%",
  },
});
