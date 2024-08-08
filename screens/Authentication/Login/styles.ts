import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: Colors.black
    },
    link: {
        color: Colors.green,
    },
    main_content: {
        marginTop: '25%',
        gap: 20
    },
    input: {
        height: 60,
        fontSize: 20,
    },
    button_container: {
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 20
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 30
    },
    button_text: {
        color: Colors.white,
        fontSize: 20
    },
    icon: {
        fontSize: 24
    }
})

export default styles;