import React from 'react'
import {Helmet} from "react-helmet";
import Header from '../../components/Header';
import AboutUsSection from '../../components/AboutUsSection';
import TeamSection from '../../components/TeamSection';
import OurServices from '../../components/OurServices';
import OurProductSection from '../../components/OurProductSection';

function HomePage() {
  return (
    <div>
       <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Home</title>
</Helmet>
<Header/>
<OurProductSection/>
<AboutUsSection/>
<TeamSection/>
<OurServices/>
   </>
    </div>
  )
}

export default HomePage
