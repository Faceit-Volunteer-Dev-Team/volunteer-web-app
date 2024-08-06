"use client";
import { useFormContext } from "react-hook-form";

export default function Step1() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
            Region <span className="text-grey">*</span>
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
}
