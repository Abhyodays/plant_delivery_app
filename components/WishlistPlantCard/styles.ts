import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    cancel_button:{
        position:'absolute',
        top: 2,
        right: 10,
        zIndex: 5,
        fontSize: 24,
        color:Colors.dark_grey,
    }
})

export default styles;