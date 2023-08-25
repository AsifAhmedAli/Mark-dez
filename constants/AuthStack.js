// import { Button, View, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
import DrawerItems from "./drawerItems_Auth_Stack";
const Drawer = createDrawerNavigator();
const AuthStack = (props) => {
  // console.log(props.data);
  return (
    // <NavigationContainer>
    <Drawer.Navigator>
      {DrawerItems.map((drawer) => (
        <Drawer.Screen
          data={drawer.cname}
          component={drawer.cname}
          key={drawer.id}
          name={drawer.name}
        />
      ))}
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default AuthStack;
