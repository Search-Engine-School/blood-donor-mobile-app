import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import bgImage from "../../assets/register-bg.png";
import TopCircle from "../common/TopCircle/TopCircle";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
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
          <Pressable style={styles.btn}>
            <Text style={styles.textBtn}>Login</Text>
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
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.orText}>Create New Account?</Text>
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
  loginBox: {
    zIndex: 11,
    marginTop: 100,
  },
  text: {
    color: "#DB1F26",
    textAlign: "center",
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 14,
  },
  inputLabel: {
    color: "rgba(68, 68, 68, 0.99)",
    fontSize: 20,
    fontWeight: "600",
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 17,
  },
  input: {
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
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: "100%",
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
  orText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  btn2: {
    flexDirection: "row",
    alignSelf: "center",
    width: 211,
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
    fontSize: 15,
    marginHorizontal: 10,
  },
});
