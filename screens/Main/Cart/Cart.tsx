import { Button, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCartItems } from "../../../redux/cart/cart.actions";
import CommonStyles from "../../CommonStyles";
import Header from "../../../components/Header/Header";
import InterText from "../../../components/InterText/InterText";
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigatorScreenParams, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavParamList } from "../../../constants/NavParamaList";
import { FlatList } from "react-native-gesture-handler";
import CartItemCard from "../../../components/CartItemCard/CartItemCard";
import { CartItem } from "../../../types/CartItem";
import { Colors } from "../../../constants/Colors";

function Cart() {
    const cartItems: CartItem[] = useSelector((state: any) => state.cart.items)
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const dispatch = useDispatch();
    // console.log("cart:", cartItems)
    const handleBack = () => {
        navigation.goBack();
    }
    useEffect(() => {
        dispatch(getAllCartItems())
    }, [])
    return (
        <View style={CommonStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
            <Header />
            <View>
                <InterText style={CommonStyles.title}>Cart</InterText>
            </View>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartItemCard id={item.id} item={item.item} />} />
        </View>
    )
}

export default Cart;