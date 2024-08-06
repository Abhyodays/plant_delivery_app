import { FlatList, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import CommonStyles from "../../CommonStyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavParamList } from "../../../constants/NavParamaList";
import { useState } from "react";
import styles from "./styles";
import { Colors } from "../../../constants/Colors";
import useFetchPlant from "../../../hooks/useFetchPlant";
import { Plant } from "../../../types/Plant";
import PlantCard from "../../../components/PlantCard/PlantCard";

function Search() {
    const [value, setValue] = useState<string>("");
    const [query, setQuery] = useState<string>("");
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();

    const { data: plants }: { data: Plant[] } = useFetchPlant(`search-plants/?q=${query}`)

    const goBack = () => {
        navigation.goBack();
    }
    const handleChange = (text: string) => {
        setValue(text);
    }
    const handleSearch = () => {
        if (value.trim() === "") return;
        setQuery(value);
    }
    return (
        <View style={CommonStyles.container}>
            <View style={styles.header}>
                <Icon name="arrow-back" style={[CommonStyles.icon]} onPress={goBack} />
                <View style={styles.input_container}>
                    <Icon name="search" style={[CommonStyles.icon, styles.icon]} color={Colors.light_grey} onPress={handleSearch} />
                    <TextInput placeholder="Search here"
                        value={value}
                        onChangeText={(text) => handleChange(text)}
                        autoFocus={true}
                        keyboardType="default"
                        onBlur={handleSearch}
                        style={styles.input}
                    />
                </View>
            </View>
            <FlatList
                data={plants}
                renderItem={({ item }) => <PlantCard plant={item} />}
                style={styles.result_container}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

export default Search;