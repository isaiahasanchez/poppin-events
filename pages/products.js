import React from 'react';
import Image from "next/image";
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';


const sections = [
  {
    pretitle: "Decoration",
    title: "Explore Our Unique Decorative Options",
    description: "From elegant arches to vibrant balloons, perfect for any event!",
    categories: [
      {
        title: "Backdrop",
        items: [
          { name: "Set of 3 Metal Arches", image: "/img/metalarches.jpg", price: "$70" },
          { name: "Ribbed Wooden Backdrop", image: "/img/ribbedwoodenbackdrop.jpg", price: "$150" },
          { name: "Circle Backdrop", image: "/img/circlebackdrop.jpg", price: "$100" },
          { name: "Box Hedges", image: "/img/boxhedges.jpeg", price: "$100 each or $150 pair" },
          { name: "Green Grass Backdrop", image: "/img/greengrassbackdrop.jpg", price: "$120" }
        ]
      },
      {
        title: "Balloon",
        items: [
          { name: "Birthday Number Stack", image: "/img/birthday-stack.jpeg", price: "$40" },
          { name: "Balloon Stack 40 in Number", image: "/img/balloon-stack.jpeg", price: "$30" },
          { name: "Grab and Go Garland", image: "/img/garland.jpeg", price: "$25" },
          { name: "DIY Balloon Kit", image: "/img/diy-kit.jpeg", price: "$50" }
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
          { name: "Money Bouquet", image: "/img/money-bouquet.jpeg", price: "$250" },
          { name: "Flower Additions", image: "/img/flower-addons.jpeg", price: "Prices vary" }
        ]
      }
    ]
  },
  {
    pretitle: "Entertainment",
    title: "Fun and Excitement",
    description: "Engaging entertainment options to delight your guests.",
    categories: []
  },
  {
    pretitle: "Miscellaneous",
    title: "Everything Else You Need",
    description: "Unique extras to make your event even more special.",
    categories: [
      {
        title: "Special Extras",
        items: [
          { name: "7 ft Bear", image: "/img/large-bear.jpeg", price: "$300" },
          { name: "Custom Snack Wraps", image: "/img/snack-wraps.jpeg", price: "$15 per pack" }
        ]
      }
    ]
  }
];

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <SectionTitle pretitle={section.pretitle} title={section.title}>
              {section.description}
            </SectionTitle>
            {section.categories.map((category, idx) => (
              <div key={idx} className="mt-6">
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    </>
  );
}

export default Products;
