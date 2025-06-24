import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

export default function Contact() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Contact</ThemedText>

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
