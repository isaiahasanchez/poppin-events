import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Disclosure, Transition } from "@headlessui/react";

const PopupWidget = ({open, setOpen}) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = (data, e) => {
    if (process.env.NODE_ENV === 'production') {
      // Let Netlify handle the form submission directly in production
      // No need to preventDefault as Netlify needs the form submit event
    } else {
      e.preventDefault(); // Prevent default form submission in development
      console.log(data);
      // Your existing fetch logic here for development
    }
  };
  
  return (
    <div>
      <Disclosure open={open} onChange={setOpen}>
        {({ open }) => (
          <>
            <Disclosure.Button className="fixed z-40 flex items-center justify-center transition duration-300 bg-indigo-500 rounded-full shadow-lg right-5 bottom-5 w-24 h-24 focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 ease">

              <span className="sr-only">Open Contact form Widget</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
                className="absolute w-12 h-12 text-white">
                <div>Book Now</div>{" "}
              </Transition>
  
              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>{" "}
              </Transition>
            </Disclosure.Button>
            <Transition
              className="fixed z-50 bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5">
              <Disclosure.Panel className="flex flex-col overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
                <div className="flex flex-col items-center justify-center h-32 p-5 bg-indigo-600">
                  <h3 className="text-lg text-white">How can we help?</h3>
                  <p className="text-white opacity-50">
                    We usually respond in a few hours
                  </p>
                </div>
                <div className="flex-grow h-full p-6 overflow-auto bg-gray-50 ">
                  <form name="contact" method= "POST" onSubmit={handleSubmit(onSubmit)} data-netlify="true"  noValidate>
                  <input type="hidden" name="form-name" value="contact" />
                    <h2 className="text-lg font-semibold text-gray-900">Event Inquiry Form</h2>
                    <p>Thank you for choosing PoppinEventsWithJ for your next event! Fill out this form to help us plan your special day with you!</p>
                    
                    <div className="mb-4">
                      <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name 📇</label>
                      <input type="text" id="name" {...register("name", { required: "Name is required" })} placeholder="Your Name" className="input-field"/>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="location" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Event Location 📍</label>
                      <input type="text" id="location" {...register("location", { required: "Location is required" })} placeholder="Event Location" className="input-field"/>
                    </div>
  
                    <div className="mb-4">
                      <label htmlFor="phone" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Phone Number 📞</label>
                      <input type="tel" id="phone" {...register("phone", { required: "Phone number is required" })} placeholder="Phone Number" className="input-field"/>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email 📧</label>
                      <input type="email" id="email" {...register("email", { required: "Email is required" })} placeholder="Email" className="input-field"/>
                    </div>
                    
                    <div className="mb-4">
                      <fieldset>
                        <legend className="text-sm mb-2 text-gray-600">What service(s) are you interested in?</legend>
                        {/* Checkbox Group for Services */}
                      </fieldset>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="date" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Date of Event 📆</label>
                      <input type="date" id="date" {...register("date", { required: "Date of event is required" })} className="input-field"/>
                    </div>
  
                    <div className="mb-4">
                      <label htmlFor="time" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Time of Event ⏰</label>
                      <input type="time" id="time" {...register("time", { required: "Time of event is required" })} className="input-field"/>
                    </div>
                    
                    <div className="mb-4">
                      <fieldset>
                        <legend className="text-sm mb-2 text-gray-600">Will your event be indoor or outdoor?</legend>
                        <div className="flex items-center mb-2">
                          <input type="radio" value="Indoor" {...register("locationType", { required: true })} id="indoor" />
                          <label htmlFor="indoor" className="ml-2 text-sm text-gray-600">Indoor</label>
                        </div>
                        <div className="flex items-center mb-2">
                          <input type="radio" value="Outdoor" {...register("locationType", { required: true })} id="outdoor" />
                          <label htmlFor="outdoor" className="ml-2 text-sm text-gray-600">Outdoor</label>
                        </div>
                        <div className="flex items-center mb-2">
                          <input type="radio" value="Both" {...register("locationType", { required: true })} id="both" />
                          <label htmlFor="both" className="ml-2 text-sm text-gray-600">Both</label>
                        </div>
                      </fieldset>
                    </div>
                    
                    <div className="mb-4">
                      <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                      </button>
                    </div>
                  </form>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
  
}

export default PopupWidget;