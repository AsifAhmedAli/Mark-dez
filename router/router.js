import AppStack from "../constants/appStack";
import AuthStack from "../constants/AuthStack";
import FlashMessage, {
  showMessage,
  hideMessage,
} from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
export const Router = (props) => {
  // console.log(props.data.state.authorisation);
  // const [authorisation, setauthorisation] = useState(true);
  //More explanations about "authorisation" below
  // console.log(authorisation);
  return (
    <NavigationContainer>
      {props.data.state.authorisation ? (
        <AppStack data={props.data} />
      ) : (
        <AuthStack data={props.data} />
      )}
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
};
