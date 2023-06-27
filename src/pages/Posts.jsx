import { Outlet, Link } from "react-router-dom";
import React from 'react'

function Posts() {
  return (
    <>
   <div>Posts</div>
   <Link to={`/works`}>Works</Link>

    </>
  )
}

export default Posts