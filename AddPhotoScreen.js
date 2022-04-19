import React from 'react';
import axios from "axios";
import { View, Image, Button, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useLocation } from 'react-router-dom';

const SERVER_URL = 'https://sheet.best/api/sheets/725a3d83-79cc-4a91-90ec-aefe53604c53';
const LOCALHOST_URL = 'http://10.0.0.84:3000';

const createFormData = (photo) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  return data;
};

function AddPhoto() {
  const [photo, setPhoto] = React.useState(null);
  const [displayUrl, setDisplayUrl] = React.useState("");

  const handleChoosePhoto = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    setPhoto(result);
  };

  const cloudinaryUpload = (photo) => {
    const data = new FormData()
    data.append('file', photo)
    data.append('upload_preset', 'imageuploads')
    data.append("cloud_name", "dmunxqdae")
    fetch("https://api.cloudinary.com/v1_1/dmunxqdae/upload", {
      method: "POST",
      body: data
    }).then(res => res.json()).
      then(data => {
        console.log(data);
        setDisplayUrl(data.secure_url);
      }).catch(err => {
        Alert.alert("An Error Occured While Uploading")
      })
  }

  const handleUploadPhoto = () => {
    const uri = photo.uri;
    const type = photo.type;
    let name = photo.fileName;
    if(typeof photo.fileName === "undefined"){
        var getFilename = uri.split("/");
        name = getFilename[getFilename.length - 1];
    }
    const source = {
      uri,
      type,
      name,
    }
    cloudinaryUpload(source);
    axios.post(SERVER_URL, { displayUrl })
    .then((response) => {
      console.log(response);
    })
    // fetch(`${LOCALHOST_URL}/api/upload`, {
    //   method: 'POST',
    //   body: createFormData(photo),
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log('response', response);
    //   })
    //   .catch((error) => {
    //     console.log('error', error);
    //   });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo && (
        <>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Upload Photo" onPress={handleUploadPhoto} encType='multipart/form-data'/>
        </>
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
};

export default AddPhoto;