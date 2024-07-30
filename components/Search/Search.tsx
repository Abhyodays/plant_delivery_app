import { TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { Colors } from "../../constants/Colors";
import CommonStyles from "../../screens/CommonStyles";

function Search() {
    const search = () => {
        console.log("search");
    }
    return (
        <View style={styles.search_container}>
            <TextInput placeholder="indoor plants" style={styles.text} />
            <Icon name="search" style={[CommonStyles.icon]} onPress={search} />
        </View>
    )
}

export default Search;