import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { showMessage, hideMessage } from "react-native-flash-message";
var FormData = require("form-data");
const Add_income_Form = (props) => {
  // console.log(props);setclasseslist
  const [classeslist, setclasseslist] = useState([]);
  const [sectionlist, setsectionlist] = useState([]);
  const [addmission_no, setaddmission_no] = useState([]);
  // const [classses, setclasses] = useState([]);
  // const [section, setsection] = useState([]);
  const [fname, setfname] = useState([]);
  const [gender, setgender] = useState([]);
  const [DOB, setDOB] = useState([]);
  const [gardian, setgardian] = useState([]);
  const [gardian_name, setgardian_name] = useState([]);
  const [gardian_phone, setgardian_phone] = useState([]);
  const [weight, setweight] = useState([]);
  const [height, setheight] = useState([]);
  const [selectedClass, setselectedClass] = useState([]);
  const [selectedSection, setselectedSection] = useState([]);
  const [sectionliststatus, setsectionliststatus] = useState([true]);

  // const [IncomeHead, setIncomeHead] = useState([]);
  const [isloading, setloading] = useState([true]);
  const [isloading1, setloading1] = useState([true]);
  const all_classes_with_sections = async () => {
    setloading(true);
    var urla = "https://mexil.it/chroma_api/all_classes.php";
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
        setclasseslist(response.data);
        //   console.log(IncomeHead[1]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    all_classes_with_sections();
  }, []);
  const setclassandgetsections = (asd) => {
    setselectedClass(asd);
    // console.log(asd);
    setloading1(true);
    var urla = "https://mexil.it/chroma_api/all_sections_of_one_class.php";
    var data = new FormData();
    data.append("asd", asd);
    var config = {
      method: "post",
      data: data,
      url: urla,
      headers: {
        Authorization:
          "Bearer 49d765a2e4d7bc6d3fe07b17c6c2c69f58baccaff2c49ca5017383403d611c5b",
      },
    };

    axios(config)
      .then(function (response) {
        //   console.log(JSON.stringify(response.data));

        setloading1(false);
        setsectionliststatus(false);
        setsectionlist(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(asd);
  };
  const API_CALL_TO_ADD_EXPENSE = () => {
    // console.log(props.Expense);
    // console.log(selectedClass);
    if (
      addmission_no == "" ||
      fname == "" ||
      gender == "" ||
      DOB == "" ||
      gardian == "" ||
      gardian_name == "" ||
      gardian_phone == "" ||
      weight == "" ||
      height == "" ||
      selectedClass == ""
      // selectedClass == ""
    ) {
      // console.log(selectedClass);
      // alert("Some values are missed or Entered incorrectly");
      showMessage({
        message: "Some values are missed or Entered incorrectly",
        type: "danger",
      });
    } else {
      // var validated_id = parseInt(selectedClass);
      // var validated_amount = parseInt(amountvalue);
      // console.log(typeof validated_amount + validated_amount);
      // console.log(typeof invoiceNo + invoiceNo);
      // console.log(typeof note + note);
      // console.log(typeof namevalue + namevalue);
      // console.log(typeof validated_id + validated_id);
      var data = JSON.stringify({
        // inc_head_id: validated_id,
        // name: namevalue,
        // invoice_no: invoiceNo,
        // amount: validated_amount,
        // note: note,
        // date: "2022-03-03",
      });
      // console.log(data);
      // var config = {
      //   method: "post",
      //   url: "https://mexil.it/chroma_api/add_income.php",
      //   headers: {
      //     Authorization: "Bearer 49d765a2e4d7bc6d3fe07b17c6c2c69f58baccaff2c49ca5017383403d611c5b",
      //     "Content-Type": "application/json",
      //   },
      //   data: data,
      // };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          showMessage({
            message: "Success - New Income Added",
            type: "success",
          });
          props.data(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // const obj = JSON.parse();
  };
  // console.log(IncomeHead);
  return (
    // <ScrollView>
    <View>
      <Text> Add Student </Text>
      <View>
        <TextInput
          style={styles.input}
          value={addmission_no}
          keyboardType="numeric"
          onChangeText={setaddmission_no}
          placeholder="Enter Admission Number"
          maxLength={6}
        />
        <TextInput
          style={styles.input}
          value={fname}
          onChangeText={setfname}
          placeholder="Enter Name"
        />
        <TextInput
          style={styles.input}
          value={gender}
          onChangeText={setgender}
          placeholder="Enter Gender"
        />
        <TextInput
          style={styles.input}
          value={DOB}
          onChangeText={setDOB}
          placeholder="Enter Date of Birth"
        />
        <TextInput
          style={styles.input}
          value={gardian_name}
          onChangeText={setgardian_name}
          placeholder="Enter Guardian Name"
        />
        <TextInput
          style={styles.input}
          value={gardian_phone}
          onChangeText={setgardian_phone}
          placeholder="Enter Guardian Phone"
        />
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setweight}
          placeholder="Enter Weight"
        />
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={setheight}
          placeholder="Enter Height"
        />

        <Picker
          selectedValue={selectedClass}
          onValueChange={(itemValue, itemIndex) =>
            setclassandgetsections(itemValue)
          }
        >
          <Picker.Item label="Select Class" value="" />
          {isloading ? (
            <ActivityIndicator />
          ) : (
            classeslist.map((head, index) => (
              <Picker.Item
                key={head.id}
                label={head.classname}
                value={head.id}
              />
            ))
          )}
        </Picker>

        <Picker
        // selectedValue={selectedClass}
        // value={selectedClass}
        // style={{ height: 40, width: 150 }}
        // onValueChange={setselectedClass}
        // placeholder={{ label: "Select Class", value: null }}
        >
          <Picker.Item label="Select Section" value="" />
          {/* {sectionliststatus ? (
            <ActivityIndicator />
          ) : isloading1 ? (
            <ActivityIndicator />
          ) : (
            sectionlist.map((head, index) => {
              // console.log(head.section);
              <Picker.Item
                key={head.id}
                label={head.section}
                value={head.id}
              />;
            })
          )} */}
          {/* {console.log()} */}
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
    // </ScrollView>
  );
};
// selectedSection
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 8,
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
export default Add_income_Form;
