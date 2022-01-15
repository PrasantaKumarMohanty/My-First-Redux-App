import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Axios  from 'axios';

export default function Navbar() {

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/"className="navbar-brand" >MyLibrary</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
      <li className="nav-item">
          <Link to="/"className="nav-link" >Home</Link>
        </li>
        
        <li className="nav-item">
          <Link to="/create"className="nav-link" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Create</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>



{/* <!-- Modal --> */}
{/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <input value={books.bookName} onChange={handleInputs} name="bookName" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
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
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" name="add" className="btn btn-primary">Save</button>
            </div>
        </form>


      </div>
      

      
    </div>
  </div>
</div> */}
</>

    )

}
