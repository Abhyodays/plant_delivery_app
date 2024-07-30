import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        gap: 10,
        borderWidth: 3,
        borderStyle:'solid',
        borderRadius: 50,
        paddingHorizontal: 10
    },
    button_text:{
        fontSize: 16,
        fontWeight:'bold',
        color:Colors.black
    }
})

export default styles;