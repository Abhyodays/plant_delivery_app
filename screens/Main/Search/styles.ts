import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        gap: 20
    },
    input_container:{
        borderWidth:1,
        width: '90%',
        borderColor:Colors.dark_grey,
        borderRadius: 5,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft: 5
    },
    icon:{
        color:Colors.medium_grey
    },
    result_container:{
        marginTop: 20
    },
    input:{
        fontSize: 16,
        color: Colors.green,
        fontWeight: 'bold',
        width:'90%',
        marginRight:10
    }
})

export default styles;