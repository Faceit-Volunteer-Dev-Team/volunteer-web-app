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
}
