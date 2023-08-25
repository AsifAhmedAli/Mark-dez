import  React, {Component, useState, useEffect}  from "react";
import { Modal, View, Text, Pressable,  ActivityIndicator, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { styled } from 'nativewind';
import Add_income_Form from "./add_income";
import Add_expense_Head_Form from "./add_income_head";

const StyledView = styled(View);
const StyledText = styled(Text);
// var limit = 0;
const Buttons = (props) => {
    // console.log(props.data[0].reset_limit);
    const [modalVisible, setModalVisible] = useState(false);
    const [asdf, lknlsdf] = useState(false);
    return(
        
        <StyledView>
        <StyledView className="flex-row py-3">
<StyledView className="mt-1 px-2 basis-1/2">
    <TouchableOpacity onPress={() => setModalVisible(true)} className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <StyledText className="text-center">Add Income</StyledText>
    </TouchableOpacity>
</StyledView>
<StyledView className="mt-1 px-2 basis-1/2">
    <TouchableOpacity onPress={() => lknlsdf(true)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <StyledText className="text-center">Add Income Head</StyledText>
    </TouchableOpacity>
</StyledView>
</StyledView>

<StyledView style={styles.container3} className="flex-row py-3 border-solid border-2 border-black">
<StyledView className="mt-1 px-2 basis-1/2">
    <TouchableOpacity onPress={props.data[0].reset_limit} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <StyledText className="text-center">View Incomes</StyledText>
    </TouchableOpacity>
</StyledView>
<StyledView className="mt-1 px-2 basis-1/2">
    <TouchableOpacity onPress={props.data[0].view_income_heads} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <StyledText className="text-center">View Income Heads</StyledText>
    </TouchableOpacity>
</StyledView>
</StyledView>
<View  style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            className="w-4/5"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Add_income_Form  data={setModalVisible}/>
                                {/* <Text style={styles.modalText}>Hello World!</Text> */}
                                <Pressable className="px-4 mt-3"
                                style={styles.submitButton}
                                onPress={() => setModalVisible(!modalVisible)}
                                >
                                <Text style={styles.submitButtonText}>Cancel</Text>
                                </Pressable>
                            </View>
                            </View>
                        </Modal>
                    </View>
                

                    <View  style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            className="w-4/5"
                            transparent={true}
                            visible={asdf}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            lknlsdf(!asdf);
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Add_expense_Head_Form  data={lknlsdf}/>
                                <Pressable className="px-4 mt-3"
                                style={styles.submitButton}
                                onPress={() => lknlsdf(!asdf)}
                                >
                                <Text style={styles.submitButtonText}>Cancel</Text>
                                </Pressable>
                            </View>
                            </View>
                        </Modal>
                    </View>
</StyledView>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    container2: { flex: 1, backgroundColor: '#fff' },
    container1: { flex: 1, padding: 16, backgroundColor: '#fff', borderBottomColor: "#fff" },
    container3: { backgroundColor: '#fff', borderEndColor: "#fff", borderStartColor: "#fff" },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' },
    centeredView: {
        // width: 100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }  ,
      submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
   },
   submitButtonText:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
   }
});



export default Buttons;