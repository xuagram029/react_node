import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() =>{
        const getBooks = async () =>{
            try {
                const res = await axios.get('http://localhost:5000/books')
                setBooks(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getBooks()
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/books/${id}`)
        window.location.reload()
    }

  return (
    <div>
        {books.map(book =>(
            <div key={book.id}>
                <h1>BOOOK APP</h1>
                <div>TITLE: {book.title}</div>
                <div>DESCRIPTION: {book.description}</div>
                <div>PRICE: {book.price}</div>
                <button onClick={() => {handleDelete(book.id)}}>DELETE</button>
                <button><Link to={`/update/${book.id}`}>UPDATE</Link></button>
            </div>
        ))}
        <button><Link to='/add'>ADD BOOKS</Link></button>
    </div>
  )
}

export default Books