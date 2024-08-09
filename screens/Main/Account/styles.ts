import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";


const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 0 
    },
    header:{
        backgroundColor:Colors.green,
        paddingHorizontal:24
    },
    poster:{
        flex: 0.3,
        backgroundColor:Colors.green,
        justifyContent:'flex-end',
        alignItems:'center',
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        paddingBottom:30
    },
    icon:{
        fontSize: 100,
        color:Colors.white,
    },
    details:{
        marginTop: 20,
        marginHorizontal:24,
        gap:20
    },
    input: {
        height: 60,
        fontSize: 20,
    },
    button_container:{
        justifyContent:'center',
        marginTop: 30,
        flexDirection:'row',
        gap:20
    },
    button:{
        backgroundColor:Colors.green,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    button_text:{
        color:Colors.white,
        fontWeight:'bold',
        fontSize: 18
    },
    button_logout:{
        backgroundColor: '#A02334'
    }
    
    
})

export default styles;