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
          { name: "Set of 3 Metal Arches", image: "/img/metalarches.jpg", price: "$70", description: "" },
          { name: "Ribbed Wooden Backdrop", image: "/img/ribbedwoodenbackdrop.jpg", price: "$150", description: "" },
          { name: "Circle Backdrop", image: "/img/circlebackdrop.jpg", price: "$100", description: "" },
          { name: "Box Hedges", image: "/img/boxhedges.jpeg", price: "$100 each or $150 pair", description: "" },
          { name: "Green Grass Backdrop", image: "/img/greengrassbackdrop.jpg", price: "$120", description: "" },
          { name: "Mockup of Installation", image: "/img/mockup.jpg", price: "$70 will be added to the invoice", description: "" }
        ]
      },
      {
        title: "Balloons",
        items: [
          { name: "Birthday Number Stack", image: "/img/birthdaystacknumbersm.jpg", price: "$40", description: "" },
          { name: "Balloon Stack 40 in Number", image: "/img/birthday40.jpg", price: "$30", description: "" },
          { name: "Grab and Go Garland", image: "/img/grabandgogarland.jpg", price: "$25", description: "This is a more cost effective option, this garland will come pre inflated. This is PICKUP ONLY In the city of Northridge or San Fernando.10 ft garland 2-3 colors $300 15 ft garland 3-4 colors $350 20 ft garland 3-5 colors $400 Mini balloons additional $50" },
          { name: "DIY Balloon Kit", image: "/img/diyballoonkit.jpg", price: "$50", description: "The DIY Balloon Kit is a cost-effective and reliable way to create a stunning garland for your next party. It includes balloons, ribbon, hook adhesives, rubber bands, and an instruction card. The kit comes in 5 ft or 10 ft garland options and 3-4 colors per kit, starting at $50. The kit is easy to follow and comes with step-by-step instructions. With its high-quality materials, it ensures your guests have a great time at your next party." }
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
          { name: "Money Bouquet", image: "/img/moneybouquet.jpg", price: "$250", description: "" },
          { name: "Wildflowers", image: "/img/wildflower.jpg", price: "Prices vary", description: "" },
          { name: "Flower Additions", image: "/img/roses.jpg", price: "Prices vary", description: "" }
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
          { name: "7 ft Bear", image: "/img/7ftbear.jpg", price: "$300", description: "" },
          { name: "Custom Snack Wraps", image: "/img/caprisun.png", price: "$15 per pack", description: "" }
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
                    <div key={item.name} className="card bg-base-100 shadow-xl flex flex-col">
                      <figure>
                        <Image src={item.image} alt={item.name} width={400} height={250} className="object-cover" />
                      </figure>
                      <div className="card-body p-4 flex flex-col flex-grow">
                        <div className="flex flex-col flex-grow">
                          <h2 className="card-title text-sm">{item.name}</h2>
                          <p className="flex-grow">{item.description}</p>
                        </div>
                        <div className="card-actions mt-4 flex justify-between items-center">
                          <p className="text-lg font-bold">{item.price}</p>
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
