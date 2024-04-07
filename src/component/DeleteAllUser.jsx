import React from 'react'
import { useDispatch } from 'react-redux';
// import { clearUser } from '../store/slices/UserSlice';
import styled from 'styled-components';
import { clearAllUser } from "../store/actions";


const DeleteAllUser = () => {
  const dispatch=useDispatch()
  const deleteUser=()=>{
    dispatch(clearAllUser());
  }
  return <Wrapper>
    <button className='btn clear-btn' onClick={deleteUser}>Clear User</button>
  </Wrapper>
}
const Wrapper=styled.section`
.clear-btn{
  text-transform:capitalize;
  background-color:#db338a;
  margin-top:2rem;
}`
export default DeleteAllUser
