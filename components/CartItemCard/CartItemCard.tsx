import { Image, StyleSheet, View } from "react-native";
import { CartItem } from "../../types/CartItem";
import InterText from "../InterText/InterText";
import Icon from 'react-native-vector-icons/Ionicons'
import CommonStyles from "../../screens/CommonStyles";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeCartItem } from "../../redux/cart/cart.actions";
import styles from "./styles";
import { Colors } from "../../constants/Colors";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

function CartItemCard({ id, item, quantity }: CartItem) {
    const userId = useSelector((state: any) => state.user.user.id)
    const dispatch = useDispatch();
    const handleRemove = () => {
        if (!id) return;
        dispatch(removeCartItem(userId, id));
    }
    const handleAddToCart = () => {
        dispatch(addItemToCart(userId, item))
    }
    return (
        <View style={styles.card_container}>
            <View style={styles.card}>
                <Image source={{ uri: item?.image_url }} style={styles.card_image} resizeMode="contain" />
                <View style={{ flex: 1, marginLeft: 24 }}>
                    <InterText style={styles.card_title}>{item?.name}</InterText>
                    <View style={styles.flex_row}>
                        <InterText style={styles.card_price}>{item?.price}</InterText>
                        <AddToCartButton count={quantity} addToCart={handleAddToCart} removeFromCart={handleRemove} />
                    </View>
                </View>

            </View>
        </View>

    )
}


export default CartItemCard;