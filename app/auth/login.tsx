import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { loginUser } from '../../utils/auth';
import { useColorScheme } from 'react-native';
import type { ColorSchemeName } from 'react-native';



export default function Login() {
   const theme = useColorScheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await loginUser(username, password);
      Alert.alert('Success', 'Logged in successfully!');
      router.replace('/'); // Navigate to your tabs (Home screen)
    } catch (error) {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>Login</Text>
      <TextInput style={styles(theme).input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles(theme).input} placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => router.push('./register')} />
    </View>
  );
}



const styles = (theme: ColorSchemeName) => StyleSheet.create({

      container: {
        flex: 1,
        backgroundColor: theme === 'dark' ? '#000' : '#fff',
        justifyContent: 'center',
        padding: 20,
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
        color: theme === 'dark' ? '#fff' : '#000',
      },
      input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        color: theme === 'dark' ? '#fff' : '#000',
        backgroundColor: theme === 'dark' ? '#222' : '#fff',
        borderColor: '#ccc',
      },
    });
  