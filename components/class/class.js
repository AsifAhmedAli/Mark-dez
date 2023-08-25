import React, { Component, useState, useEffect } from "react";
import {
  Alert,
  Modal,
  View,
  Text,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styled } from "nativewind";
import axios from "axios";
import Buttons from "./classes_buttons";
import All_sections from "./all_sections";
// import All_classs1 from "../all_class";
// import Add_class_Form from "./add_class";
const StyledView = styled(View);
const StyledText = styled(Text);
// var limit = 0;
const Class = () => {
  // console.log(navigation);
  const [sections, setsectionsValue] = useState(false);
  const [isloading, setloading] = useState([true]);
  const [tableData, setTableData] = useState([]);
  const All_classes = async () => {
    setloading(true);
    setsectionsValue(false);
    // var axios = require('axios');
    // limit = limit + limit1;
    // console.log(limit);
    // console.log(limit1);

    var urla = "https://mexil.it/chroma_api/all_classes_with_sections.php";
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
        setTableData(response.data);
        //   console.log("tableData[0]");
        //   console.log(response.data[0].id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // const reset_limit = () => {
  //     // limit = 0;
  //     // const incri = 20;
  //     // alert("asdfasdf");
  //     setclass_data(false);
  //     All_classes(incri);
  // }
  const view_classs = async () => {
    // alert("asdfasdf");
    // window.location.reload();
    // setclass_data(true);
    All_classes();
  };
  const view_sections = async () => {
    // alert("asdfasdf");
    // window.location.reload();
    // setclass_data(true);
    setsectionsValue(true);
  };
  useEffect(() => {
    // const incri = 20;
    All_classes();
  }, []);
  var data1 = [
    {
      view_classs: view_classs,
      view_sections: view_sections,
      // "reset_limit": reset_limit
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <StyledView>
          <Buttons data={data1} />
          {sections ? (
            <StyledView
              className="flex-row bg-white py-4 px-5"
              style={styles.container2}
            >
              <StyledView className="basis-1/2">
                <Text className="font-bold text-start">ID</Text>
              </StyledView>
              <StyledView className="basis-1/2">
                <Text className="text-start font-bold">Section</Text>
              </StyledView>
            </StyledView>
          ) : (
            <StyledView
              className="flex-row bg-white py-4 px-5"
              style={styles.container2}
            >
              <StyledView className="basis-1/2">
                <Text className="font-bold text-start">Class</Text>
              </StyledView>
              <StyledView className="basis-1/2">
                <Text className="text-start font-bold">Section</Text>
              </StyledView>
            </StyledView>
          )}

          {isloading ? <ActivityIndicator /> : ""}
          {sections ? (
            <All_sections />
          ) : (
            <StyledView style={styles.container}>
              {tableData.map((item, index) => (
                <StyledView
                  key={item.id}
                  style={styles.container1}
                  className=" flex-row border-solid border-2 border-black py-2"
                >
                  <StyledView className="basis-1/2">
                    <Text className="text-start">{item.class}</Text>
                  </StyledView>
                  <StyledView className="basis-1/2">
                    <Text className="text-start">
                      {item.section_details.Section}
                    </Text>
                  </StyledView>
                </StyledView>
                // <Text>asdasd</Text>
              ))}
              <StyledView
                style={styles.container3}
                className="border-solid border-2 border-black"
              ></StyledView>
            </StyledView>
          )}
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  container2: { flex: 1, backgroundColor: "#fff" },
  container1: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    borderBottomColor: "#fff",
  },
  container3: {
    backgroundColor: "#fff",
    borderBottomColor: "#fff",
    borderEndColor: "#fff",
    borderStartColor: "#fff",
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#f6f8fa" },
  row: { height: 28 },
  text: { textAlign: "center" },
});

export default Class;
