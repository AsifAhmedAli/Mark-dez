import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { showMessage, hideMessage } from "react-native-flash-message";
const Add_income_Head_Form = (props) => {
  const [description, setdescription] = useState([]);

  const [incomeHead, setincomeHead] = useState([]);
  const [isloading, setloading] = useState(false);

  const API_CALL_TO_ADD_INCOME_head = () => {
    // console.log(props.Expense);
    if (incomeHead == "") {
      // alert("Some values are missed or Entered incorrectly");
      showMessage({
        message: "Some values are missed or Entered incorrectly",
        type: "danger",
      });
    } else {
      // console.log(typeof validated_amount + validated_amount);
      // console.log(typeof invoiceNo + invoiceNo);
      // console.log(typeof note + note);
      // console.log(typeof namevalue + namevalue);
      // console.log(typeof validated_id + validated_id);
      setloading(true);
      var data = JSON.stringify({
        income_category: incomeHead,
        description: description,
      });
      console.log(data);
      var config = {
        method: "post",
        url: "https://mexil.it/chroma_api/add_income_head.php",
        headers: {
          Authorization:
            "Bearer 49d765a2e4d7bc6d3fe07b17c6c2c69f58baccaff2c49ca5017383403d611c5b",
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          showMessage({
            message: "Success - New Income Head Added",
            type: "success",
          });
          props.data(false);
        })
        .catch(function (error) {
          showMessage({
            message: "ERROR - Duplicate Data",
            type: "danger",
          });
          console.log(error);
        });
      setloading(false);
    }

    // const obj = JSON.parse();
  };
  // console.log(incomeHead);
  return (
    <View>
      <Text className="uppercase text-center	pr-2"> Add Income Head</Text>
      <View>
        <TextInput
          style={styles.input}
          value={incomeHead}
          onChangeText={setincomeHead}
          placeholder="Enter Expense Head"
        />
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setdescription}
          placeholder="Enter Description"
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={API_CALL_TO_ADD_INCOME_head}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        {isloading ? <ActivityIndicator /> : ""}
        {/* <TouchableOpacity
               style = {styles.submitButton}
               onPress = {navigation.navigate('Expense', { name: 'Expense' })}>
               <Text style = {styles.submitButtonText}> asdfasdf </Text>
            </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
  },
  submitButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default Add_income_Head_Form;
