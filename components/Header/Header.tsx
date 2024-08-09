import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewProps, ViewStyle } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavParamList } from "../../constants/NavParamaList";
import CommonStyles from "../../screens/CommonStyles";
import styles from "./styles";
import { dark, light } from "../../types/IconColor";

type HeaderProps = {
    style?: StyleProp<ViewStyle>,
    iconStyle?: string
}
function Header({ style, iconStyle }: HeaderProps) {
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const goToCart = () => {
        navigation.navigate('Cart')
    }
    const handleBack = () => {
        navigation.goBack();
    }
    const goToWishlist = () => {
        navigation.navigate('Wishlist')
    }
    return (
        <View style={[styles.headerContainer, style]}>
            <TouchableOpacity onPress={handleBack}>
                <Icon name="arrow-back" style={[CommonStyles.icon, { color: iconStyle == light ? Colors.white : Colors.black }]} />
            </TouchableOpacity>
            <View style={styles.icon_container}>
                <TouchableOpacity onPress={goToWishlist}>
                    <Icon name="heart" size={28} style={[{ color: iconStyle == light ? Colors.white : Colors.black }]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={goToCart}>
                    <Icon name="bag" style={[CommonStyles.icon, { color: iconStyle == light ? Colors.white : Colors.black }]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;