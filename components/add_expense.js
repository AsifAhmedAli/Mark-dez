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
import FlashMessage, {
  showMessage,
  hideMessage,
} from "react-native-flash-message";
const Add_expense_Form = () => {
  const [amountvalue, setamountValue] = useState([]);
  const [namevalue, setNameValue] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [invoiceNo, setInvoiceNo] = useState([]);
  const [note, setnote] = useState([]);
  //   const [selectedValue, setSelectedValue] = useState([]);

  const [expenseHead, setExpenseHead] = useState([]);
  const [isloading, setloading] = useState([true]);
  const All_expense_Heads = async () => {
    setloading(true);
    var urla = "https://mexil.it/chroma_api/all_expense_heads.php";
    var config = {
      method: "get",
      url: urla,
      headers: {
        Authorization:
          "Bearer 49d765a2e4d7bc6d3fe07b17c6c2c69f58baccaff2c49ca5017383403d611c5b",
      },
    };

    await axios(config)
      .then(function (response) {
        //   console.log(JSON.stringify(response.data));

        setloading(false);
        setExpenseHead(response.data);
        //   console.log(expenseHead[1]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    All_expense_Heads();
  }, []);
  const API_CALL_TO_ADD_EXPENSE = () => {
    // console.log(props.Expense);
    if (
      amountvalue == "" ||
      invoiceNo == "" ||
      note == "" ||
      namevalue == "" ||
      selectedValue == ""
    ) {
      // alert("Some values are missed or Entered incorrectly");
      // console.log("Asdf");
      showMessage({
        message: "Some values are missed or Entered incorrectly",
        type: "danger",
      });
    } else {
      var validated_id = parseInt(selectedValue);
      var validated_amount = parseInt(amountvalue);
      // console.log(typeof validated_amount + validated_amount);
      // console.log(typeof invoiceNo + invoiceNo);
      // console.log(typeof note + note);
      // console.log(typeof namevalue + namevalue);
      // console.log(typeof validated_id + validated_id);
      var data = JSON.stringify({
        exp_head_id: validated_id,
        name: namevalue,
        invoice_no: invoiceNo,
        amount: validated_amount,
        note: note,
        date: "2022-03-03",
      });
      // console.log(data);
      var config = {
        method: "post",
        url: "https://mexil.it/chroma_api/add_expense.php",
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
            message: "Success - New Expense Added",
            type: "success",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // const obj = JSON.parse();
  };
  // console.log(expenseHead);
  return (
    <View>
      <Text> Add Expense </Text>
      <View>
        <TextInput
          style={styles.input}
          value={amountvalue}
          keyboardType="numeric"
          onChangeText={setamountValue}
          placeholder="Enter Amount"
          maxLength={6}
        />
        <TextInput
          style={styles.input}
          onChangeText={setNameValue}
          placeholder="Enter Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setInvoiceNo}
          placeholder="Enter Invoice Number"
        />
        <TextInput
          style={styles.input}
          onChangeText={setnote}
          placeholder="Enter Notes"
        />
        <Picker
          selectedValue={selectedValue}
          // style={{ height: 40, width: 150 }}
          onValueChange={setSelectedValue}
        >
          <Picker.Item label="Select Expense Head" value="" />
          {isloading ? (
            <ActivityIndicator />
          ) : (
            expenseHead.map((head, index) => (
              <Picker.Item
                key={head.id}
                label={head.exp_category}
                value={head.id}
              />
            ))
          )}
        </Picker>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={API_CALL_TO_ADD_EXPENSE}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
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
export default Add_expense_Form;
