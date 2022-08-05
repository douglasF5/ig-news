import Head from 'next/head'
import { Header } from '../src/components/Header';
import s from '../src/styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | IgNews</title>
      </Head>
      <Header />
      {/* <div className={s.container}>
        <main className={s.main}>
          <h1>Hello bitches!</h1>
        </main>
      </div> */}
    </>
  )
}
