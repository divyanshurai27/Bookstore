import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

import Contacts from '../contacts/Contacts'

function Home() {
  return (

    <>
    <div>
        
     <Navbar/>  
     <Banner/>
     <Freebook/>
     <Contacts/>
     <Footer/> 



    </div>
    </>
  )
}

export default Home