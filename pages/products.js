import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

const balloonIcon = (
  <svg
    width="16"
    height="16"
    viewBox="-14 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2 inline-block"
  >
    <g fill="none" fillRule="evenodd" stroke="#6B6C6E" strokeWidth="2">
      <path d="M15,43 C15,43 11,47 15,47 L19,47 C23,47 19,43 19,43" />
      <path d="M17,43 C18,43 35,48 19,55 C14.4,57 14,62 14,62" />
      <path d="M34,15 C34,28 25.3,43 17,43 C8.7,43 0,27 0,15 C0,6.2 8.7,0 17,0 C25.3,0 34,6.2 34,15 L34,15 Z" />
      <path d="M22,6 C26.4,7.7 30,11.6 30,16.5" />
    </g>
  </svg>
);

const sections = [
  {
    pretitle: "Backdrops",
    title: "Stunning Backdrops for Your Event",
    description: "Enhance your event with our beautiful and customizable backdrops.",
    items: [
      {
        name: "Set of 3 Metal Arches",
        image: "/img/metalarches.jpg",
        price: "$70",
        description: "This set of three metal arches is designed for convenient transport and easy assembly, allowing you to customize them to fit your space.",
      },
      {
        name: "Ribbed Wooden Backdrop",
        image: "/img/ribbedwoodenbackdrop.jpg",
        price: "$150",
        description: "",
      },
      {
        name: "Circle Backdrop",
        image: "/img/circlebackdrop.jpg",
        price: "$100",
        description: "",
      },
      {
        name: "Box Hedges",
        image: "/img/boxhedges.jpeg",
        price: "$100 each or $150 pair",
        description: "",
      },
      {
        name: "Green Grass Backdrop",
        image: "/img/greengrassbackdrop.jpg",
        price: "$120",
        description: "",
      },
      {
        name: "Mockup of Installation",
        image: "/img/mockup.jpg",
        price: "$70",
        description: "A professional mockup can be added to any order for $70.",
      },
      {
        name: "Tropical Backdrop",
        image: "/img/tropical-backdrop.jpg",
        price: "$200",
        description: "$50 delivery and setup fee.",
      },
      {
        name: "Wooden White Backdrop",
        image: "/img/wooden-white-arch.jpg",
        price: "$150",
        description: "$150 daily rental $50 delivery & setup fee.",
      },
    ],
  },
  {
    pretitle: "Balloons",
    title: "Colorful Balloons for Every Occasion",
    description: "Make your event pop with our vibrant balloon decorations.",
    items: [
      {
        name: "Birthday Number Stack",
        image: "/img/birthdaystacknumbersm.jpg",
        price: "$40",
        description: "",
      },
      {
        name: "Grab and Go Garland",
        image: "/img/grabandgogarland.jpg",
        price: "$25",
        description: "This is a more cost-effective option, this garland will come pre-inflated. This is PICKUP ONLY in the city of Northridge or San Fernando.",
        options: [
          "10 ft garland 2-3 colors $300",
          "15 ft garland 3-4 colors $350",
          "20 ft garland 3-5 colors $400",
          "Mini balloons additional $50",
        ],
      },
      {
        name: "DIY Balloon Kit",
        image: "/img/diyballoonkit.jpg",
        price: "$50",
        description: "The DIY Balloon Kit is a cost-effective and reliable way to create a stunning garland for your next party. It includes balloons, ribbon, hook adhesives, rubber bands, and an instruction card. The kit comes in 5 ft or 10 ft garland options and 3-4 colors per kit, starting at $50. The kit is easy to follow and comes with step-by-step instructions. With its high-quality materials, it ensures your guests have a great time at your next party.",
      },
    ],
  },
  {
    pretitle: "Flowers",
    title: "Beautiful Floral Arrangements",
    description: "Customize your event with our stunning flower selections.",
    items: [
      {
        name: "Money Bouquet",
        image: "/img/moneybouquet.jpg",
        price: "Starts at $60",
        description: "Pricing for Money bouquets include the gift amount + ",
        options: [
          "40 bills $60 service fee",
          "30 bills $50 service fee",
          "20 bills $40 service fee",
          "$2.50 per flower added to money bouquet",
        ],
      },
      {
        name: "Wildflowers",
        image: "/img/wildflower.jpg",
        price: "$60",
        description: "All Wildflowers come with wrapping and ribbon color of choice. Wildflower pricing:",
        options: ["25 for $60"],
      },
      {
        name: "Ramo Buchon",
        image: "/img/roses.jpg",
        price: "Starts at $72",
        description: "All Buchons come with wrapping and ribbon color of choice. Ramo buchon pricing:",
        options: [
          "50 for $150",
          "48 for $144",
          "36 for $108",
          "24 for $72",
        ],
      },
      {
        name: "Flower Additions",
        image: "/img/roses.jpg",
        price: "$10",
        description: "Add any of these items to your order:",
        options: [
          "$10 Glitter flowers",
          "$10 Custom Ribbon with writing",
          "$15-$25 Stuffed Animals",
          "$10 Custom flower toppers",
          "$10 Crystal Diamonds",
          "$10 Gold or Silver Tiara",
          "$10 Babies breath"
        ]
      }
    ],
  },
  {
    pretitle: "Miscellaneous",
    title: "Everything Else You Need",
    description: "Unique extras to make your event even more special.",
    items: [
      {
        name: "7 ft Bear",
        image: "/img/7ftbear.jpg",
        price: "$300",
        description: "",
      },
      {
        name: "Custom Snack Wraps",
        image: "/img/caprisun.png",
        price: "$15 per pack",
        description: "",
      },
      {
        name: "Cocktail Table",
        image: "/img/cocktail-table.JPG",
        price: "$20",
        description: "$20 per table and $25 delivery and pickup fee.",
      },
    ],
  },
];


