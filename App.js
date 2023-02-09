import * as React from "react";
import { useState } from "react";
import { AppLoading } from "expo";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  function calculator() {
    const splitNumbers = currentNumber.split(" ");
    const operator = splitNumbers[1];
    console.log(splitNumbers);
    if (operator === "*") {
      setCurrentNumber(
        (parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString()
      );
      return;
    }
    if (operator === "/") {
      setCurrentNumber(
        (parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString()
      );
      return;
    }
    if (operator === "+") {
      setCurrentNumber(
        (parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString()
      );
      return;
    }
    if (operator === "-") {
      setCurrentNumber(
        (parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString()
      );
      return;
    }
  }

  function handleInput(keyboardPressed) {
    if (keyboardPressed === "=") {
      setLastNumber(currentNumber + " = ");
      calculator();
      return;
    }
    if (
      (keyboardPressed === "*") |
      (keyboardPressed === "/") |
      (keyboardPressed === "+") |
      (keyboardPressed === "-") 
    ) {
      setCurrentNumber(currentNumber + " " + keyboardPressed + " ");
      return;
    }
    if (keyboardPressed === "DEL") {
      console.log(currentNumber);
      setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
      return;
    }
    if (keyboardPressed === ".") {
      setCurrentNumber(currentNumber + keyboardPressed);
      return;
    }
    if (keyboardPressed === "M") {
      setLastNumber(lastNumber);
      console.log(lastNumber);
      return
    }
    if (keyboardPressed === "AC") {
      setLastNumber("");
      setCurrentNumber("");
      return;
    }

    setCurrentNumber(currentNumber + keyboardPressed);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#D3D3D3", borderRadius: 10 }]}
          onPress={() => handleInput("AC")}
        >
          <Text style={[styles.textButton, { backgroundColor: "#D3D3D3" }]}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#D3D3D3", borderRadius: 10 }]}
          onPress={() => handleInput("DEL")}
        >
          <Text style={styles.textButton}>Del</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#D3D3D3", borderRadius: 10 }]}
          onPress={() => handleInput("%")}
        >
          <Text style={styles.textButton}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#ffbf60", borderRadius: 10 },
          ]}
          onPress={() => handleInput("/")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#3b444b", borderRadius: 10, color: "#E3EDED" },
          ]}
          onPress={() => handleInput("7")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#3b444b", borderRadius: 10, color: "#E3EDED" },
          ]}
          onPress={() => handleInput("8")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#3b444b", borderRadius: 10, color: "#E3EDED" },
          ]}
          onPress={() => handleInput("9")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#ffbf60", borderRadius: 10 },
          ]}
          onPress={() => handleInput("*")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#3b444b", borderRadius: 10, color: "#E3EDED" },
          ]}
          onPress={() => handleInput("4")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#3b444b", borderRadius: 10, color: "#E3EDED" },
          ]}
          onPress={() => handleInput("5")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#3b444b", borderRadius: 10, color: "#E3EDED" },
          ]}
          onPress={() => handleInput("6")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#ffbf60", borderRadius: 10 },
          ]}
          onPress={() => handleInput("-")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#3b444b", borderRadius: 10, color: "#E3EDED" },
          ]}
          onPress={() => handleInput("1")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#3b444b", borderRadius: 10, color: "#E3EDED" },
          ]}
          onPress={() => handleInput("2")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#3b444b", borderRadius: 10, color: "#E3EDED" },
          ]}
          onPress={() => handleInput("3")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#ffbf60", borderRadius: 10 },
          ]}
          onPress={() => handleInput("+")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#3b444b", borderRadius: 10, color: "#E3EDED" },
          ]}
          onPress={() => handleInput("0")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#3b444b", borderRadius: 10, color: "#E3EDED" },
          ]}
          onPress={() => handleInput(".")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#3b444b", borderRadius: 10, color: "#E3EDED" },
          ]}
          onPress={() => handleInput("M")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "#ffbf60", borderRadius: 10},
          ]}
          onPress={() => handleInput("=")}
        >
          <Text style={[styles.textButton, {color: "#FFFFFF"}]}>=</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  results: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: 180,
    backgroundColor: "#000000",
  },
  resultText: {
    fontWeight: "100",
    color: "#FFFFFF",
    fontSize: 80,
    margin: 10,
    alignSelf: "flex-end",
  },
  historyText: {
    color: "#5b5b5b",
    fontSize: 20,
    marginBottom: 0,
    marginRight: 10,
    alignSelf: "flex-end",
  },

  buttons: {
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#000000",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#F5FCFF",
    minWidth: 80,
    minHeight: 80,
    margin: 5,
  },
  textButton: {
    color: "#5b5b5b",
    fontSize: 25,
  },
});
