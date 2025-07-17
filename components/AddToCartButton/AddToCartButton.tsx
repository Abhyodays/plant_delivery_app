import { View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from "../../constants/Colors";
import InterText from "../InterText/InterText";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export type AddToCartProps = {
    addToCart: () => void;
    count: number;
    removeFromCart: () => void
}
function AddToCartButton({ addToCart, count, removeFromCart }: AddToCartProps) {
    return (
        <>
            {count > 0 ?
                <View style={[styles.container, { alignSelf: 'flex-end' }]}>
                    <Icon name="remove" size={24} color={Colors.black} onPress={removeFromCart} />
                    <InterText style={styles.button_text}>{count}</InterText>
                    <Icon name="add" size={24} color={Colors.black} onPress={addToCart} />
                </View>
                :
                <TouchableOpacity onPress={addToCart}>
                    <View style={styles.container}>
                        <Icon name="cart" size={32} color={Colors.black} />
                        <InterText style={styles.button_text}>Add to cart</InterText>
                    </View>
                </TouchableOpacity>}
        </>
    )
}

export default AddToCartButton;