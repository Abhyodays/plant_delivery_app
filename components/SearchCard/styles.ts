import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    search_container:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        backgroundColor: Colors.light_grey,
        borderRadius: 20,
        flexGrow: 0,
        paddingLeft: 10,
        paddingRight: 25,
        marginTop: 30,
        marginBottom: 20
    },
    text:{
        fontSize: 18,
        flex:1,
        marginVertical: 15,
        marginLeft: 5
    }
})

export default styles;