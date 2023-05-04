"use client"

import { useEffect, useState } from "react";
import AboutVideo from "./AboutVideo";

function Videos() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function fetchAssets() {
      const response = await fetch('/api/videos')
      if (!response.ok) {
        throw new Error("Network response was not OK:" + response.statusText)
      }
      const data = await response.json()
      setAssets(data)
    }
    fetchAssets()
    },[])
    return (
      <>
        <h1>All Videos</h1>
        <ul className="videos">
          {
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
          }
        </ul>
      </>
    )
  }

export default Videos