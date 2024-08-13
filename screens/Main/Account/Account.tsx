import { Alert, FlatList, StatusBar, Text, TouchableOpacity, View } from "react-native";
import CommonStyles from "../../CommonStyles";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from "../../../constants/Colors";
import { useEffect, useState } from "react";
import { User } from "../../../types/User";
import { TextInput } from "react-native-paper";

import { TouchableHighlight } from "react-native-gesture-handler";
import InterText from "../../../components/InterText/InterText";
import Header from "../../../components/Header/Header";
import { light } from "../../../types/IconColor";
import { removeUserRequest, saveUser } from "../../../redux/user/user.action";
import { useNavigation } from "@react-navigation/native";
import { NavParamList } from "../../../constants/NavParamaList";
import { StackNavigationProp } from "@react-navigation/stack";
import useUserData from "../../../hooks/useUserData";

function Account() {
    const dispatch = useDispatch();
    const user: User = useSelector((state: any) => state.user.user);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const { data, error, update } = useUserData(`http://10.0.2.2:3000/users/${user.id}`);
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const updateUser = () => {
        const updatedUser: User =
            { id: user.id, email, name }

        update(updatedUser)
            .then(() => {
                if (data) {
                    dispatch(saveUser(data));
                }
            })
            .then(() => {
                navigation.navigate("Home");
            })
            .catch((error) => console.log(error))
    }
    const logoutUser = () => {
        Alert.alert(
            'Logout User',
            'Are you sure?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Ok',
                    onPress: () => {
                        dispatch(removeUserRequest())
                    },
                    style: 'default'
                }
            ],
            {
                cancelable: true
            }
        );
    }



    return (
        <View style={[CommonStyles.container, styles.container]}>
            <StatusBar backgroundColor={Colors.green} barStyle='light-content' />
            <Header style={styles.header} iconStyle={light} />
            <View style={styles.poster}>
                <Icon name="person-circle" style={styles.icon} />
            </View>
            <View style={styles.details}>
                <TextInput value={name}
                    label="Name"
                    mode="outlined"
                    outlineColor={Colors.green}
                    style={styles.input}
                    activeOutlineColor={Colors.green}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    label="Email"
                    mode="outlined"
                    outlineColor={Colors.green}
                    activeOutlineColor={Colors.green}
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <View style={styles.button_container}>
                    <TouchableHighlight style={styles.button} onPress={updateUser}>
                        <InterText style={styles.button_text}>Submit</InterText>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.button, styles.button_logout]} onPress={logoutUser}>
                        <InterText style={[styles.button_text]}>Logout</InterText>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

export default Account;