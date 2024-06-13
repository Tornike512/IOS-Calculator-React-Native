import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

const Home = () => {
  const calculatorButtons = [
    { symbol: "AC", id: "ac" },
    { symbol: "±", id: "plusMinus" },
    { symbol: "%", id: "percent" },
    { symbol: "/", id: "divide" },
    { symbol: "7", id: "seven" },
    { symbol: "8", id: "eight" },
    { symbol: "9", id: "nine" },
    { symbol: "X", id: "multiply" },
    { symbol: "4", id: "four" },
    { symbol: "5", id: "five" },
    { symbol: "6", id: "six" },
    { symbol: "-", id: "minus" },
    { symbol: "1", id: "one" },
    { symbol: "2", id: "two" },
    { symbol: "3", id: "three" },
    { symbol: "+", id: "plus" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calculatorButtonsGrid}>
        {calculatorButtons.map((buttons) => {
          return (
            <Text key={buttons.id} style={styles.calculatorButtons}>
              {buttons.symbol}
            </Text>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  calculatorButtonsGrid: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "100%",
    backgroundColor: "blue",
  },

  calculatorButtons: {
    width: 20,
    height: 20,
    color: "#ffffff",
  },
});

export default Home;
