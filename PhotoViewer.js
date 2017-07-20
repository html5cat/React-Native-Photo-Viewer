import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
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
    const { onClose, photos } = this.props;
    return (
      <View style={styles.viewer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
        <ScrollView style={{ flex: 1 }} horizontal={true} pagingEnabled={true}>
          {photos.map(photo => <PhotoPane photo={photo} key={photo.uri} />)}
        </ScrollView>
      </View>
    );
  }
}

export default class PhotoViewer extends React.Component {
  state = {
    photos: null
  };

  onPhotoOpen = (photos, index) => {
    this.setState({ photos });
  };

  onClose = () => {
    this.setState({ photos: null });
  };

  render() {
    const { photos } = this.state;
    return (
      <View style={styles.container}>
        {this.props.renderContent({ onPhotoOpen: this.onPhotoOpen })}
        {photos && <InnerViewer photos={photos} onClose={this.onClose} />}
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
    zIndex: 1,
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
  }
});
