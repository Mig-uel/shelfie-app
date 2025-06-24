import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import ThemedView from '../components/ThemedView'

export default function About() {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>About</Text>

      <Link
        href={'/'}
        style={styles.link}
      >
        Back Home
      </Link>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
})
