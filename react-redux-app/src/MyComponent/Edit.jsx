


const Edit = () => {
    
    return (
        <>
        <center><h3>Edit Books</h3></center>
        <div className='container' style={{width: '50%'}}>
          <form >
              <div className='mb-3'>
                  <label className="form-label">Book Name</label>
                  <input name="bookName" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  
              </div>
              <div className="mb-3">
                  <label className="form-label">Author</label>
                  <input name="author" type="text" className="form-control" id="exampleInputPassword1"/>
              </div>
  
              <div className="mb-3">
                  <label className="form-label">publishers</label>
                  <input name="publishers" type="text" className="form-control" id="exampleInputPassword1"/>
              </div>
  
              <div className="mb-3">
                  <label className="form-label">publishYear</label>
                  <input name="publishYear" type="text" className="form-control" id="exampleInputPassword1"/>
              </div>
  
              <div className="mb-3">
                  <label className="form-label">price</label>
                  <input name="price" type="text" className="form-control" id="exampleInputPassword1"/>
              </div>
              
              <button name="add" type="submit" className="btn btn-primary" >Submit</button>
          </form>
          </div>

          
      </>
    )
}

export default Edit
