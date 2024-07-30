import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const CommonStyles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
        paddingHorizontal:24
    },
    button: {
        marginTop: 50,
        backgroundColor: Colors.green,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30
    },
    button_text: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    icon: {
        color: Colors.black,
        fontSize: 24
    },
    link:{
        fontSize: 16,
        textDecorationLine: "underline"
    }
})

export default CommonStyles;