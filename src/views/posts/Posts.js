import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Posts.css"
import Post from "../../components/posts/post/Post"

const Posts = () => {
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        getPosts()
    },[])
    const BASE_URL='https://dummyapi.io/data/api/post?limit=10';
    const APP_ID='60be1637031284be4523f7f1';
    const getPosts =  async () => {
        axios.get(`${BASE_URL}/user`,{ headers: {  'app-id':  APP_ID } })
        .then(({data}) => {
            setPosts(data.data)
            console.log(data.data)
        }).catch(console.error)
    }
    return (
        <div className="postsContainer">
            {
                posts.map(post=><Post post={post} key={post.id}/>)
            }
        </div>
    )
}

export default Posts
