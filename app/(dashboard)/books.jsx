import { FlatList, Pressable, StyleSheet } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedCard from '../../components/ThemedCard'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import { Colors } from '../../constants/colors'
import { useBooksContext } from '../../context/BooksContext'

export default function Books() {
  const { books } = useBooksContext()

  return (
    <ThemedView
      style={styles.container}
      safe
    >
      <Spacer height={10} />

      <ThemedText
        title
        style={styles.heading}
      >
        Your Reading List
      </ThemedText>

      <Spacer />

      <ThemedView style={{ flex: 1 }}>
        <FlatList
          data={books}
          keyExtractor={(book) => book.$id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Pressable>
              <ThemedCard style={styles.card}>
                <ThemedText style={styles.title}>{item.title}</ThemedText>
                <ThemedText style={styles.title}>{item.author}</ThemedText>
              </ThemedCard>
            </Pressable>
          )}
        />
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'stretch',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  list: {
    marginTop: 40,
  },
  card: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})

/**
 * The Safe Area is the area of the screen that is not hidden by
 * device features or built-in device UI elements (e.g. clock, battery)
 */
