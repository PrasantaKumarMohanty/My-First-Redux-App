
import Axios  from 'axios';
import React, {useState} from 'react';
// import SweetAlert from 'react-bootstrap-sweetalert';

const Create = () => {
    const url ="http://localhost:4000/book/"
    const [books, setBooks] = useState({
        bookName:"", author:"", publishers:"", publishYear:"", price:""
    });

    let name, value;
    const handleInputs = (e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setBooks({...books, [name]:value});
    }

    const submit = (e) =>{
        
        e.preventDefault();
        Axios.post(url, {
            // books
            bookName:books.bookName, author:books.author, publishers:books.publishers, publishYear:books.publishYear, price:books.price
            
        }).then(res=>{
            console.log(res.books)
        })
        
    }

  return (
      <>
      <center><h3>Add new Books</h3></center>
      <div className='container' style={{width: '50%'}} id='exampleModal'>
        <form onSubmit={(e)=>submit(e)}>
            <div className='mb-3'>
                <label className="form-label">Book Name</label>
                <input value={books.bookname} onChange={handleInputs} name="bookName" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div className="mb-3">
                <label className="form-label">Author</label>
                <input value={books.author} onChange={handleInputs} name="author" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
                <label className="form-label">publishers</label>
                <input value={books.publishers} onChange={handleInputs} name="publishers" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
                <label className="form-label">publishYear</label>
                <input value={books.publishYear} onChange={handleInputs} name="publishYear" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
                <label className="form-label">price</label>
                <input value={books.price} onChange={handleInputs} name="price" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>
            
            <button name="add" type="submit" className="btn btn-primary" >Submit</button>
        </form>
        
        </div>

        
    </>
  )
}

export default Create
