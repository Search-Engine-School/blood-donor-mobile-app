import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import bgImage from "../../assets/bg-image.png";

export default function Home({ navigation }) {
  setTimeout(()=>{
       navigation.replace('Login')
    },5000)
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />

      </ImageBackground>
    </SafeAreaView>
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
  logo: {
    width: "100%",
  },
  btn: {
    width: "50%",
    height: 61,
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
