import React, { useEffect, useState } from "react"

function usePosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      })
  }, [])

  return posts
}

export default function Example() {
  const posts = usePosts()

  return (
    <div>
      <h1>Cool app</h1>
      {posts.length > 0 ? (
        posts.map(item => (
          <li>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))
      ) : (
        <h1>Loading posts...</h1>
      )}
    </div>
  )
}

