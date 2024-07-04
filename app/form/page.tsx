"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (formData: any) => {
    setData(JSON.stringify(formData));
    // Here you can add logic to handle form submission, e.g., sending data to the server
  };

  return (
    <div className="bg-black font-play text-base font-normal text-white py-3">
      <div className="max-w-2xl mx-auto rounded-lg">
        <div className="flex flex-col items-center justify-center text-center py-10">
          <div>
            <a href="http://faceit.com">
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="ax-form"
          className="space-y-5"
        >
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
            {errors.email && (
              <span className="text-red">Email is required</span>
            )}
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="w-full md:w-1/2 space-y-2">
              <label htmlFor="birthyear">
                Birth Year <span className="text-red">*</span>
              </label>
              <input
                type="number"
                id="birthyear"
                {...register("birthyear", {
                  required: true,
                  min: 2004,
                  max: 2008,
                })}
                className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
                  errors.birthyear ? "border-red" : ""
                }`}
              />
              {errors.birthyear && (
                <span className="text-red">
                  Birth year should be between 2004-2008
                </span>
              )}
            </div>
            <div className="w-full md:w-1/2 space-y-2">
              <label htmlFor="citycountry">
                Region (Europe) <span className="text-red">*</span>
              </label>
              <input
                type="text"
                id="citycountry"
                {...register("citycountry", { required: true })}
                className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
                  errors.citycountry ? "border-red" : ""
                }`}
              />
              {errors.citycountry && (
                <span className="text-red">Residence is required</span>
              )}
            </div>
          </div>
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
          <div className="flex flex-wrap gap-5">
            <div className="w-full md:w-1/2 space-y-2">
              <label htmlFor="faceitElo">
                FACEIT ELO <span className="text-white">*</span>
              </label>
              <select
                id="faceitElo"
                {...register("faceitElo", { required: true })}
                className={`w-full p-2.5 bg-opacity-10 bg-white  border border-opacity-15 border-solid border-white rounded-md focus:outline-none ${
                  errors.faceitElo ? "border-red" : ""
                }`}
              >
                <option className="text-white" value="">
                  Choose
                </option>
                <option className="text-grey" value="2001 - 2100">
                  2001 - 2100
                </option>
                <option className="text-grey" value="2100 - 2200">
                  2100 - 2200
                </option>
                <option className="text-grey" value="2200 - 2300">
                  2200 - 2300
                </option>
                <option className="text-grey" value="2300 - 2400">
                  2300 - 2400
                </option>
                <option className="text-grey" value="2400 - 2500">
                  2400 - 2500
                </option>
                <option className="text-grey" value="2500+">
                  2500+
                </option>
              </select>
              {errors.faceitElo && (
                <span className="text-white">FACEIT ELO is required</span>
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
                <span className="text-red">
                  FACEIT profile link is required
                </span>
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
          <div>
            <button
              type="submit"
              className="w-full p-5 bg-white text-grey text-center rounded-md transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none"
            >
              Send your application
            </button>
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
        </form>
        <p className="text-white">{data}</p>
      </div>
    </div>
  );
}
