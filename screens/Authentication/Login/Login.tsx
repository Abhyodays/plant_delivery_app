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
import styles from "./styles";


function Login() {
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const goToSignup = () => {
        navigation.push('Signup')
    }
    const handleLogin = () => {
        console.log("login");
    }
    return (
        <ScrollView style={CommonStyles.container}>
            <KeyboardAvoidingView behavior="height">
                <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
                <View style={styles.header}>
                    <InterText style={[styles.headerText]}>Login</InterText>
                    <TouchableOpacity onPress={goToSignup}>
                        <InterText style={[styles.headerText, styles.link, CommonStyles.link]}>Create account</InterText>
                    </TouchableOpacity>
                </View>
                <View style={styles.main_content}>
                    <TextInput label="Email" mode="outlined" outlineColor={Colors.green} activeOutlineColor={Colors.green} style={styles.input} />
                    <TextInput label="Password" mode="outlined" outlineColor={Colors.green} activeOutlineColor={Colors.green} style={styles.input} />
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity style={[CommonStyles.button, styles.button]} onPress={handleLogin} activeOpacity={0.8}>
                        <Text style={[CommonStyles.button_text, styles.button_text]}>Login</Text>
                        <Icon name="arrow-forward" style={styles.button_text} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}



export default Login;