import { FlatList } from "react-native-gesture-handler"
import { Plant } from "../../types/Plant"
import { Text } from "react-native-paper"
import { Image } from "react-native"
import PlantCard from "../PlantCard/PlantCard"
import styles from "./styles"

export type HorizontalListProps = {
    data: Plant[]
}
function HorizontalList({ data }: HorizontalListProps) {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <PlantCard plant={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default HorizontalList;