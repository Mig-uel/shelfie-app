import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import Spacer from '../../../components/Spacer'
import ThemedButton from '../../../components/ThemedButton'
import ThemedCard from '../../../components/ThemedCard'
import ThemedLoader from '../../../components/ThemedLoader'
import ThemedText from '../../../components/ThemedText'
import ThemedView from '../../../components/ThemedView'
import { Colors } from '../../../constants/colors'
import { useBooksContext } from '../../../context/BooksContext'

export default function BookDetails() {
  const { id } = useLocalSearchParams()
  const [book, setBook] = useState(null)
  const { deleteBook, fetchBookById } = useBooksContext()
  const router = useRouter()

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

  const handleDelete = async () => {
    await deleteBook(id)
    setBook(null)
    router.replace('/books')
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

      <ThemedButton
        style={styles.delete}
        onPress={handleDelete}
      >
        <Text style={{ textAlign: 'center', color: '#FFF' }}>Delete Book</Text>
      </ThemedButton>
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
  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: 'center',
  },
})
