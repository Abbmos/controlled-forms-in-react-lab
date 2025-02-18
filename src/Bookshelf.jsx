import { useState } from 'react';




const Bookshelf = () => {
    const initialState = {
        taskName: '',
        category: ''
    }
    const [books,setBooks] = useState([]);
    const [newBook,setNewBook] = useState({
    title:'',
    author:'',
        
    })

const handleInputChange = (e) =>{

setNewBook({...newBook,
    [e.target.name]: e.target.value
})


}
const handleSubmit = (e) => {

e.preventDefault()
setBooks([...books,newBook])
setNewBook(initialState)
}

return(

    <>
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
 <form onSubmit={handleSubmit}>
<label> Title: </label>
<input type="text" onChange={handleInputChange} value={newBook.title} name="title"/>
<label> Author: </label>
<input type="text" onChange={handleInputChange} value={newBook.author} name="author"/>
<button type='submit'>Add Book</button>

 </form>
  </div>
  <div className="bookCardsDiv">{
    books.map(book=> (

<div className='bookCard'>
<h3>{book.title}</h3>
<p>by {book.author}</p>
</div>



    ))
    
    
    
    }</div>
</div>
</>
)
}
export default Bookshelf