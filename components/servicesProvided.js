import React,{useState, useEffect} from 'react';

const ServicesProvided = () => {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      if ( window.location.search.includes('success=true') ) {
        setSuccess(true);
      }
    }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
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

        <div className="card bg-base-100 shadow-xl">
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

        <div className="card bg-base-100 shadow-xl">
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

      {success && (
          <p style={{ color: "green" }}>Thanks for your message! </p>
        )}
    </div>
  );
}

export default ServicesProvided;
