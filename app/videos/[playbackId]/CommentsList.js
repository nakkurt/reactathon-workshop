import { cache } from 'react'
import { fromUnixTime, format } from 'date-fns'
import ClickToLikeContainer from './ClickToLikeContainer'

const getComments = cache(async (playbackId) => {
  const response = await fetch(
    `https://reactathon-workshop-functions.vercel.app/api/comments/${playbackId}`,
  )
  return await response.json()
})

async function CommentsList({ playbackId }) {
  const data = await getComments(playbackId)
  return (
    <ul>
      {data.comments.map((comment) => {
        return (
          <li key={comment.id}>
            <ClickToLikeContainer>
              <p>{comment.content}</p>
              <p>
                <i>
                  {format(fromUnixTime(comment.updated_at), 'MM/dd/yyyy hh:mm')}
                </i>
              </p>
            </ClickToLikeContainer>
          </li>
        )
      })}
    </ul>
  )
}

export default CommentsList
