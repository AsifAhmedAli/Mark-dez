// import { Button, View, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
import DrawerItems from "./drawerItems_App_Stack";
const Drawer = createDrawerNavigator();
const AppStack = (props) => {
  console.log(props.data);
  return (
    // <NavigationContainer>

    <Drawer.Navigator initialRouteName="Expense">
      {DrawerItems.map((drawer) => (
        <Drawer.Screen
          initialParams={props.data}
          component={drawer.cname}
          key={drawer.id}
          name={drawer.name}
        />
      ))}
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default AppStack;
