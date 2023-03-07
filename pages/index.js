import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../globals/Layout.js';

const inter = Inter({ subsets: ['latin'] })

const pageCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function Home() {
  return (
    <Layout>
      <div style={pageCenter}>
        <h1>This is my home page</h1>
      </div>
    </Layout>
  )
}
