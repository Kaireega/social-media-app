import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { registerUser } from '../../utils/auth';
import { useColorScheme } from 'react-native';
import type { ColorSchemeName } from 'react-native';

export default function Register() {
  const theme = useColorScheme();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await registerUser(username, email, password);
      Alert.alert('Success', 'Account created! You can now log in.');
      router.push('./login');
    } catch (error) {
      Alert.alert('Error', 'Registration failed');
    }
  };

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>Register</Text>
      <TextInput style={styles(theme).input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles(theme).input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles(theme).input} placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Back to Login" onPress={() => router.push('./login')} />
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
  