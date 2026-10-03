import Head from "next/head"
import { useEffect, useState } from "react"
import AesCard from "../cards/aes"
import CompareCard from "../cards/compare"
import FingerprintCard from "../cards/fingerprint"
import WebProofCard from "../cards/webproof"
import Bench from "../components/Bench"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import TrustLayers from "../components/TrustLayers"
import { CardId, Measurement } from "../components/proof"
import { ready } from "../zk-build"

export default function Home() {
  const [measured, setMeasured] = useState<Partial<Record<CardId, Measurement>>>({})
  const measure = (card: CardId) => (m: Measurement) => setMeasured((all) => ({ ...all, [card]: m }))
  useEffect(() => {
    ready()
  }, [])

  return (
    <>
      <Head>
        <title>zkPass · VOLE-in-the-Head</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Zero-knowledge proofs of HTTPS sessions, proven and verified in your browser.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <main>
        <section id='cards'>
          <div className='wrap'>
            <h2>See it work</h2>
            <p className='sub slogan'>Prove it. Verify it. Then try to break it.</p>
            <p className='sub'>
              k is the one dial in the proof system: a larger k means fewer, deeper commitment trees, so a smaller proof, paid for with more proving time (about
              2–3× here, measured below). Security is identical for both settings.
            </p>
            <div className='cards'>
              <CompareCard onMeasured={measure("compare")} />
              <AesCard onMeasured={measure("aes")} />
              <FingerprintCard onMeasured={measure("fingerprint")} />
              <WebProofCard onMeasured={measure("webproof")} />
            </div>
          </div>
        </section>
        <Bench measured={measured} />
        <TrustLayers />
      </main>
      <Footer />
    </>
  )
}
