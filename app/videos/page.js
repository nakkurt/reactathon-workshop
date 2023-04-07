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
      const playbackId = video.playback_ids[0].id
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
        id: video.id,
        playbackId,
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
        <ul style={{ listStyle: 'none', padding: 20 }}>
          {videos.map(({ id, title, description, playbackId }) => {
            return (
              <li
                key={id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 10,
                  border: '1px solid black',
                }}
              >
                <img
                  src={`https://image.mux.com/${playbackId}/thumbnail.jpg?width=640&height=360`}
                  width={160}
                  height={90}
                  style={{ objectFit: 'contain' }}
                />
                <h3 style={{ marginLeft: 10 }}>
                  {title} - {description}
                </h3>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
