import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Update = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        await axios.put(`http://localhost:5000/books/${id}`, {title, description: desc, price})
        navigate('/')
    }
  return (
    <div className='Update'>
        <h1>UPDATE BOOK: </h1>
        <label htmlFor="title">TITLE</label>
        <input type="text" id='title' placeholder='TITLE' onChange={(e) => {setTitle(e.target.value)}}/>
        <label htmlFor="desc">DESCRIPTION</label>
        <input type="text" id='desc' placeholder='DESCRIPTION' onChange={(e) => {setDesc(e.target.value)}}/>
        <label htmlFor="price">PRICE</label>
        <input type="text" id='price' placeholder='PRICE' onChange={(e) => {setPrice(e.target.value)}}/>
        <button onClick={handleSubmit}>ADD BOOK</button>
    </div>
  )
}

export default Update