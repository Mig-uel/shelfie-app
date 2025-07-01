import { StyleSheet } from 'react-native'
import ThemedText from '../../../components/ThemedText'
import ThemedView from '../../../components/ThemedView'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { useBooksContext } from '../../../context/BooksContext'
import Spacer from '../../../components/Spacer'
import ThemedLoader from '../../../components/ThemedLoader'
import ThemedCard from '../../../components/ThemedCard'

export default function BookDetails() {
  const { id } = useLocalSearchParams()
  const [book, setBook] = useState(null)
  const { fetchBookById } = useBooksContext()

  useEffect(() => {
    async function loadBook() {
      const bookResponse = await fetchBookById(id)

      setBook(bookResponse)
    }

    loadBook()
  }, [])

  if (!book) {
    return (
      <ThemedView
        safe
        style={styles.container}
      >
        <ThemedLoader />
      </ThemedView>
    )
  }

  return (
    <ThemedView
      safe
      style={styles.container}
    >
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>

        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title>Book Description:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
})
