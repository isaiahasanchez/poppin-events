import React from 'react';
import Image from "next/image";
import boxHedgesImage from "../public/img/boxhedges.jpeg";

const RentalItems = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image src={boxHedgesImage} alt="Box Hedges" width={500} height={300} />
          </figure>
          <div className="card-body p-4">
            <div className="flex flex-col">
              <h2 className="card-title">Box Hedges</h2>
              <div className="badge badge-secondary mb-2">Decor</div>
            </div>
            <p><span className="text-green-500 mr-2">✓</span>Size: 4ft x 5ft</p>
            <p><span className="text-green-500 mr-2">✓</span>Delivery is an additional fee or free pickup</p>
            <div className="card-actions flex-col mt-4">
              <div className="badge badge-outline">Decor</div>
              <p className="text-lg font-bold mt-2">$100 each or $150 pair</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image src={boxHedgesImage} alt="Set of 3 Metal Arches" width={500} height={300} />
          </figure>
          <div className="card-body p-4">
            <div className="flex flex-col">
              <h2 className="card-title">Set of 3 Metal Arches</h2>
              <div className="badge badge-secondary mb-2">Entertainment</div>
            </div>
            <p><span className="text-green-500 mr-2">✓</span>Fabrics included, any color of choice</p>
            <p><span className="text-green-500 mr-2">✓</span>Comes apart, you put it together</p>
            <p><span className="text-green-500 mr-2">✓</span>Free pickup or delivery is an additional fee</p>
            <div className="card-actions flex-col mt-4">
              <div className="badge badge-outline">Entertainment</div>
              <p className="text-lg font-bold mt-2">$70</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentalItems;