const Products = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    document.getElementById("item_modal").showModal();
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.getElementById("item_modal").close();
  };

  return (
<>
  <Navbar openPopup={() => setPopupOpen(!isPopupOpen)} />
  <div className="container mx-auto px-4 py-8">
    {sections.map((section, index) => (
      <div key={index}>
        <SectionTitle pretitle={section.pretitle} title={section.title}>
          {section.description}
        </SectionTitle>
        <div className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section.items.map((item) => (
              <div
                key={item.name}
                className="card bg-base-100 shadow-xl flex flex-col cursor-pointer"
                onClick={() => openModal(item)}
              >
                <figure>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={250}
                    className="object-cover"
                  />
                </figure>
                <div className="card-body p-4 flex flex-col flex-grow">
                  <div className="flex flex-col flex-grow">
                    <h2 className="card-title text-sm">{item.name}</h2>
                  </div>
                  <div className="card-actions mt-4 flex justify-between items-center">
                    <p className="text-lg font-bold">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
  <Footer />
  <PopupWidget open={isPopupOpen} setOpen={setPopupOpen} />

  <dialog id="item_modal" className="modal">
    <div className="modal-box">
      {selectedItem && (
        <>
          <h3 className="font-bold text-lg">{selectedItem.name}</h3>
          <figure>
            <Image
              src={selectedItem.image}
              alt={selectedItem.name}
              width={400}
              height={250}
              className="object-cover"
            />
          </figure>
          <div className="card-body p-4 flex flex-col flex-grow">
            <div className="flex flex-col flex-grow">
              <p className="flex-grow">{selectedItem.description}</p>
              {selectedItem.options && (
                <ul className="list-none flex flex-col content-end">
                  {selectedItem.options.map((option, idx) => (
                    <li key={idx} className="flex items-center">
                      {balloonIcon}
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="card-actions mt-4 flex justify-between items-center">
              <p className="text-lg font-bold">{selectedItem.price}</p>
            </div>
          </div>
        </>
      )}
      <button onClick={closeModal} className="btn mt-4">
        Close
      </button>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</>

  );
};

export default Products;
