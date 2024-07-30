import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Image, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { NavParamList } from "../../../constants/NavParamaList";
import CommonStyles from '../../CommonStyles'
import InterText from "../../../components/InterText/InterText";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../../constants/Colors";
import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons'


function Signup() {
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const goToLogin = () => {
        navigation.navigate('Login')
    }
    const handleLogin = () => {
        console.log("login");
    }
    return (
        <ScrollView style={CommonStyles.container} >
            <KeyboardAvoidingView behavior="height">
                <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
                <View style={styles.header}>
                    <InterText style={[styles.headerText]}>Create account</InterText>
                    <TouchableOpacity onPress={goToLogin}>
                        <InterText style={[styles.headerText, styles.link, CommonStyles.link]}>Already a user?</InterText>
                    </TouchableOpacity>
                </View>
                <View style={styles.main_content}>
                    <TextInput label="Email" mode="outlined" outlineColor={Colors.green} activeOutlineColor={Colors.green} style={styles.input} />
                    <TextInput label="Password" mode="outlined" outlineColor={Colors.green} activeOutlineColor={Colors.green} style={styles.input} />
                    <TextInput label="Confirm password" mode="outlined" outlineColor={Colors.green} activeOutlineColor={Colors.green} style={styles.input} />
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity style={[CommonStyles.button, styles.button]} onPress={handleLogin} activeOpacity={0.8}>
                        <Text style={[CommonStyles.button_text, styles.button_text]}>Create</Text>
                        <Icon name="arrow-forward" style={styles.button_text} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: Colors.black
    },
    link: {
        color: Colors.green
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
        marginTop: 50
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

export default Signup;