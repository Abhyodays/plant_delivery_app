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
import useInputValidation from "../../../hooks/useInputValidation";
import styles from "./styles";
import { useEffect, useState } from "react";


function Signup() {
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const { values, errors, handleChangeValues, validate } = useInputValidation();
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [confirmPasswordError, setConfirmPasswordError] = useState<string>("")

    const goToLogin = () => {
        navigation.navigate('Login')
    }
    const handleSignup = () => {
        validate();
    }
    const handleConfirmPassword = (text: string) => {
        setConfirmPassword(text);
    }

    const validateConfirmPassword = (): boolean => {
        if (confirmPassword != values['password']) {
            setConfirmPasswordError("Passwords are not same");
            return false;
        }
        setConfirmPasswordError("")
        return true;

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
                    <TextInput label="Email" mode="outlined"
                        outlineColor={Colors.green}
                        activeOutlineColor={Colors.green}
                        value={values['email']}
                        style={styles.input}
                        onChangeText={(text: string) => handleChangeValues('email', text)}
                        onEndEditing={validate}
                        keyboardType="email-address"
                    />
                    {errors['email'] && <InterText style={styles.error_text}>{errors['email']}</InterText>}
                    <TextInput label="Password" mode="outlined"
                        outlineColor={Colors.green}
                        activeOutlineColor={Colors.green}
                        value={values['password']}
                        style={styles.input}
                        onChangeText={(text: string) => handleChangeValues('password', text)}
                        onEndEditing={validate}
                        secureTextEntry={true} />
                    {errors['password'] && <InterText style={styles.error_text}>{errors['password']}</InterText>}
                    <TextInput label="Confirm password" mode="outlined"
                        outlineColor={Colors.green}
                        activeOutlineColor={Colors.green}
                        value={confirmPassword}
                        onChangeText={handleConfirmPassword}
                        style={styles.input}
                        onEndEditing={validateConfirmPassword}
                        secureTextEntry={true}
                    />
                    {confirmPasswordError && <InterText style={styles.error_text}>{confirmPasswordError}</InterText>}

                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity style={[CommonStyles.button, styles.button]} onPress={handleSignup} activeOpacity={0.8}>
                        <Text style={[CommonStyles.button_text, styles.button_text]}>Create</Text>
                        <Icon name="arrow-forward" style={styles.button_text} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}



export default Signup;