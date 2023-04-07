import { NextResponse } from 'next/server'
import Mux from '@mux/mux-node'

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID,
  process.env.MUX_TOKEN_SECRET
)

export async function GET(req) {
  const videos = await Video.Assets.list()

  return NextResponse.json(videos)
}
