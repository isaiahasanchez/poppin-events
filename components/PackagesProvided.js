import React from "react";

const PackagesProvided = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="img/360camera.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Super Star Package
              <div className="badge badge-secondary">Basic</div>
            </h2>
            <p>1st hour $450 Every hour after $150 This includes:</p>
            <ul className="list-none list-inside">
              <li><span className="text-green-500 mr-2">✓</span>Insurance</li>
              <li><span className="text-green-500 mr-2">✓</span>Setup</li>
              <li><span className="text-green-500 mr-2">✓</span>Red Carpet</li>
              <li><span className="text-green-500 mr-2">✓</span>Red Ropes</li>
              <li><span className="text-green-500 mr-2">✓</span>Fun Glasses</li>
              <li><span className="text-green-500 mr-2">✓</span>Cowboy/Cowgirl Hats</li>
              <li><span className="text-green-500 mr-2">✓</span>Boa</li>
              <li><span className="text-green-500 mr-2">✓</span>Hand Held Cut Outs</li>
              <li><span className="text-green-500 mr-2">✓</span>Gold Chains</li>
            </ul>
            <p className="text-lg font-bold">$450</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">360 Camera</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="img/ribbedwoodenbackdrop.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              We Can Bearly Wait Package
              <div className="badge badge-secondary">Premium</div>
            </h2>
            <p>Full venue decoration, catering, and DJ service.</p>
            <ul className="list-none list-inside">
              <li><span className="text-green-500 mr-2">✓</span>Insurance</li>
              <li><span className="text-green-500 mr-2">✓</span>Setup</li>
              <li><span className="text-green-500 mr-2">✓</span>10 ft Garland (3 Colors of Choice)</li>
              <li><span className="text-green-500 mr-2">✓</span>Backdrop of Choice</li>
              <li><span className="text-green-500 mr-2">✓</span>Chairs</li>
              <li><span className="text-green-500 mr-2">✓</span>Decoration of choice</li>
            </ul>
            <p className="text-lg font-bold">$550</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Balloons</div>
              <div className="badge badge-outline">Backdrops</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="img/360camera.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Baller Package
              <div className="badge badge-secondary">Deluxe</div>
            </h2>
            <p>1st hour $450 Every hour after $150 This includes:</p>
            <ul className="list-none list-inside">
              <li><span className="text-green-500 mr-2">✓</span>Insurance</li>
              <li><span className="text-green-500 mr-2">✓</span>Setup</li>
              <li><span className="text-green-500 mr-2">✓</span>10 ft Garland (3 Colors of Choice)</li>
              <li><span className="text-green-500 mr-2">✓</span>Backdrop of Choice</li>
              <li><span className="text-green-500 mr-2">✓</span>Red Carpet</li>
              <li><span className="text-green-500 mr-2">✓</span>Red Ropes</li>
              <li><span className="text-green-500 mr-2">✓</span>Fun Glasses</li>
              <li><span className="text-green-500 mr-2">✓</span>Cowboy/Cowgirl Hats</li>
              <li><span className="text-green-500 mr-2">✓</span>Boa</li>
              <li><span className="text-green-500 mr-2">✓</span>Hand Held Cut Outs</li>
              <li><span className="text-green-500 mr-2">✓</span>Gold Chains</li>
            </ul>
            <p className="text-lg font-bold">$650</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Balloons</div>
              <div className="badge badge-outline">360 Camera</div>
              <div className="badge badge-outline">Backdrops</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesProvided;
