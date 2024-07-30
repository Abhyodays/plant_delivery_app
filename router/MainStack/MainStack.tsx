import { createStackNavigator } from "@react-navigation/stack"
import { NavParamList } from "../../constants/NavParamaList"
import Home from "../../screens/Main/Home/Home";
import ProductDetails from "../../screens/Main/ProductDetails/ProductDetails";
import Wishlist from "../../screens/Main/Wishlist/Wishlist";
import Cart from "../../screens/Main/Cart/Cart";
import Account from "../../screens/Main/Account/Account";
import { StatusBar } from "react-native";
import { Colors } from "../../constants/Colors";

function MainStack() {
    const Stack = createStackNavigator<NavParamList>();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Wishlist" component={Wishlist} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
    )
}

export default MainStack;