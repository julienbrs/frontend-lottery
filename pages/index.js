import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import ManualHeader from "../components/ManualHeader"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Web3 Lottery</title>
                <meta name="description" content="A Lottery running on Web3!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ManualHeader />

            {/* Header with a connecting button for the wallet */}
        </div>
    )
}
