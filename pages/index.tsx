import Head from 'next/head'
import MainContent from '@components/main-content/main-content'
import Sidebar from '@components/sidebar/sidebar'
import Footer from '@components/footer/footer'
import { workHistory, profile, social } from '@content/index'
import { contentProps } from '../types'

function Home({ workHistory, profile, social }: contentProps) {
  return (
    <>
      <Head>
        <title>Sam Roebuck</title>
        <meta name="description" content="Personal site for Sam Roebuck" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="antialiased bg-back leading-normal font-text text-front">
        <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-10 mb-8 h-full">
          <Sidebar social={social} town={profile.town} company={profile.company} />
          <MainContent about={profile.about} workHistory={workHistory} />
        </div>
        <Footer />
      </main>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      workHistory, profile, social
    },
  }
}

export default Home