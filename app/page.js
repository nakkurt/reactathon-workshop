import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Mux Reactathon Workshop</h1>

      <Link href="/upload">Upload</Link>
      <br />
      <Link href="/videos">All videos</Link>
      <br />
      <Link href="/videos/yb2L3z3Z4IKQH02HYkf9xPToVYkOC85WA">Single video</Link>

      <hr />
    </>
  )
}

export default Home
