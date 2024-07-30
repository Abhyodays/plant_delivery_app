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
    return (
        <View style={styles.headerContainer}>
            {Left}
            <TouchableOpacity onPress={goToCart}>
                <Icon name="bag" style={CommonStyles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default Header;