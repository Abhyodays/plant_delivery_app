import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView, View } from "react-native";
import { NavParamList } from "../../../constants/NavParamaList";
import CommonStyles from '../../CommonStyles'
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../../components/Header/Header";
import InterText from "../../../components/InterText/InterText";
import Search from "../../../components/Search/Search";
import SectionHead from "../../../components/SectionHead/SectionHead";
import styles from "./styles";
import { Plant } from "../../../types/Plant";
import HorizontalList from "../../../components/HorizontalList/HorizontalList";
import { plantsData } from "../../../constants/PlantData";

function Home() {
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();

    return (
        <View style={[CommonStyles.container]}>
            <Header Left={
                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <InterText style={[styles.headerText, styles.bold]}>
                        <InterText>Welcome,</InterText> Trisha
                    </InterText>
                </TouchableOpacity>
            }
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Search />
                <SectionHead title="Popular plants" />
                <HorizontalList data={plantsData} />
                <SectionHead title="New arrivals" />
                <HorizontalList data={plantsData} />
            </ScrollView>
        </View>
    )
}

export default Home;