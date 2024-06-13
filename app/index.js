import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
  TouchableHighlight,
} from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greyBox}>
        <Text style={styles.darkText}>AC</Text>
      </View>
      <View style={styles.greyBox}>
        <Text style={styles.darkText}>+/-</Text>
      </View>
      <View style={styles.greyBox}>
        <Text style={styles.darkText}>%</Text>
      </View>
      <View style={styles.orangeBox}>
        <Text style={styles.whiteText}>/</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
  },

  orangeBox: {
    width: 100,
    height: 100,
    flex: 1,
    backgroundColor: "#ff9f0a",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  greyBox: {
    width: 100,
    height: 100,
    flex: 1,
    backgroundColor: "#a5a5a5",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  darkGreyBox: {
    backgroundColor: "#333333",
    width: 100,
    height: 100,
    flex: 1,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  whiteText: {
    color: "#ffffff",
    fontSize: 50,
  },

  darkText: {
    color: "#000000",
    fontSize: 50,
  },
});

export default Home;
