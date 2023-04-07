'use client'

import { useMemo } from 'react'
import { useQuery } from 'react-query'

export default function VideosPage() {
  const { isLoading, isError, data, error } = useQuery('videos', async () => {
    const response = await fetch('/api/videos')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })

  const videos = useMemo(() => {
    return data?.map((video) => {
      let title = 'Default Title'
      let description = 'Default description'
      if (video.passthrough) {
        const passthrough = JSON.parse(video.passthrough)
        if (passthrough.title) {
          title = passthrough.title
        }
        if (passthrough.description) {
          description = passthrough.description
        }
      }
      return {
        ...video,
        title,
        description,
      }
    })
  }, [data])

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      <h1>Videos page</h1>
      <div>
        <ul>
          {videos.map(({ id, title, description }) => {
            return (
              <li key={id}>
                {title} - {description}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
