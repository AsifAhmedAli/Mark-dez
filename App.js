import { AuthProvider } from "./context/authcontext";
// import * as React from "react";
import { Component, useState } from "react";
// import { Text, View } from "react-native";
import { Router } from "./router/router";
// import FlashMessage from "react-native-flash-message";
// import AppStack from "./constants/appStack";

class Home extends Component {
  state = { authorisation: true };

  setauthorisation = () => {
    const currentauthorisationstate = this.state.authorisation;
    this.state.authorisation = !currentauthorisationstate;
  };
  data = {
    state: this.state,
    setauthorisation_state: this.setauthorisation,
  };
  render() {
    // console.log(this.state);
    return (
      // <AuthProvider>
      // <AppNav />
      // <App />
      // </AuthProvider>
      // <View>
      <Router data={this.data} />
      // <View>{this.setauthorisation()}</View>
      // <AppStack />
      // <AuthStack />
      // <FlashMessage position="top" />
      // </View>
    );
  }
}
export default Home;
