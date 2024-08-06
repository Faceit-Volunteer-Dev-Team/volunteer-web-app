"use client";
import { useFormContext } from "react-hook-form";

export default function Step1() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
            className={`w-full p-2.5 bg-opacity-10 bg-white border border-opacity-15   border-solid border-white rounded-md focus:outline-none ${
              errors.games ? "border-red" : ""
            }`}
          >
            <option className=" text-grey" value="">
              Select...
            </option>
            <option className=" text-grey" value="cs2">
              CS2
            </option>
            <option className=" text-grey" value="dota">
              Dota
            </option>
            <option className=" text-grey" value="league">
              League
            </option>
            <option className=" text-grey" value="brawlstars">
              Brawl Stars
            </option>
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
            <option className=" text-grey" value="">
              Select...
            </option>
            <option className=" text-grey" value="rarely">
              Rarely
            </option>
            <option className=" text-grey" value="sometimes">
              Sometimes
            </option>
            <option className=" text-grey" value="never">
              Never
            </option>
            <option className=" text-grey" value="regularly">
              Regularly
            </option>
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
}
