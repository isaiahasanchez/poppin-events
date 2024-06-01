import React from "react";
import Image from "next/image";
import Link from "next/link";
import boxHedgesImage from "../public/img/boxhedges.jpeg";
import metalarches from "../public/img/metalarches.jpg";
import birthdaystacknumbersm from "../public/img/birthdaystacknumbersmcropped.jpg";
import diyballoonkit from "../public/img/diyballoonkit.jpg";

const RentalItems = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div className="card bg-base-100 shadow-xl flex flex-col">
          <figure>
            <Image
              src={boxHedgesImage}
              alt="Box Hedges"
              width={500}
              height={300}
              className="object-cover"
            />
          </figure>
          <div className="card-body p-4 flex flex-col flex-grow">
            <div className="flex flex-col flex-grow">
              <h2 className="card-title">Box Hedges</h2>
              <ul className="flex flex-col justify-end flex-grow">
                <li>
                  <span className="text-green-500 mr-2">✓</span>Size: 4ft x 5ft
                </li>
                <li>
                  <span className="text-green-500 mr-2">✓</span>Delivery is an
                  additional fee or free pickup
                </li>
              </ul>
            </div>
            <div className="card-actions mt-4 flex justify-between items-center">
              <p className="text-lg font-bold">$100 each or $150 pair</p>
              <div className="badge badge-outline">Decor</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl flex flex-col">
          <figure>
            <Image
              src={metalarches}
              alt="Set of 3 Metal Arches"
              width={500}
              height={300}
              className="object-cover"
            />
          </figure>
          <div className="card-body p-4 flex flex-col flex-grow">
            <div className="flex flex-col flex-grow">
              <h2 className="card-title">Set of 3 Metal Arches</h2>
              <ul className="flex flex-col justify-end flex-grow">
                <li>
                  <span className="text-green-500 mr-2">✓</span>Fabrics included,
                  any color of choice
                </li>
                <li>
                  <span className="text-green-500 mr-2">✓</span>Comes apart, you
                  put it together
                </li>
                <li>
                  <span className="text-green-500 mr-2">✓</span>Free pickup or
                  delivery is an additional fee
                </li>
              </ul>
            </div>
            <div className="card-actions mt-4 flex justify-between items-center">
              <p className="text-lg font-bold">$70</p>
              <div className="badge badge-outline">Decor</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl flex flex-col">
          <figure>
            <Image
              src={birthdaystacknumbersm}
              alt="Birthday Number Stack"
              width={500}
              height={300}
              className="object-cover"
            />
          </figure>
          <div className="card-body p-4 flex flex-col flex-grow">
            <div className="flex flex-col flex-grow">
              <h2 className="card-title">Birthday Number Stack</h2>
              <ul className="flex flex-col justify-end flex-grow">
                <li>
                  <span className="text-green-500 mr-2">✓</span>Personalized
                  birthday number stack
                </li>
                <li>
                  <span className="text-green-500 mr-2">✓</span>Customizable
                  colors
                </li>
                <li>
                  <span className="text-green-500 mr-2">✓</span>Free pickup or
                  delivery is an additional fee
                </li>
              </ul>
            </div>
            <div className="card-actions mt-4 flex justify-between items-center">
              <p className="text-lg font-bold">$40</p>
              <div className="badge badge-outline">Decor</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl flex flex-col">
          <figure>
            <Image
              src={diyballoonkit}
              alt="DIY Balloon Kit"
              width={500}
              height={300}
              className="object-cover"
            />
          </figure>
          <div className="card-body p-4 flex flex-col flex-grow">
            <div className="flex flex-col flex-grow">
              <h2 className="card-title">DIY Balloon Kit</h2>
              <ul className="flex flex-col justify-end flex-grow">
                <li>
                  <span className="text-green-500 mr-2">✓</span>Includes all
                  necessary materials
                </li>
                <li>
                  <span className="text-green-500 mr-2">✓</span>Customizable
                  colors
                </li>
                <li>
                  <span className="text-green-500 mr-2">✓</span>Free pickup or
                  delivery is an additional fee
                </li>
              </ul>
            </div>
            <div className="card-actions mt-4 flex justify-between items-center">
              <p className="text-lg font-bold">$50</p>
              <div className="badge badge-outline">Party Supplies</div>
            </div>
          </div>
        </div>
      </div>
      {/* Button to nav to all products */}
      <div className="flex items-center justify-center mt-5">
        <Link href="/products">
          <div className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 h-14 flex justify-center items-center">
            Click here to see all the products we offer!
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RentalItems;
