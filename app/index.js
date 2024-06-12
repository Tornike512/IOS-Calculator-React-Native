import { StyleSheet, View, Text, image, SafeAreaView } from "react-native";

const Home = () => {
  const calculatorButtons = [
    { ac: "AC", id: "ac" },
    { plusMinus: "±", id: "plusMinus" },
    { percent: "%", id: "percent" },
    { divide: "/", id: "divide" },
    { seven: "7", id: "seven" },
    { eight: "8", id: "eight" },
    { nine: "9", id: "nince" },
    { multiply: "X", id: "multiply" },
    { four: "4", id: "four" },
    { five: "5", id: "five" },
    { six: "6", id: "six" },
    { minus: "-", id: "minus" },
    { one: "1", id: "one" },
    { two: "2", id: "two" },
    { three: "3", id: "three" },
    { plus: "+", id: "plus" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calculatorButtons}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  calculatorButtons: {
    width: "100%",
    height: "50%",
    marginTop: "100%",
    backgroundColor: "blue",
  },
});

export default Home;
