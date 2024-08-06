import { Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { Colors } from "../../constants/Colors";
import CommonStyles from "../../screens/CommonStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavParamList } from "../../constants/NavParamaList";

function Search() {
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const search = () => {
        navigation.navigate("Search")
    }

    return (

        <TouchableOpacity onPress={search}>
            <View style={styles.search_container}>
                <Text style={styles.text}>indoor plants</Text>
                <Icon name="search" style={[CommonStyles.icon]} />
            </View >
        </TouchableOpacity>
    )
}

export default Search;