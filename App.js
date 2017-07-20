import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import PhotoViewer from "./PhotoViewer";

const PHOTOS = [
  {
    key: "a",
    source: { uri: "https://placebear.com/200/300", cache: "force-cache" },
    caption: "Bear"
  },
  {
    key: "b",
    source: { uri: "https://placebear.com/200/301", cache: "force-cache" },
    caption: "Bear"
  },
  {
    key: "c",
    source: { uri: "https://placebear.com/200/302", cache: "force-cache" },
    caption: "Bear"
  },
  {
    key: "d",
    source: { uri: "https://placebear.com/200/303", cache: "force-cache" },
    caption: "Bear"
  },
  {
    key: "e",
    source: { uri: "https://placebear.com/200/304", cache: "force-cache" },
    caption: "Bear"
  }
];

const Item = ({ photo, onPress }) =>
  <View style={styles.item}>
    <TouchableWithoutFeedback onPress={onPress}>
      <Image style={{ width: 300, height: 300 }} source={photo.source} />
    </TouchableWithoutFeedback>
    <Text style={styles.caption}>
      {photo.caption}
    </Text>
  </View>;

export default class App extends React.Component {
  render() {
    return (
      <PhotoViewer
        renderContent={({ onPhotoOpen }) =>
          <ScrollView style={styles.container}>
            {PHOTOS.map(photo =>
              <Item
                photo={photo}
                key={photo.key}
                onPress={() => {
                  onPhotoOpen(PHOTOS, photo.key);
                }}
              />
            )}
          </ScrollView>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  item: {
    padding: 20,
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#333"
  }
});
