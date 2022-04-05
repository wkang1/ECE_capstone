// App.js

import React from 'react';
import { View, Image, Button, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const SERVER_URL = 'http://10.0.0.86:3000';

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};

const App = () => {
  const [photo, setPhoto] = React.useState(null);

  const handleChoosePhoto = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    console.log(result);
    setPhoto(result);
  };

  const handleUploadPhoto = () => {
    fetch(`${SERVER_URL}/api/upload`, {
      method: 'POST',
      body: createFormData(photo, { userId: '123' }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo && (
        <>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Upload Photo" onPress={handleUploadPhoto} />
        </>
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
};

export default App;