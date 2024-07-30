import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    header_container:{
        flexDirection: 'row',
        // flex:1,
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    text:{
        color: Colors.black
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    }
})

export default styles;