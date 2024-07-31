import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    card_container:{
        width: 155,
        marginRight:20
    },
    card_image_container:{
        width:'100%',
        height: 190,
        backgroundColor:Colors.light_green,
        borderRadius:20
    },
    card_image:{
        flex:0.9,
    },
    card_title:{
        fontSize: 18,
        marginTop: 10,
        marginHorizontal: 10,
        color:Colors.black
    },
    card_price:{
        marginLeft:10,
        fontSize: 20,
        color:Colors.green
    }
})

export default styles;