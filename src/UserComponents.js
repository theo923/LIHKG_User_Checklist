import React from 'react'
import { UserCard } from './UserCard'

const UserData = () => {
    const url = 'https://eat-play.github.io/on9_list/LIHKG-Label-List-power_off-1886.json'
    return fetch(url)
        .then(response => response.json())
        .then(userData => {
          return userData.data
        })
  }

export const UserComponents = ({ keyword }) => {
    const [users, setUsers] = React.useState([])
    React.useEffect(()=>{
      UserData().then(user => {
        setUsers(Object.entries(user))
      })
    }, [])
    
    return (
        <div className='container mx-auto 2xl:px-62 xl:px-64 lg:px-50 md:px-20 px-5 text-center'>
            <div className='grid h-full w-full grid-cols-1 md:grid-cols-3 lg:gap-10 md:gap-6 gap-2' >
            {users.filter(ID => ID[0].includes(keyword)).map((id, idx, arr) => <UserCard key={idx} id={id} idx={idx} arr={arr}/>)}
            </div>
        </div>
    )
}