import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const PopupWidget = ({ open, setOpen }) => {
  const [state, handleSubmit] = useForm("mrgndblr");
  const [showAlert, setShowAlert] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setOpen(false); // Close the form
      document.getElementById("my_modal_1").showModal();
    }
  };
  return (
    <div>
      <button
        className="fixed z-40 flex items-center justify-center transition duration-300 bg-indigo-500 rounded-full shadow-lg right-5 bottom-5 w-24 h-24 focus:outline-none hover:bg-indigo-700 focus:bg-indigo-600 ease"
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Open Contact form Widget</span>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <div className="text-white">Book Now!</div>
        )}
      </button>

      {/*Success form modal*/}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Booking Inquiry Sent!</h3>
          <p className="py-4">
            Thank you for contacting us we will get back to you soon!
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {open && (
        <div className="fixed z-50 bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto flex flex-col overflow-hidden h-full w-full sm:w-[350px] min-h-[250px] sm:h-[800px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col items-center justify-center h-32 p-5 bg-indigo-600">
            <h3 className="text-lg text-white">How can we help?</h3>
          </div>
          <div className="flex-grow h-full p-6 overflow-auto bg-gray-50">
            <form onSubmit={handleFormSubmit}>
              <h2 className="text-lg font-semibold text-gray-900">
                Event Inquiry Form
              </h2>
              {/* Name input   */}
              <div className="form-control mb-4">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="grow"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </label>
              </div>
              {/* location input   */}
              <div className="form-control mb-4">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      clipRule="evenodd"
                      className="text-gray-500"
                    />
                  </svg>

                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Event Location"
                    className="grow"
                  />
                  <ValidationError
                    prefix="Location"
                    field="location"
                    errors={state.errors}
                  />
                </label>
              </div>

              {/* Number input   */}
              <div className="form-control mb-4">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                      clipRule="evenodd"
                      className="text-gray-500"
                    />
                  </svg>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    className="grow"
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </label>
              </div>

              {/* email input   */}
              <div className="form-control mb-4">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="grow"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </label>
              </div>
              {/* date input */}
              <div className="form-control mb-4">
                <label className="input input-bordered flex items-center gap-2">
                  Event Date
                  <input type="date" id="date" name="date" className="grow" />
                </label>
                <ValidationError
                  prefix="Date"
                  field="date"
                  errors={state.errors}
                />
              </div>

              {/* time input */}
              <div className="form-control mb-4">
                <label className="input input-bordered flex items-center gap-2">
                  {" "}
                  Event Time
                  <input type="time" id="time" name="time" className="grow" />
                </label>
                <ValidationError
                  prefix="Time"
                  field="time"
                  errors={state.errors}
                />
              </div>

              {/* Indoor Outdoor question */}
              <div className="group bg-base-200 rounded-xl mb-4 p-4 ">
                <p className="text-lg font-medium">Indoor or outdoor?</p>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Indoor</span>
                    <input
                      type="radio"
                      name="locationType"
                      value="Indoor"
                      className="radio checked:bg-blue-500"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Outdoor</span>
                    <input
                      type="radio"
                      name="locationType"
                      value="Outdoor"
                      className="radio checked:bg-blue-500"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Both</span>
                    <input
                      type="radio"
                      name="locationType"
                      value="Both"
                      className="radio checked:bg-blue-500"
                    />
                  </label>
                </div>
              </div>

              {/* Packages offered section */}

              <details className="collapse collapse-arrow bg-base-200 mb-4">
                <summary className="collapse-title text-lg font-medium">
                  Packages Offered
                </summary>
                <div className="collapse-content">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Super Star Package</span>
                      <input
                        type="radio"
                        name="package"
                        value="Basic Party Package"
                        className="radio checked:bg-blue-500"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Baller Package</span>
                      <input
                        type="radio"
                        name="package"
                        value="Premium Party Package"
                        className="radio checked:bg-blue-500"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">
                        We Can Bearly Wait Package
                      </span>
                      <input
                        type="radio"
                        name="package"
                        value="Deluxe Party Package"
                        className="radio checked:bg-blue-500"
                      />
                    </label>
                  </div>
                </div>
              </details>

              {/* Products and services */}

              <details className="collapse collapse-arrow bg-base-200 mb-4">
                <summary className="collapse-title text-lg font-medium">
                  Add Products
                </summary>

                <details className="collapse collapse-arrow bg-base-200 mb-4">
                  <summary className="collapse-title text-sm font-medium">
                    Backdrops
                  </summary>
                  <div className="collapse-content">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">3 Metal Arches</span>
                        <input
                          type="checkbox"
                          name="backdrops"
                          value="3 Metal Arches"
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">
                          Ribbed Wooden Backdrop
                        </span>
                        <input
                          type="checkbox"
                          name="backdrops"
                          value="Ribbed Wooden Backdrop"
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Circle Backdrop</span>
                        <input
                          type="checkbox"
                          name="backdrops"
                          value="Circle Backdrop"
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Box Hedges</span>
                        <input
                          type="checkbox"
                          name="backdrops"
                          value="Box Hedges"
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Green Grass Backdrop</span>
                        <input
                          type="checkbox"
                          name="backdrops"
                          value="Green Grass Backdrop"
                          className="checkbox"
                        />
                      </label>
                    </div>
                  </div>
                </details>

                <details className="collapse collapse-arrow bg-base-200 mb-4">
                  <summary className="collapse-title text-sm font-medium">
                    Balloons
                  </summary>
                  <div className="collapse-content">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">
                          Birthday Number Stack
                        </span>
                        <input
                          type="checkbox"
                          name="balloons"
                          value="Birthday Number Stack"
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">
                          Balloon Stack 40in Numbers
                        </span>
                        <input
                          type="checkbox"
                          name="balloons"
                          value="Balloon Stack 40in Numbers"
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Grab and Go Garland</span>
                        <input
                          type="checkbox"
                          name="balloons"
                          value="Grab and Go Garland"
                          className="checkbox"
                        />
                      </label>
                    </div>
                  </div>
                </details>

                <details className="collapse collapse-arrow bg-base-200 mb-4">
                  <summary className="collapse-title text-sm font-medium">
                    Flowers
                  </summary>
                  <div className="collapse-content">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Money Bouquet</span>
                        <input
                          type="checkbox"
                          name="flowers"
                          value="Money Bouquet"
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Wildflowers</span>
                        <input
                          type="checkbox"
                          name="flowers"
                          value="Wildflowers"
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">
                          Custom Flower Additions
                        </span>
                        <input
                          type="checkbox"
                          name="flowers"
                          value="Custom Flower Additions"
                          className="checkbox"
                        />
                      </label>
                    </div>
                  </div>
                </details>

                <details className="collapse collapse-arrow bg-base-200 mb-4">
                  <summary className="collapse-title text-sm font-medium">
                    Entertainment
                  </summary>
                  <div className="collapse-content">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">360 Camera</span>
                        <input
                          type="checkbox"
                          name="entertainment"
                          value="360 Camera"
                          className="checkbox"
                        />
                      </label>
                    </div>
                  </div>
                </details>

                <details className="collapse collapse-arrow bg-base-200 mb-4">
                  <summary className="collapse-title text-sm font-medium">
                    Add Ons
                  </summary>
                  <div className="collapse-content">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">7ft Bear</span>
                        <input
                          type="checkbox"
                          name="Add Ons"
                          value="7ft Bear"
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Custom Snack Wraps</span>
                        <input
                          type="checkbox"
                          name="Add Ons"
                          value="Custom Snack Wraps"
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">
                          Neon sign (Happy Birthday, Oh Baby, Etc.)
                        </span>
                        <input
                          type="checkbox"
                          name="products"
                          value="Neon sign (Happy Birthday, Oh Baby, Etc.)"
                          className="checkbox"
                        />
                      </label>
                    </div>

                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Number Neon Sign</span>
                        <input
                          type="checkbox"
                          name="products"
                          value="Number Neon Sign"
                          className="checkbox"
                        />
                      </label>
                    </div>

                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">
                          Custom vinyl decal on balloon or backdrop
                        </span>
                        <input
                          type="checkbox"
                          name="products"
                          value="Custom vinyl decal on balloon or backdrop"
                          className="checkbox"
                        />
                      </label>
                    </div>

                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">
                          Marquee number(s) or letter(s)
                        </span>
                        <input
                          type="checkbox"
                          name="products"
                          value="Marquee number(s) or letter(s)"
                          className="checkbox"
                        />
                      </label>
                    </div>

                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">12 ft Red Carpet</span>
                        <input
                          type="checkbox"
                          name="products"
                          value="12 ft Red Carpet"
                          className="checkbox"
                        />
                      </label>
                    </div>

                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Stanchions pair</span>
                        <input
                          type="checkbox"
                          name="products"
                          value="Stanchions pair"
                          className="checkbox"
                        />
                      </label>
                    </div>

                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Wooden crate</span>
                        <input
                          type="checkbox"
                          name="products"
                          value="Wooden crate"
                          className="checkbox"
                        />
                      </label>
                    </div>
                  </div>
                </details>
              </details>

              {/* Mockup */}

              <div className="group bg-base-200 rounded-xl mb-4 p-4 ">
                <p className="text-lg font-medium">
                  Would you like a mock-up of your installation?{" "}
                </p>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Yes</span>
                    <input
                      type="radio"
                      name="Mockup?"
                      value="Yes"
                      className="radio checked:bg-blue-500"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">No</span>
                    <input
                      type="radio"
                      value="No"
                      name="Mockup?"
                      className="radio checked:bg-blue-500"
                    />
                  </label>
                </div>
              </div>

              {/* Terms and Conditions */}

              <div className="group bg-base-200 rounded-xl mb-4 p-4 ">
                <p className="text-md">
                  All events are subject to delivery, setup, and tear down fee.
                  **Important: A non-refundable 50% deposit is needed to secure
                  your event date. The remaining balance must be paid 24 hours
                  prior to the event. We’re excited to make your event
                  unforgettable!!{" "}
                </p>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">I Understand</span>
                    <input
                      type="radio"
                      name="Agree to Cancellation fee"
                      value="I Understand"
                      className="radio checked:bg-blue-500"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">I Totally Understand</span>
                    <input
                      type="radio"
                      value="I Totally Understand"
                      name="Agree to Cancellation fee"
                      className="radio checked:bg-blue-500"
                    />
                  </label>
                </div>
              </div>

              {/* Additional comments */}
              <div className="group bg-base-200 rounded-xl mb-4 p-4 ">
                <p className="text-md mb-2">
                  We'd love to hear about your theme, colors, and celebration
                  details. If you have specific decorations in mind or need a
                  custom design, please share any additional information. We are
                  here to make your event truly special.
                </p>
                <textarea
                  name="comments"
                  className="text-sm h-32 textarea-lg textarea-bordered w-full max-w-xs"
                  placeholder="Type Here"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                {state.submitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupWidget;
