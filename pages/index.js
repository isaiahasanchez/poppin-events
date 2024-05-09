import React, { useState } from 'react';
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import ServicesProvided from '../components/servicesProvided';
import RentalItems from '../components/rentalItems';

const Home = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero openPopup={() => { console.log("Popup should open now"); setPopupOpen(true); }} />

      <SectionTitle
        pretitle="Poppin Events Benefits"
        title="Why you should plan your next party with us today!">
       Transform your next event with 'Poppin Events With J', where creativity meets elegance to create unforgettable moments that delight and inspire.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Packages Offered"
        title="Here are three great packages to consider today!">
       These packages come with everything pictured and listed.
      </SectionTitle>
      <ServicesProvided />
      <SectionTitle
        pretitle="Rental"
        title="Here are more items available to add to your package!">
       These can be added to any package or as a standalone.
      </SectionTitle>
      <RentalItems />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget open={isPopupOpen} setOpen={setPopupOpen} />
    </>
  );
}

export default Home;