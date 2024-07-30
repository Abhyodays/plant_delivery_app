import { createStackNavigator } from "@react-navigation/stack"
import { NavParamList } from "../../constants/NavParamaList";
import SplashScreen from "../../screens/SplashScreen/SplashScreen";
import Login from "../../screens/Authentication/Login/Login";
import Signup from "../../screens/Authentication/Signup/Signup";

function AuthStack() {
    const Stack = createStackNavigator<NavParamList>();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}

export default AuthStack;