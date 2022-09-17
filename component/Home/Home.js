import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import bgImage from "../../assets/bg-image.png";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </ImageBackground>
      <StatusBar style="auto" />
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
  },
  logo: {
    width: "100%",
  },
});
