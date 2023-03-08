import React from 'react'
import Layout from '../globals/Layout.js';
import Link from 'next/link'

const pageCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '120vh'
};

const Search = () => {
  return (
    <Layout>
      <Link href='/'> Back to Home Page </Link>
      <div style={pageCenter}>
        <h1>This is my Search page</h1>
      </div>
    </Layout>
  )
}

export default Search
