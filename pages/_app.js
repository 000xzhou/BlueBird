import '../styles/globals.css'
import Layout from '../components/layout/Layout'

// want to add navbar and sidebar here so i don't need to keep adding nav and side bar in every page

function MyApp({ Component, pageProps }) {
  return (
    <div className='container' >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
