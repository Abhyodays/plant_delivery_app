import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    card_container:{
        flex:1,
    },
    card:{
        height: 100,
        flexDirection:'row',
        padding: 20,
        backgroundColor:Colors.light_green,
        borderRadius: 20,
        alignItems:'center',
        gap: 30,
        marginBottom: 20
    },
    card_image:{
        height:80,
        width:80,
        backgroundColor:Colors.white,
        borderRadius:10,
    },
    card_title:{
        fontSize: 20,
        color:Colors.black,
        fontWeight:'bold'
    },
    card_price:{
        fontWeight:'bold'
    }
})

export default styles;