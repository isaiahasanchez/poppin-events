import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const PopupWidget = ({ open, setOpen }) => {
  const [state, handleSubmit] = useForm("mrgndblr"); // Replace "mrgndblr" with your actual Formspree form ID

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
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="text-white">Book Now!</div>
        )}
      </button>

      {open && (
        <div className="fixed z-50 bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto flex flex-col overflow-hidden h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
          <div className="flex flex-col items-center justify-center h-32 p-5 bg-indigo-600">
            <h3 className="text-lg text-white">How can we help?</h3>
          </div>
          <div className="flex-grow h-full p-6 overflow-auto bg-gray-50">
            <form onSubmit={handleSubmit}>
              <h2 className="text-lg font-semibold text-gray-900">Event Inquiry Form</h2>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Name 📇
                </label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="input-field" />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="mb-4">
                <label htmlFor="location" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Event Location 📍
                </label>
                <input type="text" id="location" name="location" placeholder="Event Location" className="input-field" />
                <ValidationError prefix="Location" field="location" errors={state.errors} />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Phone Number 📞
                </label>
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" className="input-field" />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Email 📧
                </label>
                <input type="email" id="email" name="email" placeholder="Email" className="input-field" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="mb-4">
                <label htmlFor="date" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Date of Event 📆
                </label>
                <input type="date" id="date" name="date" className="input-field" />
                <ValidationError prefix="Date" field="date" errors={state.errors} />
              </div>

              <div className="mb-4">
                <label htmlFor="time" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Time of Event ⏰
                </label>
                <input type="time" id="time" name="time" className="input-field" />
                <ValidationError prefix="Time" field="time" errors={state.errors} />
              </div>

              <fieldset className="mb-4">
                <legend className="text-sm mb-2 text-gray-600">Will your event be indoor or outdoor?</legend>
                <div className="flex items-center mb-2">
                  <input type="radio" value="Indoor" name="locationType" id="indoor" />
                  <label htmlFor="indoor" className="ml-2 text-sm text-gray-600">Indoor</label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="radio" value="Outdoor" name="locationType" id="outdoor" />
                  <label htmlFor="outdoor" className="ml-2 text-sm text-gray-600">Outdoor</label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="radio" value="Both" name="locationType" id="both" />
                  <label htmlFor="both" className="ml-2 text-sm text-gray-600">Both</label>
                </div>
              </fieldset>
              <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                {state.submitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
            {state.succeeded && <p>Thanks for your submission!</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupWidget;
