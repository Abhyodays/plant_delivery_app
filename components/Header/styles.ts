import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
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