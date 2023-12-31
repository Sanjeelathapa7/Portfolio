import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import Head from 'next/head';

//declaring the variable 
const montserrat= Montserrat({
  subsets:["latin"],
  variable:"--font-mont"
})
//here app use the components to initialize the pages 
//component page is active page whenever i navigate between the routes this component will change to
//the new page
export default function getStaticPaths({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
           <link rel="icon" href="/favicon.ico" />
     </Head>
     <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
      <Navbar/>
     <Component {...pageProps} />  
     {/* whatever i pass here it will be recieved by the new page  */}
     <Footer/>
     </main>
     </>
  );

}