import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const PhotoPane = ({ photo }) =>
  <View style={styles.photoPane}>
    <Image style={{ width: 200, height: 300 }} source={{ uri: photo.uri }} />
  </View>;

class InnerViewer extends React.Component {
  render() {
    const { onClose, photos, photoKey } = this.props;
    const initilIndex = photos.map(p => p.key).indexOf(photoKey);
    return (
      <View style={styles.viewer}>
        <FlatList
          style={styles.hScroll}
          horizontal={true}
          pagingEnabled={true}
          data={photos}
          renderItem={({ item }) => <PhotoPane photo={item} />}
          initialNumToRender={1}
          initialScrollIndex={initilIndex}
          getItemLayout={(data, index) => ({
            length: SCREEN_WIDTH,
            offset: SCREEN_WIDTH * index,
            index
          })}
        />
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default class PhotoViewer extends React.Component {
  state = {
    photos: null
  };

  onPhotoOpen = (photos, key) => {
    this.setState({ photos, key });
  };

  onClose = () => {
    this.setState({ photos: null, key: null });
  };

  render() {
    const { photos, key } = this.state;
    return (
      <View style={styles.container}>
        {this.props.renderContent({ onPhotoOpen: this.onPhotoOpen })}
        {photos &&
          <InnerViewer photos={photos} onClose={this.onClose} photoKey={key} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  viewer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },

  closeText: {
    color: "white"
  },

  closeButton: {
    position: "absolute",
    top: 20,
    left: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    borderColor: "white",
    padding: 20
  },

  photoPane: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: "center",
    justifyContent: "center"
  },

  hScroll: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  }
});
