import Link from 'next/link'
import { listAssets } from "../../server-lib/Mux.js";
import AboutVideo from "./AboutVideo.js";

async function Videos() {
  // NO LONGER NEEDED, BECAUSE THIS PAGE IS NOW SERVER-SIDE RENDERED. 
  // const [assets, setAssets] = useState([]);
  // useEffect(() => {
    // async function fetchAssets() {
    //   const response = await fetch('/api/videos')
    //   if (!response.ok) {
    //     throw new Error("Network response was not OK:" + response.statusText)
    //   }
    //   const data = await response.json()
    //   setAssets(data)
    // }
    // fetchAssets()
    // },[])

    const assets = await listAssets()

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
                  <Link href={`/videos/${playbackId}`}>
                    <img
                      src={`https://image.mux.com/${playbackId}/thumbnail.jpg?width=640&height=360`}
                      width={160}
                      height={90}
                    />
                    <AboutVideo asset={asset} />
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </>
    )
  }

export default Videos