import React, {useState, useEffect} from "react";
import axios from 'axios'

export const UserList = () =>{
    const [users, setUsers] = useState ([])
    const [errorMsg, setErrorMsg] = useState ('')

    const getUser = async () => {
       await axios.get('https://jsonplaceholder.typicode.com/users')
        
        .then(response => {
            setUsers(response.data)
            console.log(users)
        })

        .catch(error => {
            setErrorMsg(error.message)
            console.log(errorMsg)
        })
    }

    useEffect (() => {
        getUser()
    },[])

    return (
        <>
           <ul className='list'>
            {
                users.map(user => 
                    // <div >
                     
                            <li  key={user.id}>{user.name}</li>
                       
                        
                    // </div>
                )
            }
            </ul>
        </>
    )
}