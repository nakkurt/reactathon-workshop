'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import AboutVideo from './AboutVideo.js'

export default function VideosPage() {
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAssets() {
      const response = await fetch('/api/videos')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setAssets(data)
      setLoading(false)
    }
    fetchAssets()
  }, [])

  return (
    <>
      <Link href="/" className="link-home">
        Home
      </Link>
      <h1>All Videos</h1>
      <ul className="videos">
        {loading ? (
          <div>Loading...</div>
        ) : (
          assets.map((asset) => {
            const assetId = asset.id
            const playbackId = asset.playback_ids[0].id
            return (
              <li key={assetId}>
                <img
                  src={`https://image.mux.com/${playbackId}/thumbnail.jpg?width=640&height=360`}
                  width={160}
                  height={90}
                />
                <AboutVideo asset={asset} />
              </li>
            )
          })
        )}
      </ul>
    </>
  )
}
