import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavParamList } from "../../constants/NavParamaList";
import CommonStyles from "../../screens/CommonStyles";
import styles from "./styles";

function Header({ Left }: { Left: React.JSX.Element }) {
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const goToCart = () => {
        navigation.navigate('Cart')
    }
    const handleBack = () => {
        navigation.goBack();
    }
    const goToWishlist = () => {
        navigation.push('Wishlist')
    }
    return (
        <View style={styles.headerContainer}>
            {Left}
            <View style={styles.icon_container}>
                <TouchableOpacity onPress={goToWishlist}>
                    <Icon name="heart" size={28} color={Colors.black} />
                </TouchableOpacity>
                <TouchableOpacity onPress={goToCart}>
                    <Icon name="bag" style={CommonStyles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;