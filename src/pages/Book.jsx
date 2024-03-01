import { useParams } from "react-router-dom"
import BookDetails from "../components/BookDetails/BookDetails"

const Book = () => {
  const {id} = useParams()
  return (
    <BookDetails id={id} />
  )
}

export default Book