import { NextResponse } from 'next/server'
import Mux from '@mux/mux-node'

// Assumes you have your access token set in environment variables:
// Access Token ID: process.env.MUX_TOKEN_ID
// Access Token Secret: process.env.MUX_TOKEN_SECRET
const { Video } = new Mux()

export async function GET(req) {
  const videoAssets = await Video.Assets.list()

  const videosWithPlaybackInfo = videoAssets.map((video) => {
    const playbackId = video.playback_ids[0].id

    const thumbnailToken = Mux.JWT.signPlaybackId(playbackId, {
      type: 'thumbnail',
    })
    video.thumbnailUrl = `https://image.mux.com/${playbackId}/thumbnail.jpg?token=${thumbnailToken}`

    return video
  })

  return NextResponse.json(videosWithPlaybackInfo)
}
