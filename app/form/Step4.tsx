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
          Steam Profile <span className="text-grey">*</span>
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
}
