import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [firstInput, setFirstinput] = useState();
  const [secondInput, setSecondInput] = useState();
  const [buttonValue, setbuttonValue] = useState();

  const plus = () => {
    setbuttonValue(firstInput * secondInput);
  };

  const division = () => {
    setbuttonValue(firstInput / secondInput);
  };

  const subtraction = () => {
    setbuttonValue(firstInput - secondInput);
  };

  const addition = () => {
    let temp = parseInt(firstInput) + parseInt(secondInput);
    setbuttonValue(temp);
  };

  const reminder = () => {
    setbuttonValue(firstInput % secondInput);
  };

  const rest = () => {
    setbuttonValue();
    setFirstinput();
    setSecondInput();
  };

  return (
    <View style={styles.MainView}>
      <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          paddingLeft: 90,
          color: 'black',
          paddingBottom:20,
        }}>Calculator App</Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'red',
          paddingLeft: 10,
        }}>
        Hello Rahul...
      </Text>
      <View style={styles.textInputStyle}>
        <TextInput
          placeholder="Enter Value"
          secureTextEntry={false}
          value={firstInput}
          onChangeText={digit => setFirstinput(digit)}
        />
      </View>
      <View style={styles.textInputStyle}>
        <TextInput
          placeholder="Enter Value"
          secureTextEntry={false}
          value={secondInput}
          onChangeText={digit => setSecondInput(digit)}
        />
      </View>
      <View style={styles.TouchStyle}>
        <TouchableOpacity onPress={() => plus()}>
          <Text style={{color: 'white', fontSize: 16}}>Multiplication</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TouchStyle}>
        <TouchableOpacity onPress={() => division()}>
          <Text style={{color: 'white', fontSize: 16}}>Division</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TouchStyle}>
        <TouchableOpacity onPress={() => subtraction()}>
          <Text style={{color: 'white', fontSize: 16}}>Subtraction</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TouchStyle}>
        <TouchableOpacity onPress={() => reminder()}>
          <Text style={{color: 'white', fontSize: 16}}>Reminder</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TouchStyle}>
        <TouchableOpacity onPress={() => addition()}>
          <Text style={{color: 'white', fontSize: 16}}>Addition</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TouchStyle}>
        <TouchableOpacity onPress={() => rest()}>
          <Text style={{color: 'white', fontSize: 16}}>Rest</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textBox}>{buttonValue}</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  MainView: {
    paddingTop:10,
    flex: 1,
    backgroundColor:'pink'
  },
  textInputStyle: {
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  TouchStyle: {
    width: '80%',
    backgroundColor: 'blue',
    height: 40,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    paddingTop: 8,
    marginHorizontal: 35,
  },
  textBox: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    paddingLeft: 10,
    borderWidth: 1,
    width: 200,
    borderRadius: 10,
    marginLeft: 170,
    height: 40,
    paddingTop: 5,
    alignItems: 'center',
  },
});
// setSecondInput(secondInput + 2);
// console.log(secondInput);
// if (secondInput === 2) {
//   let result = firstInput / secondInput;
//   let decimal = Math.trunc(result);
//   let value = result - decimal;
//   let reminderValue = value * 2;
//   setbuttonValue(reminderValue);
// } else {
//   Alert.alert('Second Value Must Be Enter With  2');
// }
