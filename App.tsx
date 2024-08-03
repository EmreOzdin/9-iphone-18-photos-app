import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { photos } from "./data";
import Carousel from "./Carousel";

export default function App() {
  const { height, width } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={{ height: height / 2 }}>
        <FlatList
          data={photos}
          numColumns={5}
          contentContainerStyle={{ gap: 2 }}
          columnWrapperStyle={{ gap: 2 }}
          scrollEnabled={false}
          inverted
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={{ width: `${100 / 4}%`, aspectRatio: 1 }}
            />
          )}
        />
      </View>
      {/* Carousel */}
      <Carousel />
      <Carousel />
      <Carousel />

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
