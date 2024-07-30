import { View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from "../../constants/Colors";
import InterText from "../InterText/InterText";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export type AddToCartProps = {
    addToCart: () => void
}
function AddToCartButton({ addToCart }: AddToCartProps) {
    return (
        <TouchableOpacity onPress={addToCart}>
            <View style={styles.container}>
                <Icon name="cart" size={32} color={Colors.black} />
                <InterText style={styles.button_text}>Add to cart</InterText>
            </View>
        </TouchableOpacity>
    )
}

export default AddToCartButton;