import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  const { title, artist, thumbnail_image, image, url } = props.album;
  const {
    thumnailStyle,
    headerStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    headerText,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection style={headerStyle}>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumnailStyle}
            source={{ uri: thumbnail_image}}
          />
        </View>
        <View style={headerText}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
          <Image
            style={imageStyle}
            source={{ uri: image}}
          />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}/>
      </CardSection>
    </Card>
  );
}

const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  thumnailStyle: {
    width: 50,
    height: 50
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  headerText: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 20
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetail;

