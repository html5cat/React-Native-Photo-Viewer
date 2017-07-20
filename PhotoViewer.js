import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

class InnerViewer extends React.Component {
  render() {
    const { onPhotoClose, photo } = this.props;
    return (
      <View style={styles.viewer}>
        <TouchableOpacity onPress={onPhotoClose}>
          <View style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={onPhotoClose}>
          <Image
            style={{ width: 200, height: 300 }}
            source={{ uri: photo.uri }}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default class PhotoViewer extends React.Component {
  state = { photo: null };

  onPhotoOpen = photo => {
    this.setState({ photo });
  };

  onPhotoClose = () => {
    this.setState({ photo: null });
  };

  render() {
    const { photo } = this.state;

    return (
      <View style={styles.container}>
        {this.props.renderContent({ onPhotoOpen: this.onPhotoOpen })}
        {photo &&
          <InnerViewer photo={photo} onPhotoClose={this.onPhotoClose} />}
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
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "white"
  }
});
