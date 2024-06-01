import React from "react";
import Container from "./container";

const Cta = ({ openPopup}) => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
          Bringing Your Vision to Life Today!
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          Reach Out and Let's Get Started!
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
        <button onClick={openPopup}>
            <div className="px-6 py-2 text-indigo-600 bg-white rounded-md">
              Get a Quote
            </div>
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Cta;