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
    },
    title: {
        fontSize: 24,
        color: Colors.black,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginBottom: 20
    },
    cancel_button:{
        position:'absolute',
        top: 2,
        right: 10,
        zIndex: 5,
        fontSize: 24,
        color:Colors.dark_grey,
    },
    error_text:{
        color:'red',
        fontSize:16,
        fontWeight:'bold'
    }
})

export default CommonStyles;