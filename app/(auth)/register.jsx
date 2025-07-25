import { Link } from 'expo-router'
import { useState } from 'react'
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedView from '../../components/ThemedView'
import { Colors } from '../../constants/colors'
import { useUserContext } from '../../context/UserContext'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { register, user } = useUserContext()

  const handlePress = async () => {
    setError(null)

    try {
      await register({ email, password })
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />

        <ThemedText
          title
          style={styles.title}
        >
          Register
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

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Spacer height={20} />

        <ThemedButton onPress={handlePress}>
          <Text style={{ color: '#f2f2f2' }}>Register</Text>
        </ThemedButton>

        <Spacer />

        <Link
          href={'/login'}
          style={{ textAlign: 'center' }}
          push
        >
          <ThemedText>Already have an account? Login</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
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
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#F4C1C8',
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
})
