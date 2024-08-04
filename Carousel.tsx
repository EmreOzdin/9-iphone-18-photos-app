import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { photos } from "./data";

export default function Carousel() {
  return (
    <View>
      <Text>Title</Text>

      <ScrollView>
        <Image source={photos[0].image} style={{ width: 300, height: 200 }} />
        <Image source={photos[0].image} style={{ width: 300, height: 200 }} />
        <Image source={photos[0].image} style={{ width: 300, height: 200 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    padding: 15,
  },
  image: {
    width: 250,
    height: 150,
    paddingHorizontal: 20,
  },
  images: {
    paddingHorizontal: 20,
    gap: 15,
  },
});

//https://www.youtube.com/watch?v=pZHRFNpYkAY 40:52
