import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import SplashScreenStack from "./SplashScreenStack/SplashScreenStack";
import MainStack from "./MainStack/MainStack";
import AuthStack from "./AuthStack/AuthStack";
import { StatusBar } from "react-native";
import { Colors } from "../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { getUserFromStorage } from "../redux/user/user.action";

function router() {
    const [showSplashSreen, setShowSplashScreen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.user);
    useEffect(() => {
        dispatch(getUserFromStorage());
    }, [])
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
            {
                showSplashSreen ?
                    <SplashScreenStack />
                    :
                    user ?
                        <MainStack />
                        :
                        <AuthStack />
            }
        </NavigationContainer>
    )
}

export default router;