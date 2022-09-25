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
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import bgImage from "../../assets/register-bg.png";
import TopCircle from "../common/TopCircle/TopCircle";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false}></StatusBar>
      <TopCircle></TopCircle>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.loginBox}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            style={styles.input}
            defaultValue="type your phone number"
          ></TextInput>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input} defaultValue="password"></TextInput>
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
          <Text style={styles.textBtn2} adjustsFontSizeToFit>
            Sign in with Google
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text adjustsFontSizeToFit style={styles.orText}>
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
  },
  loginBox: {
    zIndex: 11,
    width: responsiveScreenWidth(90),
  },
  text: {
    color: "#DB1F26",
    textAlign: "center",
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "700",
    marginBottom: 14,
  },
  inputLabel: {
    color: "rgba(68, 68, 68, 0.99)",
    fontSize: responsiveScreenFontSize(3),
    fontWeight: "600",
    marginBottom: 15,
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
  },
  logo: {
    width: "100%",
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
  orText: {
    color: "#fff",
    fontSize: responsiveScreenFontSize(3),
    textAlign: "center",
  },
  btn2: {
    flexDirection: "row",
    width: responsiveScreenWidth(50),
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
    fontSize: responsiveScreenFontSize(2),
    marginHorizontal: "2%",
  },
});
