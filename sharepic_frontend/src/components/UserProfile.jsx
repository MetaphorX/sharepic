import React, {useState, useEffect} from 'react'
import {AiOutlineLogout} from 'react-icons/ai'
import {useParams, useNavigate} from 'react-router-dom'
import {GoogleLogout} from 'react-google-login'
import {userCreatedPinsQuery, userQuery, userSavedPinsQuery} from '../utils/data'
import {client} from '../client'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'


const UserProfile = () => {
  const [user, setUser] = useState(null)
  const [pins, setPins] = useState(null)
  const [text, setText] = useState('created')
  const [activeBtn, setActiveBtn] = useState('created')
  const navigate = useNavigate()
  const {userId} = useParams()

  useEffect(()=>{
    const query = userQuery(userId)

    client.fetch(query)
      .then((data) =>{
        setUser(data[0])
      })
  }, [userId])

  if(!user){
    return <Spinner message="Loading Profile" />
  }
  return (
    <div>UserProfile</div>
  )
}

export default UserProfile