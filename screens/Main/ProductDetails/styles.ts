import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 24,
        color: Colors.black,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    link: {
        color: Colors.black
    },
    poster_container: {
        marginTop: 30,
        position: 'relative',
        height: 400
    },
    poster_bg: {
        marginHorizontal: 20,
        backgroundColor: Colors.light_green,
        borderRadius: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 70,
        right: 0,
        zIndex: 1
    },
    poster_image: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        borderRadius: 10,
        zIndex: 2
    },
    plant_details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    description: {
        marginVertical: 20,
    },
    description_text: {
        fontSize: 16,
        color: Colors.dark_grey,
        letterSpacing: 1.2
    },
    footer: {
        height: 85,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: 1.3 
    },
    value: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.green,
    },
    scrollview_content: {
        paddingBottom: 85 
    },
    footer_icon_container:{
        flexDirection:'row',
        gap: 20,
        alignItems:'center'
    }
});

export default styles;
