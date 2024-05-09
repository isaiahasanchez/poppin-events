import React from 'react';
import Image from "next/image";
import boxHedgesImage from "../public/img/boxhedges.jpeg";

const RentalItems = () => {
  return (
    <div className="flex justify-center space-x-4 p-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image src={boxHedgesImage} alt="Box Hedges" width={500} height={300} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Box Hedges
            <div className="badge badge-secondary">$100 each or $150 pair</div>
          </h2>
          <p>Size: 4ft x 5ft</p>
          <p>*Delivery is an additional fee or free pickup*</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Rent Now</button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
        <Image src={boxHedgesImage} alt="Box Hedges" width={500} height={300} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Set of 3 Metal Arches
            <div className="badge badge-secondary">$70</div>
          </h2>
          <p>Fabrics included, any color of choice.</p>
          <p>Comes apart, you put it together.</p>
          <p>*Free pickup or delivery is an additional fee*</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentalItems;
