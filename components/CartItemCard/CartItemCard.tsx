import { Image, View } from "react-native";
import { CartItem } from "../../types/CartItem";
import InterText from "../InterText/InterText";
import Icon from 'react-native-vector-icons/Ionicons'
import CommonStyles from "../../screens/CommonStyles";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../redux/cart/cart.actions";
import styles from "./styles";

function CartItemCard({ id, item }: CartItem) {
    const dispatch = useDispatch();
    const handleRemove = () => {
        if (!id) return;
        dispatch(removeCartItem(id));
    }
    return (
        <View style={styles.card_container}>
            <Icon name="close-circle-sharp" style={CommonStyles.cancel_button} size={16} onPress={handleRemove} />
            <View style={styles.card}>
                <Image source={{ uri: item.image_url }} style={styles.card_image} resizeMode="contain" />
                <View>
                    <InterText style={styles.card_title}>{item.name}</InterText>
                    <InterText style={styles.card_price}>{item.price}</InterText>
                </View>

            </View>
        </View>

    )
}

export default CartItemCard;