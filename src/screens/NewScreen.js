import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';


export default function NewScreen () {

  function newTask (values) {
	//TODO save new task
  }

  return (
    <Formik
      initialValues={{title: ''}}
      onSubmit={newTask}
    >
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={style.container}>
          <Text h4>Type of Clothing</Text>
          <Input 
            placeholder="Example: Shirt, Jacket, Pants, etc..." 
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            style={style.input}
          />
          <Text h4>Color of Clothing</Text>
          <Input
            placeholder="Example: Red, Black, White, etc..."
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            style={style.input}
          />
          <Button title="Add" onPress={handleSubmit} style={style.button} />
        </View>
      )}
    </Formik>
  )
}

const { getItem, setItem } = useAsyncStorage('info');

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10
  },
  input: {
    marginTop: 10
  },
  button: {
    backgroundColor: '#228CDB'
  }
})