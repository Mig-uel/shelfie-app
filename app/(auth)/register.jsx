import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'

export default function Register() {
  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText
        title
        style={styles.title}
      >
        Register an account
      </ThemedText>

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
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
  },
})
