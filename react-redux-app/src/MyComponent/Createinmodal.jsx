
import React, {useEffect, useState} from 'react';
import axios  from 'axios';

const Createinmodal = () => {

    const url ="http://localhost:4000/book/"
    const [book, setBook] = useState({
        bookName:"", author:"", publishers:"", publishYear:"", price:""
    });

    let name, value;
    const handleInputs = (e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setBook({...book, [name]:value});
    }
    
    const submit = (e) =>{
        
        e.preventDefault();
        axios.post(url, {
            // book
            bookName:book.bookName, author:book.author, publishers:book.publishers, publishYear:book.publishYear, price:book.price
            
        }).then(res=>{
            console.log(res.book)
        })
        
    }
    return (
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add new Books</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        

      <form onSubmit={(e)=>submit(e)}>
            <div className='mb-3'>
                <label className="form-label">Book Name</label>
                <input value={book.bookName} onChange={handleInputs} name="bookName" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div className="mb-3">
                <label className="form-label">Author</label>
                <input value={book.author} onChange={handleInputs} name="author" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
                <label className="form-label">publishers</label>
                <input value={book.publishers} onChange={handleInputs} name="publishers" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
                <label className="form-label">publishYear</label>
                <input value={book.publishYear} onChange={handleInputs} name="publishYear" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
                <label className="form-label">price</label>
                <input value={book.price} onChange={handleInputs} name="price" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>
            
            {/* <button name="add" type="submit" className="btn btn-primary" >Submit</button> */}
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <button type="submit" name="add" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
            </div>
        </form>


      </div>
      

      
    </div>
  </div>
</div>
        </>
    )
}

export default Createinmodal