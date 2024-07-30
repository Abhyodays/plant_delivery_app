import { createStackNavigator } from "@react-navigation/stack";
import { NavParamList } from "../../constants/NavParamaList";
import SplashScreen from "../../screens/SplashScreen/SplashScreen";

function SplashScreenStack() {
    const Stack = createStackNavigator<NavParamList>();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
    )
}

export default SplashScreenStack;