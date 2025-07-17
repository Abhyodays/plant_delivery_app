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
        // gap: 30,
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
    },
     container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 50,
        paddingHorizontal: 10
    },
    button_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.black
    },
    flex_row:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})

export default styles;