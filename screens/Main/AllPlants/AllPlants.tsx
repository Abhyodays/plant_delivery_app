import { FlatList, TouchableOpacity, View } from "react-native";
import CommonStyles from "../../CommonStyles";
import Header from "../../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import PlantCard from "../../../components/PlantCard/PlantCard";
import { Plant } from "../../../types/Plant";
import { useEffect } from "react";
import { getPlantsRequest } from "../../../redux/plants/plants.actions";
import InterText from "../../../components/InterText/InterText";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavParamList } from "../../../constants/NavParamaList";

function AllPlants() {
    const allPlants = useSelector((state: any) => state.plants.plants);
    const dispatch = useDispatch();
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    useEffect(() => {
        dispatch(getPlantsRequest());
    }, [])


    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <View style={CommonStyles.container}>
            <Header Left={
                <TouchableOpacity onPress={handleBack}>
                    <Icon name="arrow-back" style={[CommonStyles.icon]} />
                </TouchableOpacity>
            } />
            <View>
                <InterText style={CommonStyles.title}>all plants</InterText>
            </View>
            <FlatList
                data={allPlants}
                renderItem={({ item }) => <PlantCard plant={item} />}
                keyExtractor={(item: Plant) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center' }}
            />
        </View>
    )
}

export default AllPlants;