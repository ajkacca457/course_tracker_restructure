import React, { useEffect } from 'react'
import { registerUser } from '../features/user/userSlice'
import {useDispatch} from "react-redux"

const CourseList = () => {

  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(registerUser({username:"proper12",email:"ajk123@gmail.com",password:"hiaviitsme"}))
  },[])
  return (
    <div>CourseList</div>
  )
}

export default CourseList