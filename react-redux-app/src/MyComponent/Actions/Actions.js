export const startlogin= () =>{
    return{
        type: "START_LOGIN"
    }
} 

export const successlogin= (book) =>{
    return{
        type: "SUCCESS_LOGIN",
        payload: book
    }
} 

export const failedlogin= (error) =>{
    return{
        type: "FAILED_LOGIN",
        payload: error
    }
} 