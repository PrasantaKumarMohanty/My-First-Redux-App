import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Createinmodal from './Createinmodal';
import Modaledit from './Modaledit';
import { useGetAllPostQuery } from '../services/post';

// import {useSelector, useDispatch} from "react-redux";


export const Showlist = () => {

    const responseInfo = useGetAllPostQuery()

    // console.log("Response Information: ", responseInfo)
    // console.log("Data: ", responseInfo.data)
    // console.log("Success: ", responseInfo.isSuccess)

    if (responseInfo.isLoading) return <div>Loading....</div>
    if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>


    // const state = useSelector(state => state.BookReducers);
    // console.log(state)


    // const [books, setBooks] = useState([]);

    // const [filterdata, setFilterdata] = useState()

    // const getBook = async() =>{
    //     const response = await axios.get('http://localhost:4000/book/');
    //     const data = await response.data;
    //     // console.log(data)
    //     setBooks(data);

    //     // console.log(data.bookName)
    // }


    // const selectBook = (_id) =>{
    //     const filterdata = books.find(x => x._id === _id);
        
    //     setFilterdata(filterdata)
    // }
    
    // // console.log(filterdata)
    // useEffect(() => {
    //     getBook();
        
    // }, []);
    

    return (
        <>
        {/* <Createinmodal/> */}
        <center><h3>List of all Books</h3></center>
        <table className='table'>
        <thead>
            <tr>
            
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">publishers</th>
            <th scope="col">publishYear</th>
            <th scope="col">price</th>
            <th scope="col">Operations</th>

            </tr>
        </thead>
        <tbody>
        {
            responseInfo.data.map((curElem) =>{
                return(
                    <tr>
                    <td>{curElem.bookName}</td>
                    <td>{curElem.author}</td>
                    <td>{curElem.publishers}</td>
                    <td>{curElem.publishYear}</td>
                    <td>{curElem.price}</td>
                    {/* <td> <Link to="" onClick={()=>selectBook(curElem._id)} className="fas fa-edit" data-bs-toggle="modal" data-bs-target="#exampleModal1"></Link></td> */}
                    <td> <Link to="" className="fas fa-edit" data-bs-toggle="modal" data-bs-target="#exampleModal1"></Link></td>
                    <td> <Link to=""className="fas fa-trash-alt" ></Link></td>
                    </tr>
                )
            })
        }
            
        </tbody>
        </table>

        {/* <Modaledit title={filterdata}/> */}

        
        </>
    )
}
