import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Alert, Button, Image, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { NavParamList } from "../../../constants/NavParamaList";
import CommonStyles from '../../CommonStyles'
import InterText from "../../../components/InterText/InterText";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../../constants/Colors";
import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons'
import styles from "./styles";
import { useEffect, useState } from "react";
import { Credential } from "../../../types/Credential";
import useUserData from "../../../hooks/useUserData";


function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loginAttempt, setLoginAttempt] = useState<number>(0)
    const { data, error, login } = useUserData("http://10.0.2.2:3000/login");
    const [loginError, setLoginError] = useState<string | null>(error);


    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const goToSignup = () => {
        navigation.push('Signup')
    }
    const handleLogin = async () => {
        const user: Credential = {
            email,
            password
        }
        if (email.trim() === "") {
            loginAlert("Email is required!");
            return;
        }
        if (password.trim() === "") {
            loginAlert("Password is required")
            return;
        }
        login(user);
        setLoginAttempt(loginAttempt + 1);
    }

    const loginAlert = (message: string) => {
        Alert.alert("Login", message)
    }
    useEffect(() => {
        error && loginAlert(error)
    }, [error, loginAttempt])


    return (
        <View style={CommonStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
            <View style={styles.header}>
                <InterText style={[styles.headerText]}>Login</InterText>
                <TouchableOpacity onPress={goToSignup}>
                    <InterText style={[styles.headerText, styles.link, CommonStyles.link]}>Create account</InterText>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <KeyboardAvoidingView behavior="height">
                    <View style={styles.main_content}>
                        <TextInput label="Email" mode="outlined" outlineColor={Colors.green}
                            activeOutlineColor={Colors.green} style={styles.input}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput label="Password" mode="outlined" outlineColor={Colors.green}
                            activeOutlineColor={Colors.green}
                            style={styles.input}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.button_container}>
                        <TouchableOpacity style={[CommonStyles.button, styles.button]} onPress={handleLogin} activeOpacity={0.8}>
                            <Text style={[CommonStyles.button_text, styles.button_text]}>Login</Text>
                            <Icon name="arrow-forward" style={styles.button_text} />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>

    )
}



export default Login;