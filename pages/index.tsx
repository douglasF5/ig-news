import Head from 'next/head'
import Image from 'next/image'
import styles from '../src/styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | IgNews</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Hello bitches!</h1>
        </main>
      </div>
    </>
  )
}
