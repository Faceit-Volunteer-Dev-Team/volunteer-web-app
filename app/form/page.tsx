"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

// Step 1 Component
const Step1 = () => {
  const methods = useFormContext();
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-5">
        <div className="w-full md:w-1/2 space-y-2">
          <label htmlFor="fullname">
            Full Name <span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="fullname"
            {...register("fullname", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
            className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
              errors.fullname ? "border-red" : ""
            }`}
          />
          {errors.fullname && (
            <span className="text-red">
              Full name is required (3-50 characters)
            </span>
          )}
        </div>
        <div className="w-full md:w-1/2 space-y-2">
          <label htmlFor="nickname">
            Nickname <span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="nickname"
            {...register("nickname", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
            className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
              errors.nickname ? "border-red" : ""
            }`}
          />
          {errors.nickname && (
            <span className="text-red">
              Nickname is required (3-50 characters)
            </span>
          )}
        </div>
        <div className="w-full md:w-1/2 space-y-2">
          <label htmlFor="birthyear">
            Birth Year <span className="text-red">*</span>
          </label>
          <input
            type="number"
            id="birthyear"
            {...register("birthyear", {
              required: true,
              min: 1852,
              max: 2006,
            })}
            className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
              errors.birthyear ? "border-red" : ""
            }`}
          />
          {errors.birthyear && (
            <span className="text-red">
              Birth year should be between Darwin-2006
            </span>
          )}
        </div>
        <div className="space-y-2">
          <label>
            Region <span className="text-white">*</span>
          </label>
          <div className="flex flex-wrap gap-5 mt-2">
            <div className="relative w-full md:w-1/3">
              <input
                type="radio"
                id="eu"
                value="eu"
                {...register("gamingExperience", { required: true })}
                className="absolute opacity-0"
              />
              <label
                htmlFor="region"
                className="block w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md text-center cursor-pointer transition-all ease-in-out duration-200"
              >
                EU
              </label>
            </div>
            <div className="relative w-full md:w-1/3">
              <input
                type="radio"
                id="asia"
                value="asia"
                {...register("gamingExperience", { required: true })}
                className="absolute opacity-0"
              />
              <label
                htmlFor="asia"
                className="block w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md text-center cursor-pointer transition-all ease-in-out duration-200"
              >
                Asia
              </label>
            </div>
            <div className="relative w-full md:w-1/3">
              <input
                type="radio"
                id="NA"
                value="4+ Years"
                {...register("gamingExperience", { required: true })}
                className="absolute opacity-0"
              />
              <label
                htmlFor="na"
                className="block w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md text-center cursor-pointer transition-all ease-in-out duration-200"
              >
                NA
              </label>
            </div>
            <div className="relative w-full md:w-1/3">
              <input
                type="radio"
                id="oceania"
                value="oceania"
                {...register("gamingExperience", { required: true })}
                className="absolute opacity-0"
              />
              <label
                htmlFor="oceania"
                className="block w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md text-center cursor-pointer transition-all ease-in-out duration-200"
              >
                Oceania
              </label>
            </div>
          </div>
          {errors.gamingExperience && (
            <span className="text-red">Region is required</span>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email">
          Contact E-Mail <span className="text-red">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
            errors.email ? "border-red" : ""
          }`}
        />
        {errors.email && <span className="text-red">Email is required</span>}
      </div>
    </div>
  );
};

// Step 2 Component
const Step2 = () => {
  const methods = useFormContext();
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-5">
        <div className="space-y-2">
          <label>
            Gaming Experience <span className="text-white">*</span>
          </label>
          <div className="flex flex-wrap gap-5 mt-2">
            <div className="relative w-full md:w-1/3">
              <input
                type="radio"
                id="LessThan2Years"
                value="Less than 2 years"
                {...register("gamingExperience", { required: true })}
                className="absolute opacity-0"
              />
              <label
                htmlFor="LessThan2Years"
                className="block w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md text-center cursor-pointer transition-all ease-in-out duration-200"
              >
                Less than 2 Years
              </label>
            </div>
            <div className="relative w-full md:w-1/3">
              <input
                type="radio"
                id="24Years"
                value="2-4 Years"
                {...register("gamingExperience", { required: true })}
                className="absolute opacity-0"
              />
              <label
                htmlFor="24Years"
                className="block w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md text-center cursor-pointer transition-all ease-in-out duration-200"
              >
                2-4 Years
              </label>
            </div>
            <div className="relative w-full md:w-1/3">
              <input
                type="radio"
                id="4YearsPlus"
                value="4+ Years"
                {...register("gamingExperience", { required: true })}
                className="absolute opacity-0"
              />
              <label
                htmlFor="4YearsPlus"
                className="block w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md text-center cursor-pointer transition-all ease-in-out duration-200"
              >
                4+ Years
              </label>
            </div>
          </div>
          {errors.gamingExperience && (
            <span className="text-red">Gaming experience is required</span>
          )}
        </div>
      </div>
    </div>
  );
};

