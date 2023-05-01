'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Upload() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    router.push(
      `/upload/upload?title=${title}&description=${description}&uploaded_at=${Date.now()}`,
    )
  }

  return (
    <>
      <Link href="/" className="link-home">
        Home
      </Link>
      <h1>Video Upload</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input
            name="title"
            type="text"
            placeholder="Enter video title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            placeholder="Enter video description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit" disabled={!title.trim() || !description.trim()}>
          Create Upload URL
        </button>
      </form>
    </>
  )
}
