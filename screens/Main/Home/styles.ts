import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";


const styles = StyleSheet.create({
    
    headerText: {
        fontSize: 16,
        color: Colors.black
    },
    bold: {
        fontWeight: 'bold'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
    },
    icon_container:{
        flexDirection:'row',
        gap: 20,
        alignItems:'center'
    }
})

export default styles;