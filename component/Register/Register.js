import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import bgImage from "../../assets/register-bg.png";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Create Account</Text>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput
          style={styles.input}
          defaultValue="type your name"
        ></TextInput>
        <Text style={styles.inputLabel}>Phone Number</Text>
        <TextInput
          style={styles.input}
          defaultValue="type your phone number"
        ></TextInput>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput style={styles.input} defaultValue="password"></TextInput>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          defaultValue="confirm password"
        ></TextInput>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Sign up</Text>
        </Pressable>
        <Text style={styles.orText}>Or</Text>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={styles.btn2}
        >
          <View style={styles.gicon}>
            <Image
              style={styles.googleImage}
              source={require("../../assets/google-icon.png")}
            ></Image>
          </View>
          <Text style={styles.textBtn2}>Sign up with Google</Text>
        </Pressable>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 30,
    textAlign: "center",
  },
  btn2: {
    flexDirection: "row",
    alignSelf: "center",
    width: 211,
    height: 45,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "skyblue",
    borderRadius: 5,
    marginTop: 15,
  },
  gicon: {
    backgroundColor: "#fff",
    justifyContent: "center",
    height: 42,
    width: 42,
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
  },
});
