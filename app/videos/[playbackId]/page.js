import { Suspense } from 'react'
import Link from 'next/link'

import MuxPlayer from '../../components/MuxPlayer'
import AboutVideoForPlaybackId from './AboutVideoForPlaybackId'
import CommentsList from './CommentsList'

const Video = async ({ params }) => {
  const { playbackId } = params

  return (
    <>
      <Link href="/" className="link-home">
        Home
      </Link>
      <div className="player-wrapper">
        <MuxPlayer
          streamType="on-demand"
          playbackId={playbackId}
          metadata={{
            video_id: 'video-id-54321',
            video_title: 'Test video title',
            viewer_user_id: 'user-id-007',
          }}
        />
      </div>
      <Suspense fallback={<p>loading...</p>}>
        <AboutVideoForPlaybackId playbackId={playbackId} />
      </Suspense>
      <h3>Comments</h3>
      <Suspense fallback={<p>loading...</p>}>
        <CommentsList playbackId={playbackId} />
      </Suspense>
    </>
  )
}

export default Video
