"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm, FormProvider } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

export default function FormClient() {
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  const [step, setStep] = useState(1);
  const [data, setData] = useState("");

  const onSubmit = (formData: any) => {
    setData(JSON.stringify(formData));
    console.log("Form Data:", formData);
    reset();
    setStep(1);
  };

  const nextStep = () => setStep((prevStep) => prevStep + 1);

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
