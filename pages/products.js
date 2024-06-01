import React, { useState } from 'react';
import Image from "next/image";
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';
import Footer from '../components/footer';
import PopupWidget from '../components/popupWidget';


const sections = [
  {
    pretitle: "Decoration",
    title: "Explore Our Unique Decorative Options",
    description: "From elegant arches to vibrant balloons, perfect for any event!",
    categories: [
      {
        title: "Backdrops",
        items: [
          { name: "Set of 3 Metal Arches", image: "/img/metalarches.jpg", price: "$70" },
          { name: "Ribbed Wooden Backdrop", image: "/img/ribbedwoodenbackdrop.jpg", price: "$150" },
          { name: "Circle Backdrop", image: "/img/circlebackdrop.jpg", price: "$100" },
          { name: "Box Hedges", image: "/img/boxhedges.jpeg", price: "$100 each or $150 pair" },
          { name: "Green Grass Backdrop", image: "/img/greengrassbackdrop.jpg", price: "$120" },
          { name: "Mockup of Installation", image: "/img/mockup.jpg", price: "$70 will be added to the invoice" }
        ]
      },
      {
        title: "Balloons",
        items: [
          { name: "Birthday Number Stack", image: "/img/birthdaystacknumbersm.jpg", price: "$40" },
          { name: "Balloon Stack 40 in Number", image: "/img/birthday40.jpg", price: "$30" },
          { name: "Grab and Go Garland", image: "/img/grabandgogarland.jpg", price: "$25" },
          { name: "DIY Balloon Kit", image: "/img/diyballoonkit.jpg", price: "$50" }
        ]
      }
    ]
  },
  {
    pretitle: "Flowers",
    title: "Beautiful Floral Arrangements",
    description: "Customize your event with our stunning flower selections.",
    categories: [
      {
        title: "Ramo Buchon",
        items: [
          { name: "Money Bouquet", image: "/img/moneybouquet.jpg", price: "$250" },
          { name: "Wildflowers", image: "/img/wildflower.jpg", price: "Prices vary" },
          { name: "Flower Additions", image: "/img/roses.jpg", price: "Prices vary" }
        ]
      }
    ]
  },
  {
    pretitle: "Miscellaneous",
    title: "Everything Else You Need",
    description: "Unique extras to make your event even more special.",
    categories: [
      {
        title: "Special Extras",
        items: [
          { name: "7 ft Bear", image: "/img/7ftbear.jpg", price: "$300" },
          { name: "Custom Snack Wraps", image: "/img/caprisun.png", price: "$15 per pack" }
        ]
      }
    ]
  }
];

const Products = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <Navbar openPopup={() => setPopupOpen(!isPopupOpen)} />
      <div className="container mx-auto px-4 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <SectionTitle pretitle={section.pretitle} title={section.title}>
              {section.description}
            </SectionTitle>
            {section.categories.map((category, idx) => (
              <div key={idx} className="mt-6">
                <SectionTitle pretitle={category.title}>
                some description
            </SectionTitle>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.items.map(item => (
                    <div key={item.name} className="card bg-base-100 shadow-xl">
                      <figure>
                        <Image src={item.image} alt={item.name} width={400} height={250} />
                      </figure>
                      <div className="card-body p-2">
                        <h2 className="card-title text-sm">{item.name}</h2>
                        <div className="card-actions flex-col mt-2">
                          <p className="text-sm font-bold">{item.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
      <PopupWidget open={isPopupOpen} setOpen={setPopupOpen} />
    </>
  );
}

export default Products;
