import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'

export default function Login() {
  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText
        title
        style={styles.title}
      >
        Login to your account
      </ThemedText>

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
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
  },
})
