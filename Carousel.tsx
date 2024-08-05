import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { photos } from "./data";

type Carousel = {
  title: string;
  photos: any[];
};

export default function Carousel({ title, photos }: Carousel) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={styles.images}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        snapToInterval={250 + 15}
        decelerationRate="fast"
      >
        {photos.map((photo) => (
          <Image key={photo.id} source={photo.image} style={styles.image} />
        ))}

        <Image source={photos[0].image} style={styles.image} />
        <Image source={photos[1].image} style={styles.image} />
        <Image source={photos[2].image} style={styles.image} />
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
    borderRadius: 15,
  },
  images: {
    paddingHorizontal: 20,
    gap: 15,
  },
});

//https://www.youtube.com/watch?v=pZHRFNpYkAY 53:21
