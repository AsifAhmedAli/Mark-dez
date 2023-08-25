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
const Add_Class_Form = (props) => {
  const [class_name, setclass_name] = useState([]);
  // const [namevalue, setNameValue] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  // const [invoiceNo, setInvoiceNo] = useState([]);
  // const [note, setnote] = useState([]);

  const [section, setsection] = useState([]);
  const [isloading, setloading] = useState([true]);
  const [isloading1, setloading1] = useState(false);
  const All_sections = async () => {
    setloading(true);
    var urla = "https://mexil.it/chroma_api/all_sections.php";
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
        setsection(response.data);
        //   console.log(section[1]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    All_sections();
  }, []);
  const API_CALL_TO_ADD_CLASS = () => {
    // console.log(props.Expense);
    setloading1(true);
    if (class_name == "" || selectedValue == "") {
      // alert("Some values are missed or Entered incorrectly");
      showMessage({
        message: "Some values are missed or Entered incorrectly",
        type: "danger",
      });
    } else {
      var data = JSON.stringify({
        section_name: selectedValue,
        add_class: "yes",
        class_name: class_name,
      });
      // console.log(data);
      var config = {
        method: "post",
        url: "https://mexil.it/chroma_api/add_class.php",
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
            message: "Success - New Class Added",
            type: "success",
          });
          props.data(false);
        })
        .catch(function (error) {
          console.log(error);
          showMessage({
            message: "This class Name is already Taken!",
            type: "danger",
          });
        });
      setloading1(false);
    }

    // const obj = JSON.parse();
  };
  // console.log(section);
  return (
    <View>
      <Text className="text-center"> Add Class </Text>
      <View>
        <TextInput
          style={styles.input}
          value={class_name}
          onChangeText={setclass_name}
          placeholder="Enter Class Name"
        />
        {/* <TextInput style={styles.input} onChangeText={setNameValue} placeholder="Enter Name" /> */}
        {/* <TextInput style={styles.input} onChangeText={setInvoiceNo} placeholder="Enter Invoice Number" />
        <TextInput style={styles.input} onChangeText={setnote} placeholder="Enter Notes" /> */}
        <Picker
          selectedValue={selectedValue}
          // style={{ height: 40, width: 150 }}
          onValueChange={setSelectedValue}
        >
          <Picker.Item label="Select Section" value="" />
          {isloading ? (
            <ActivityIndicator />
          ) : (
            section.map((head, index) => (
              <Picker.Item
                key={head.id}
                label={head.section}
                value={head.section}
              />
            ))
          )}
        </Picker>
        {isloading1 ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity
            style={styles.submitButton}
            onPress={API_CALL_TO_ADD_CLASS}
          >
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        )}
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
export default Add_Class_Form;
