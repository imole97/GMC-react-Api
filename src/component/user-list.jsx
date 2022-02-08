import React, {useState, useEffect} from "react";
import axios from 'axios'

export const UserList = () =>{
    const [users, setUsers] = useState ([])
    const [errorMsg, setErrorMsg] = useState ('')

    const getUser = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        
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
            {
                users.map(user => 
                    // <div >
                        <ul key={user.id} className='list'>
                            <li>{user.name}</li>
                        </ul>
                        
                    // </div>
                )
            }
        </>
    )
}