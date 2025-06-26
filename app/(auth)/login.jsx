import { Link } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedView from '../../components/ThemedView'
import { Colors } from '../../constants/colors'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handlePress = () => {
    console.log('login form submitted')
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText
        style={styles.title}
        title
      >
        Login
      </ThemedText>

      <ThemedTextInput
        keyboardType='email-address'
        onChangeText={setEmail}
        placeholder='Email'
        style={{ width: '80%' }}
        value={email}
      />
      <Spacer height={20} />
      <ThemedTextInput
        onChangeText={setPassword}
        placeholder='Password'
        secureTextEntry
        style={{ width: '80%' }}
        value={password}
      />

      <Spacer height={20} />

      <ThemedButton onPress={handlePress}>
        <Text style={{ color: '#f2f2f2' }}>Login</Text>
      </ThemedButton>

      <Spacer />

      <Link
        href={'/register'}
        style={{ textAlign: 'center' }}
        push
      >
        <ThemedText>Don't have an account? Register</ThemedText>
      </Link>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8,
  },
})
