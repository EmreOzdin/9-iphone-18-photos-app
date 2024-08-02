import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { photos } from "./data";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={{ height: 400 }}>
        <FlatList
          data={photos}
          numColumns={5}
          contentContainerStyle={{ gap: 2 }}
          columnWrapperStyle={{ gap: 2 }}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={{ width: `${100 / 4}%`, aspectRatio: 1 }}
            />
          )}
        />
      </View>
      <View>
        <Text>Albums</Text>
        <View
          style={{ height: 200, width: 300, backgroundColor: "lightgray" }}
        ></View>
      </View>

      <View>
        <Text>Albums</Text>
        <View
          style={{ height: 200, width: 300, backgroundColor: "lightgray" }}
        ></View>
      </View>

      <View>
        <Text>Albums</Text>
        <View
          style={{ height: 200, width: 300, backgroundColor: "lightgray" }}
        ></View>
      </View>

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
