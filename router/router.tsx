import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import SplashScreenStack from "./SplashScreenStack/SplashScreenStack";
import MainStack from "./MainStack/MainStack";
import AuthStack from "./AuthStack/AuthStack";
import { StatusBar } from "react-native";
import { Colors } from "../constants/Colors";

function router() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
    const [showSplashSreen, setShowSplashScreen] = useState<boolean>(false);
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
            {
                showSplashSreen ?
                    <SplashScreenStack />
                    :
                    isAuthenticated ?
                        <MainStack />
                        :
                        <AuthStack />
            }
        </NavigationContainer>
    )
}

export default router;