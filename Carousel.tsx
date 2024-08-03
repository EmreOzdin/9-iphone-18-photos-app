import { ScrollView, Text, View, Image } from "react-native";
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

//https://www.youtube.com/watch?v=pZHRFNpYkAY 35:52
