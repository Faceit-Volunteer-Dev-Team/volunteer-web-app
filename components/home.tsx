import React from "react";
import Link from "next/link";
import { Button } from "./shared/button";

const Homep = () => {
  return (
    <div className="bg-blackrelative flex flex-col ">
      <header className="text-center py-6">
        <h1 className="text-4xl text-orange-500">Volunteers</h1>
      </header>

      <div className="container mx-auto flex flex-col md:flex-row justify-around py-6">
        <div className="bg-grey border-grey flex-1 w-full text-left text-md">
          <h2 className="text-4xl text-orange-500 mb-4 py-2 border-b border-gray-200">
            About the Team
          </h2>
          <p>
            We believe the role of Live Tech Support Admin is the perfect
            opportunity for people looking to get their first foot in the door
            of their future esports career. Despite being a volunteer position,
            you'll have a great opportunity to participate in gaming nights with
            full-time staff and become a familiar cog within the FACEIT machine.
          </p>
        </div>
        <div className="bg-grey border-grey p-6 m-4 rounded-lg flex-1 ">
          <h2 className=" text-4xl mb-4 py-2 border-b border-gray-200 ">
            Benefits
          </h2>
          <ul className="list-none p-0">
            <li>- PREMIUM SUB</li>
            <li>- FP FOR HELPING</li>
            <li>- CAREER OPPORTUNITIES</li>
            <li>- IRL HUGS</li>
            <li>- 1 FREE POG POG FROG</li>
          </ul>
        </div>
        <div className="bg-grey border-grey p-6 m-4 rounded-lg flex-1">
          <h2 className="text-4xl  mb-4 py-2 border-b border-gray-200">
            Requirements
          </h2>
          <ul className="list-none p-0">
            <li>DISLIKE DARWIN</li>
            <li>DISLIKE DARWIN</li>
            <li>DISLIKE DARWIN</li>
            <li>DISLIKE DARWIN</li>
            <li>DISLIKE DARWIN</li>
            <li>DISLIKE DARWIN</li>
            <li>RLY DISLIKE DARWIN</li>
            <li>DISLIKE DARWIN</li>
            <li>DISLIKE DARWIN</li>
            <li>DISLIKE DARWIN</li>
            <li>DISLIKE DARWIN</li>
            <li>DISLIKE DARWIN</li>
          </ul>
        </div>
      </div>

      <div className="text-center py-6">
        <Link href="/form">
          <Button
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] mt-4"
            variant="primary"
            size="large"
          >
            <span className="text-orange text-2xl">Apply Now</span>
          </Button>
        </Link>
      </div>

      <div className="bg-orange text-orange-500  text-2xl text-left py-4">
        <Link href="/refer">ALREADY WITH US? REFER A FRIEND</Link>
      </div>
    </div>
  );
};

export default Homep;