// Step 3 Component
const Step3 = () => {
  const methods = useFormContext();
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="space-y-2">
          <label htmlFor="games">
            What games do you play? <span className="text-red">*</span>
          </label>
          <select
            id="games"
            {...register("games", { required: true })}
            className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
              errors.games ? "border-red" : ""
            }`}
          >
            <option value="">Select...</option>
            <option value="cs2">CS2</option>
            <option value="dota">Dota</option>
            <option value="league">League</option>
            <option value="brawlstars">Brawl Stars</option>
          </select>
          {errors.games && (
            <span className="text-red">Please select a game</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="frequency">
            How often do you play? <span className="text-red">*</span>
          </label>
          <select
            id="frequency"
            {...register("frequency", { required: true })}
            className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
              errors.frequency ? "border-red" : ""
            }`}
          >
            <option value="">Select...</option>
            <option value="rarely">Rarely</option>
            <option value="sometimes">Sometimes</option>
            <option value="never">Never</option>
            <option value="regularly">Regularly</option>
          </select>
          {errors.frequency && (
            <span className="text-red">Please select an option</span>
          )}
        </div>
        {errors.gamingExperience && (
          <span className="text-red">Gaming experience is required</span>
        )}
      </div>
    </div>
  );
};

// Step 4 Component
const Step4 = () => {
  const methods = useFormContext();
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-5">
        <div className="space-y-2">
          <label htmlFor="availability">
            Are you consistently available for 4 hours a week?{" "}
            <span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="availability"
            {...register("availability", { required: true })}
            className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
              errors.availability ? "border-red" : ""
            }`}
          />
          {errors.availability && (
            <span className="text-red">Availability is required</span>
          )}
        </div>
        <div className="w-full md:w-1/2 space-y-2">
          <label htmlFor="faceitProfile">
            FACEIT Profile <span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="faceitProfile"
            {...register("faceitProfile", { required: true })}
            className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
              errors.faceitProfile ? "border-red" : ""
            }`}
          />
          {errors.faceitProfile && (
            <span className="text-red">FACEIT profile link is required</span>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="steamProfile">
          Steam Profile <span className="text-white">*</span>
        </label>
        <input
          type="text"
          id="steamProfile"
          {...register("steamProfile", { required: true })}
          className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
            errors.steamProfile ? "border-red" : ""
          }`}
        />
        {errors.steamProfile && (
          <span className="text-red">Steam profile link is required</span>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="discordID">
          Discord ID <span className="text-red">*</span>
        </label>
        <input
          type="text"
          id="discordID"
          {...register("discordID", { required: true })}
          className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
            errors.discordID ? "border-red" : ""
          }`}
        />
        {errors.discordID && (
          <span className="text-red">Discord ID is required</span>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="background">
          Previous technical or customer service background (Previous experience
          is not required.)
        </label>
        <textarea
          id="background"
          {...register("background")}
          className="w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none"
        ></textarea>
      </div>
      <div className="space-y-2">
        <label htmlFor="timezone">
          Please list your timezone and availability.{" "}
          <span className="text-red">*</span>
        </label>
        <input
          type="text"
          id="timezone"
          {...register("timezone", { required: true })}
          className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
            errors.timezone ? "border-red" : ""
          }`}
        />
        {errors.timezone && (
          <span className="text-red">
            Timezone and availability are required
          </span>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="terms" className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            {...register("terms", { required: true })}
            className="w-auto mr-2"
          />
          <span>
            I agree to the{" "}
            <a href="#" className="text-white">
              Terms and Conditions
            </a>
            <span className="text-red">*</span>
          </span>
        </label>
        {errors.terms && (
          <span className="text-red">You must agree to the terms</span>
        )}
      </div>
    </div>
  );
};

// ApplicationForm Component
export default function ApplicationForm() {
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;
  const [step, setStep] = useState(1);
  const [data, setData] = useState("");

  const onSubmit = (formData: any) => {
    setData(JSON.stringify(formData));
    // You can handle form submission logic here, e.g., API call
    console.log("Form Data:", formData);
    // Reset form after submission
    reset();
    // Move to the first step after submission
    setStep(1);
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="bg-black font-play text-base font-normal text-white py-3">
      <div className="max-w-2xl mx-auto rounded-lg">
        <div className="flex flex-col items-center justify-center text-center py-10">
          <div>
            <a target="_blank" href="http://faceit.com">
              <Image
                src="/pintech.png"
                alt="Adminlogo"
                width={48}
                height={48}
              />
            </a>
          </div>
          <div className="mt-5">
            <h1 className="uppercase text-2xl">Application Form</h1>
            <h2 className="text-lg font-medium opacity-70 mt-2">
              Road to Volunteer
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="ax-form"
            className="space-y-5"
          >
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}

            <div className="flex justify-between">
              {step < 4 && (
                <button
                  type="button"
                  className="p-3 bg-white text-grey rounded-md transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none"
                  onClick={nextStep}
                >
                  Next
                </button>
              )}
              {step === 4 && (
                <button
                  type="submit"
                  className="p-3 bg-white text-grey rounded-md transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </FormProvider>
        <p className="text-white">{data}</p>
      </div>
      <div className="flex flex-col items-center py-12">
        <h3 className="text-sm font-normal opacity-50">Powered by</h3>
        <a href="https://docs.google.com/forms">
          <Image
            src="/google-form.png"
            alt="Google Forms"
            width={100}
            height={100}
          />
        </a>
      </div>
    </div>
  );
}
