import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'

export default function About() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText
        style={styles.title}
        title
      >
        About
      </ThemedText>

      <Link
        href={'/'}
        style={styles.link}
      >
        <ThemedText>Back Home</ThemedText>
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
