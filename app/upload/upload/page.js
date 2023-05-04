import Link from 'next/link'
import MuxUploader from '../../components/MuxUploader'
import { Video } from '../../../server-lib/Mux'
import { cache } from 'react'

export const revalidate = 3600 // revalidate every hour

const getUploadData = cache(async (searchParams) => {
  const upload = await Video.Uploads.create({
    cors_origin: '*',
    new_asset_settings: {
      playback_policy: 'public',
      passthrough: JSON.stringify(searchParams),
    },
  })
  return upload
})

export default async function Upload({ searchParams }) {
  const upload = await getUploadData(searchParams)
  return (
    <>
      <Link href="/" className="link-home">
        Home
      </Link>
      <h1>Upload a video</h1>

      <MuxUploader endpoint={upload.url} />
    </>
  )
}
