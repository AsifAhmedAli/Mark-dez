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
import Buttons from "./student_buttons";
// import All_income_heads1 from "./all_income_head";
// import Add_expense_Head_Form from "./add_expense_head";
const StyledView = styled(View);
const StyledText = styled(Text);
var limit = 0;
const Income = () => {
  // console.log(navigation);
  // const [value, setValue] = useState(1);
  const [isloading, setloading] = useState([true]);
  const [tableData, setTableData] = useState([]);
  const [income_head_data, setincome_head_data] = useState(false);
  const All_incomes = async (limit1) => {
    setloading(true);
    // var axios = require('axios');
    limit = limit + limit1;
    // console.log(limit);
    // console.log(limit1);

    var urla =
      "https://mexil.it/chroma_api/all_incomes_with_limit.php?pagi=" + limit;
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
  const reset_limit = () => {
    limit = 0;
    const incri = 20;
    // alert("asdfasdf");
    setincome_head_data(false);
    All_incomes(incri);
  };
  const view_income_heads = async () => {
    // alert("asdfasdf");
    // window.location.reload();
    setincome_head_data(true);
  };
  useEffect(() => {
    const incri = 20;
    All_incomes(incri);
  }, []);
  var data1 = [
    {
      view_income_heads: view_income_heads,
      reset_limit: reset_limit,
    },
  ];
  return (
    <ScrollView>
      <StyledView>
        <Buttons data={data1} />

        <StyledView
          className="flex-row bg-white pt-4 px-5"
          style={styles.container2}
        >
          <StyledView className="basis-1/2">
            <Text className="font-bold text-start">Name</Text>
          </StyledView>
          <StyledView className="basis-1/2">
            <Text className="text-start font-bold">Amount</Text>
          </StyledView>
        </StyledView>
        {isloading ? <ActivityIndicator /> : ""}
        <StyledView style={styles.container}>
          {income_head_data ? (
            <All_income_heads1 />
          ) : (
            tableData.map((item, index) => (
              <StyledView
                key={item.id}
                style={styles.container1}
                className=" flex-row border-solid border-2 border-black py-2"
              >
                <StyledView className="basis-1/2">
                  <Text className="text-start">{item.name}</Text>
                </StyledView>
                <StyledView className="basis-1/2">
                  <Text className="text-start">{item.amount}</Text>
                </StyledView>
              </StyledView>
              // <Text>asdasd</Text>
            ))
          )}

          {income_head_data ? (
            ""
          ) : (
            <StyledView>
              <StyledView
                style={styles.container3}
                className="border-solid border-2 border-black"
              ></StyledView>

              <StyledView className="mt-2 px-2 w-1/2 self-center mb-3">
                {isloading ? <ActivityIndicator /> : ""}

                <TouchableOpacity
                  onPress={() => All_incomes(20)}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  <StyledText className="text-center">Load More</StyledText>
                </TouchableOpacity>
              </StyledView>
            </StyledView>
          )}
        </StyledView>
      </StyledView>
    </ScrollView>
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

export default Income;
