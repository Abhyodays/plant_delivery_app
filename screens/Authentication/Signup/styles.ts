import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: Colors.black
    },
    link: {
        color: Colors.green
    },
    main_content: {
        marginTop: '25%',
    },
    input: {
        height: 60,
        fontSize: 20,
        marginTop:20
    },
    button_container: {
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 30
    },
    button_text: {
        color: Colors.white,
        fontSize: 20
    },
    icon: {
        fontSize: 24
    },
    error_text:{
        color:'red',
        marginTop: 5,
        fontSize:16,
        fontWeight:'bold'
    }
})
export default styles;