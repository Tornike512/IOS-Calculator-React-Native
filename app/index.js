import { useState } from "react";
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
  TouchableOpacity,
} from "react-native";

const Home = () => {
  const [answer, setAnswer] = useState(0);
  const [currentNumber, setCurrentNumber] = useState([]);
  const [newNumber, setNewNumber] = useState([]);

  return (
    <>
      <Text style={styles.number}>{currentNumber}</Text>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => setCurrentNumber("")}
          style={styles.greyBox}
        >
          <Text style={styles.darkText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.greyBox}>
          <Text style={styles.darkText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.greyBox}>
          <Text style={styles.darkText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orangeBox}>
          <Text style={styles.whiteText}>/</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.container2}>
        <TouchableOpacity
          onPress={() => {
            setCurrentNumber((oldNumber) => [...oldNumber, 7]);
          }}
          style={styles.darkGreyBox}
        >
          <Text style={styles.whiteText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentNumber((oldNumber) => [...oldNumber, 8]);
          }}
          style={styles.darkGreyBox}
        >
          <Text style={styles.whiteText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentNumber((oldNumber) => [...oldNumber, 9]);
          }}
          style={styles.darkGreyBox}
        >
          <Text style={styles.whiteText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orangeBox}>
          <Text style={styles.whiteText}>X</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.container2}>
        <TouchableOpacity
          onPress={() => {
            setCurrentNumber((oldNumber) => [...oldNumber, 4]);
          }}
          style={styles.darkGreyBox}
        >
          <Text style={styles.whiteText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentNumber((oldNumber) => [...oldNumber, 5]);
          }}
          style={styles.darkGreyBox}
        >
          <Text style={styles.whiteText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentNumber((oldNumber) => [...oldNumber, 6]);
          }}
          style={styles.darkGreyBox}
        >
          <Text style={styles.whiteText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orangeBox}>
          <Text style={styles.whiteText}>—</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.container2}>
        <TouchableOpacity
          onPress={() => {
            setCurrentNumber((oldNumber) => [...oldNumber, 1]);
          }}
          style={styles.darkGreyBox}
        >
          <Text style={styles.whiteText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentNumber((oldNumber) => [...oldNumber, 2]);
          }}
          style={styles.darkGreyBox}
        >
          <Text style={styles.whiteText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentNumber((oldNumber) => [...oldNumber, 3]);
          }}
          style={styles.darkGreyBox}
        >
          <Text style={styles.whiteText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orangeBox}>
          <Text style={styles.whiteText}>+</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.container2}>
        <TouchableOpacity
          onPress={() => {
            setCurrentNumber((oldNumber) => [...oldNumber, 0]);
          }}
          style={styles.zeroBox}
        >
          <Text style={styles.whiteText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.darkGreyBox}>
          <Text style={styles.whiteText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.darkGreyBox}>
          <Text style={styles.whiteText}>=</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  number: {
    width: "100%",
    flexDirection: "row",
    color: "#ffffff",
    flex: 0,
    fontSize: 100,
    paddingTop: 140,
    paddingLeft: 10,
    backgroundColor: "#000000",
  },

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
