import { fromUnixTime, format } from 'date-fns'

const AboutVideo = ({ asset }) => {
  console.log(asset)
  let title = 'Default Title'
  let description = 'Default description'
  let datetime = new Date()

  if (asset?.passthrough) {
    const passthrough = JSON.parse(asset.passthrough)
    if (passthrough.title) {
      title = passthrough.title
    }
    if (passthrough.description) {
      description = passthrough.description
    }
    if (passthrough.uploaded_at) {
      datetime = fromUnixTime(passthrough.uploaded_at / 1000)
    }
  }

  return (
    <div className="about">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <i>{format(datetime, 'MM/dd/yyyy hh:mm')}</i>
      </p>
    </div>
  )
}

export default AboutVideo