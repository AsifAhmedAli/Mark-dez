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
  ScrollView,
} from "react-native";
import { styled } from "nativewind";
import axios from "axios";
const StyledView = styled(View);
const StyledText = styled(Text);
// var limit = 0;
const All_sections = React.memo((props) => {
  // console.log(limit);
  // const [value, setValue] = useState(1);
  const [isloading, setloading] = useState([true]);
  // const [modalVisible, setModalVisible] = useState(false);
  // const [asdf, lknlsdf] = useState(false);
  const [sections_data_data, setsections_data_data] = useState([]);
  const All_sections_datas = async () => {
    setloading(true);
    // var axios = require('axios');
    // console.log(limit);
    // console.log(limit1);

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
        setsections_data_data(response.data);
        //   console.log("tableData[0]");
        //   console.log(response.data[0].id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    // const incri = 20;
    All_sections_datas();
  }, []);
  return (
    <ScrollView>
      <StyledView>
        {isloading ? <ActivityIndicator /> : ""}
        <StyledView>
          {sections_data_data.map((item, index) => (
            <StyledView
              key={item.id}
              style={styles.container1}
              className=" flex-row border-solid border-2 border-black py-2"
            >
              <StyledView className="basis-1/2">
                <Text className="text-start">{item.id}</Text>
              </StyledView>
              <StyledView className="basis-1/2">
                <Text className="text-start">{item.section}</Text>
              </StyledView>
            </StyledView>
          ))}
          <StyledView
            style={styles.container3}
            className="border-solid border-2 border-black"
          ></StyledView>
        </StyledView>
      </StyledView>
    </ScrollView>
  );
});

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
export default All_sections;
