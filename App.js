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
  { uri: "https://placebear.com/200/300", caption: "Bear" },
  { uri: "https://placebear.com/200/301", caption: "Bear" },
  { uri: "https://placebear.com/200/302", caption: "Bear" },
  { uri: "https://placebear.com/200/303", caption: "Bear" },
  { uri: "https://placebear.com/200/304", caption: "Bear" }
];

const Item = ({ photo, onPress }) =>
  <View style={styles.item}>
    <TouchableWithoutFeedback onPress={onPress}>
      <Image style={{ width: 200, height: 300 }} source={{ uri: photo.uri }} />
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
            {PHOTOS.map((photo, index) =>
              <Item
                photo={photo}
                key={photo.uri}
                onPress={() => {
                  onPhotoOpen(PHOTOS, index);
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
