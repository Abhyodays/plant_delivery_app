import { StatusBar, StyleSheet, Text, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getAllCartItems } from "../../../redux/cart/cart.actions";
import CommonStyles from "../../CommonStyles";
import Header from "../../../components/Header/Header";
import InterText from "../../../components/InterText/InterText";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavParamList } from "../../../constants/NavParamaList";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CartItemCard from "../../../components/CartItemCard/CartItemCard";
import { CartItem } from "../../../types/CartItem";
import { Colors } from "../../../constants/Colors";
import { Button, useTheme } from 'react-native-paper';
import _ from 'lodash';
import { orderRequest } from "../../../redux/orderCreate/orderCreate.action";
import { User } from "../../../types/User";

function Cart() {
    const { colors } = useTheme();
    const cart = useSelector((state: any) => state.cart);
    const user: User = useSelector((state: any) => state.user.user);
    const userId = user?.id
    const cartItems: CartItem[] = cart.items;
    const grouped = _.groupBy(cartItems, item => item.item?.id);

    const groupedByItemId = Object.entries(grouped).map(([itemId, group]) => ({
        cartItem: group[0].item,
        cartId: group[0].id,
        quantity: group.length,
        price: Number(group[0].item?.price.slice(1))
    }));

    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const dispatch = useDispatch();

    const handleOrder = () => {
        dispatch(orderRequest(user.id));
        dispatch(getAllCartItems(userId));
        navigation.navigate("Confirmation");
    };

    const total = useMemo(() => {
        return groupedByItemId.reduce((acc, item) => {
            return acc + item?.price * item.quantity;
        }, 0);
    }, [groupedByItemId]);

    useEffect(() => {
        dispatch(getAllCartItems(userId));
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
            <Header />
            <View style={styles.innerContainer}>
                <InterText style={CommonStyles.title}>Cart</InterText>

                {groupedByItemId.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Icon name="cart-outline" size={100} color={colors.onSurfaceDisabled || '#ccc'} />
                        <Text style={[styles.emptyText, { color: colors.onSurface }]}>Your cart is empty</Text>
                        <Button
                            mode="outlined"
                            style={styles.continueButton}
                            onPress={() => navigation.navigate("Home")} // Replace with actual screen
                        >
                            Continue Shopping
                        </Button>
                    </View>
                ) : (
                    <FlatList
                        style={{ flex: 1 }}
                        data={groupedByItemId}
                        keyExtractor={(item) => item.cartId.toString()}
                        renderItem={({ item }) => (
                            <CartItemCard
                                id={item.cartId}
                                item={item.cartItem}
                                quantity={item.quantity}
                            />
                        )}
                    />
                )}
            </View>

            {groupedByItemId.length > 0 && (
                <View style={[styles.footer, { backgroundColor: Colors.light_green }]}>
                    <View>
                        <Text style={styles.priceHeader}>Total</Text>
                        <Text style={styles.price}>${total}</Text>
                    </View>
                    <Button
                        mode="contained"
                        buttonColor={Colors.black}
                        style={{ borderRadius: 5 }}
                        onPress={handleOrder}
                    >
                        Place Order
                    </Button>
                </View>
            )}
        </View>
    );
}



export default Cart;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    innerContainer: {
        paddingHorizontal: 24,
        flex: 1
    },
    footer: {
        paddingVertical: 10,
        paddingHorizontal: 24,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    price: {
        fontSize: 24,
        fontWeight: '600'
    },
    priceHeader: {
        fontWeight: '600'
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        marginTop: 16,
        fontSize: 18,
        fontWeight: '500',
    },
    continueButton: {
        marginTop: 20,
        borderRadius: 5,
    },
});
