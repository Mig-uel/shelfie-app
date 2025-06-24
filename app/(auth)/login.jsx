import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import { Colors } from '../../constants/colors'

export default function Login() {
  const handlePress = () => {
    console.log('login form submitted')
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText
        title
        style={styles.title}
      >
        Login to your account
      </ThemedText>

      <ThemedButton onPress={handlePress}>
        <Text style={{ color: '#f2f2f2' }}>Login</Text>
      </ThemedButton>

      <Spacer height={100} />

      <Link
        href={'/register'}
        style={{ textAlign: 'center' }}
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
