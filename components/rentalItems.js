import React from "react";
import Image from "next/image";
import Link from "next/link";
import boxHedgesImage from "../public/img/boxhedges.jpeg";
import metalarches from "../public/img/metalarches.jpg";
import birthdaystacknumbersm from "../public/img/birthdaystacknumbersm.jpg";
import diyballoonkit from "../public/img/diyballoonkit.jpg";

const RentalItems = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              src={boxHedgesImage}
              alt="Box Hedges"
              width={500}
              height={300}
            />
          </figure>
          <div className="card-body p-4">
            <div className="flex flex-col">
              <h2 className="card-title">Box Hedges</h2>
              <div className="badge badge-secondary mb-2">Decor</div>
            </div>
            <p>
              <span className="text-green-500 mr-2">✓</span>Size: 4ft x 5ft
            </p>
            <p>
              <span className="text-green-500 mr-2">✓</span>Delivery is an
              additional fee or free pickup
            </p>
            <div className="card-actions flex-col mt-4">
              <div className="badge badge-outline">Decor</div>
              <p className="text-lg font-bold mt-2">$100 each or $150 pair</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              src={metalarches}
              alt="Set of 3 Metal Arches"
              width={500}
              height={300}
            />
          </figure>
          <div className="card-body p-4">
            <div className="flex flex-col">
              <h2 className="card-title">Set of 3 Metal Arches</h2>
              <div className="badge badge-secondary mb-2">Decor</div>
            </div>
            <p>
              <span className="text-green-500 mr-2">✓</span>Fabrics included,
              any color of choice
            </p>
            <p>
              <span className="text-green-500 mr-2">✓</span>Comes apart, you put
              it together
            </p>
            <p>
              <span className="text-green-500 mr-2">✓</span>Free pickup or
              delivery is an additional fee
            </p>
            <div className="card-actions flex-col mt-4">
              <div className="badge badge-outline">Entertainment</div>
              <p className="text-lg font-bold mt-2">$70</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              src={birthdaystacknumbersm}
              alt="Birthday Number Stack"
              width={500}
              height={300}
            />
          </figure>
          <div className="card-body p-4">
            <div className="flex flex-col">
              <h2 className="card-title">Birthday Number Stack</h2>
              <div className="badge badge-secondary mb-2">Balloons</div>
            </div>
            <p>
              <span className="text-green-500 mr-2">✓</span>Personalized
              birthday number stack
            </p>
            <p>
              <span className="text-green-500 mr-2">✓</span>Customizable colors
            </p>
            <p>
              <span className="text-green-500 mr-2">✓</span>Free pickup or
              delivery is an additional fee
            </p>
            <div className="card-actions flex-col mt-4">
              <div className="badge badge-outline">Decor</div>
              <p className="text-lg font-bold mt-2">$40</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              src={diyballoonkit}
              alt="DIY Balloon Kit"
              width={500}
              height={300}
            />
          </figure>
          <div className="card-body p-4">
            <div className="flex flex-col">
              <h2 className="card-title">DIY Balloon Kit</h2>
              <div className="badge badge-secondary mb-2">Party Supplies</div>
            </div>
            <p>
              <span className="text-green-500 mr-2">✓</span>Includes all
              necessary materials
            </p>
            <p>
              <span className="text-green-500 mr-2">✓</span>Customizable colors
            </p>
            <p>
              <span className="text-green-500 mr-2">✓</span>Free pickup or
              delivery is an additional fee
            </p>
            <div className="card-actions flex-col mt-4">
              <div className="badge badge-outline">Party Supplies</div>
              <p className="text-lg font-bold mt-2">$50</p>
            </div>
          </div>
        </div>
      </div>
      {/* Button to nav to all products */}
      <div className="flex items-center justify-center mt-5">
        <Link href="/products">
          <div className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            Click here to see all the products we offer!
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RentalItems;
