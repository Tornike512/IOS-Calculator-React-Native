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
    <>
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
      <SafeAreaView style={styles.container2}>
        <View style={styles.darkGreyBox}>
          <Text style={styles.whiteText}>7</Text>
        </View>
        <View style={styles.darkGreyBox}>
          <Text style={styles.whiteText}>8</Text>
        </View>
        <View style={styles.darkGreyBox}>
          <Text style={styles.whiteText}>9</Text>
        </View>
        <View style={styles.orangeBox}>
          <Text style={styles.whiteText}>X</Text>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.container2}>
        <View style={styles.darkGreyBox}>
          <Text style={styles.whiteText}>4</Text>
        </View>
        <View style={styles.darkGreyBox}>
          <Text style={styles.whiteText}>5</Text>
        </View>
        <View style={styles.darkGreyBox}>
          <Text style={styles.whiteText}>6</Text>
        </View>
        <View style={styles.orangeBox}>
          <Text style={styles.whiteText}>—</Text>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.container2}>
        <View style={styles.darkGreyBox}>
          <Text style={styles.whiteText}>1</Text>
        </View>
        <View style={styles.darkGreyBox}>
          <Text style={styles.whiteText}>2</Text>
        </View>
        <View style={styles.darkGreyBox}>
          <Text style={styles.whiteText}>3</Text>
        </View>
        <View style={styles.orangeBox}>
          <Text style={styles.whiteText}>+</Text>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.container2}>
        <View style={styles.zeroBox}>
          <Text style={styles.whiteText}>0</Text>
        </View>
        <View style={styles.darkGreyBox}>
          <Text style={styles.whiteText}>.</Text>
        </View>
        <View style={styles.darkGreyBox}>
          <Text style={styles.whiteText}>=</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    alignItems: "flex-end",
  },

  container2: {
    flex: 0,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    alignItems: "flex-end",
  },

  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: "#ff9f0a",
    borderRadius: 100,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  greyBox: {
    width: 100,
    height: 100,
    backgroundColor: "#a5a5a5",
    borderRadius: 100,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  darkGreyBox: {
    backgroundColor: "#333333",
    width: 100,
    height: 100,
    borderRadius: 100,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  zeroBox: {
    backgroundColor: "#333333",
    width: 200,
    height: 100,
    borderRadius: 100,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 10,
    alignItems: "flex-start",
    paddingLeft: 38,
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
