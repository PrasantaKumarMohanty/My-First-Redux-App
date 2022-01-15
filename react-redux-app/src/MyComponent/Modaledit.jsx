import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function Modaledit(props) {

//        const [note, setNote] = useState({})
//    setNote(props.title)
    console.log(props)

   return (
       <>

           <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div className="modal-dialog">
                   <div className="modal-content">
                       <div className="modal-header">
                           <h5 className="modal-title" id="exampleModalLabel">Edit Here...</h5>
                           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                       </div>
                       <div className="modal-body">


                           <div className='container' style={{ width: '50%' }}>
                               <form >
                                   <div className='mb-3'>
                                       <label className="form-label">Book Name</label>
                                       <input value={props.title} name="bookName" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                   </div>
                                   <div className="mb-3">
                                       <label className="form-label">Author</label>
                                       <input value={props.title} name="author" type="text" className="form-control" id="exampleInputPassword1" />
                                   </div>

                                   <div className="mb-3">
                                       <label className="form-label">publishers</label>
                                       <input value={props.title} name="publishers" type="text" className="form-control" id="exampleInputPassword1" />
                                   </div>

                                   <div className="mb-3">
                                       <label className="form-label">publishYear</label>
                                       <input value={props.title} name="publishYear" type="text" className="form-control" id="exampleInputPassword1" />
                                   </div>

                                   <div className="mb-3">
                                       <label className="form-label">price</label>
                                       <input value={props.title} name="price" type="text" className="form-control" id="exampleInputPassword1" />
                                   </div>

                                   <button name="add" type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Update</button>
                               </form>
                           </div> 

                       </div>
                       {/* <div className="modal-footer">
       <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       <button type="button" className="btn btn-primary">Save changes</button> */}
     {/* </div> */}
                   </div>
               </div>
           </div>
       </>
   )

    
  
}
