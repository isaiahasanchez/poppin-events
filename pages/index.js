import React, { useState } from 'react';
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne } from "../components/data";
import InstagramEmbed from '../components/InstagramEmbed';
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import PackagesProvided from '../components/PackagesProvided';
import RentalItems from '../components/rentalItems';


const Home = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Poppin Events with J - Event Planning Company</title>
        <meta
          name="description"
          content="Poppin Events with J - Event Planning Company"
        />
        <link rel="icon" href="/img/poppin-logo.png" />
      </Head>

      <Navbar openPopup={() => setPopupOpen(!isPopupOpen)} currentPage="home" />
      <Hero openPopup={() => setPopupOpen(!isPopupOpen)} /> {/* This button can open the popup */}

      <Benefits data={benefitOne} />
      <SectionTitle
        id="packages"
        pretitle="Packages Offered"
        title="Here are three great packages to consider today!">
       These packages come with everything pictured and listed.
      </SectionTitle>
      <PackagesProvided />
      <SectionTitle
        pretitle="Rental"
        title="Here are more items available to add to your package!">
       These can be added to any package or as a standalone.
      </SectionTitle>
      <RentalItems />
      <SectionTitle
        pretitle="Socials"
        title="See us on Instagram!">
      </SectionTitle>
      <InstagramEmbed />

      <SectionTitle id="faq" pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq id="faq"/>
      <Cta openPopup={() => setPopupOpen(!isPopupOpen)}/>
      <Footer />
      <PopupWidget open={isPopupOpen} setOpen={setPopupOpen} />
    </>
  );
}

export default Home;
