import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'

export default function Register() {
  const handlePress = () => {
    console.log('register form submitted')
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText
        title
        style={styles.title}
      >
        Register an account
      </ThemedText>

      <ThemedButton onPress={handlePress}>
        <Text style={{ color: '#f2f2f2' }}>Register</Text>
      </ThemedButton>

      <Spacer height={100} />

      <Link
        href={'/login'}
        style={{ textAlign: 'center' }}
      >
        <ThemedText>Already have an account? Login</ThemedText>
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
})
