import React from 'react'

const servicesProvided = () => {
  return (
<div className="flex justify-center items-center space-x-4">
  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">
        Basic Party Package
        <div className="badge badge-secondary">Basic</div>
      </h2>
      <p>Balloons, basic decorations, and setup.</p>
      <p className="text-lg font-bold">$199</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Decor</div>
      </div>
    </div>
  </div>

  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">
        Premium Party Package
        <div className="badge badge-secondary">Premium</div>
      </h2>
      <p>Enhanced decorations, premium balloons, and professional photography.</p>
      <p className="text-lg font-bold">$399</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Photography</div>
        <div className="badge badge-outline">Luxury</div>
      </div>
    </div>
  </div>

  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">
        Deluxe Party Package
        <div className="badge badge-secondary">Deluxe</div>
      </h2>
      <p>Full venue decoration, catering, and DJ service.</p>
      <p className="text-lg font-bold">$599</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Full Service</div>
      </div>
    </div>
  </div>
</div>

  )
}

export default servicesProvided