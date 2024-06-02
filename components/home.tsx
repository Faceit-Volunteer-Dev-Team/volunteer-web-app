import React from "react";
import Link from "next/link";
import { Button } from "./shared/button";

const Homep = () => {
  return (
    <div className="bg-blackrelative flex flex-col  text-white">
      <header className="text-center py-6">
        <h1 className="text-4xl text-orange-500"></h1>
      </header>

      <div className="container mx-auto flex flex-col md:flex-row justify-around py-6">
        <div className=" border-grey flex-1 w-full text-left text-md">
          <h2 className="text-2xl text-orange-500 mb-4 py-2 border-b border-gray-200 font-bold">
            About the Team
          </h2>
          <p>
            We believe the role of Live Tech Support Admin is the perfect
            opportunity for people looking to get their first foot in the door
            of their future esports career. Despite being a volunteer position,
            have a great opportunity to participate in gaming nights with
            full-time staff and become a familiar cog within the FACEIT machine.
          </p>
        </div>
        <div className=" border-grey p-6 m-4 rounded-lg flex-1 ">
          <h2 className=" text-2xl mb-4 py-2 border-b border-gray-200 font-bold">
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
        <div className=" border-grey p-6 m-4 rounded-lg flex-1">
          <h2 className="text-2xl  mb-4 py-2 border-b border-gray-200 font-bold">
            Requirements
          </h2>
          <ul className="list-none p-0">
            <li>No bans ✅</li>
            <li>Good English ✅</li>
            <li>Pizza</li>
            <li>DISLIKE DARWIN ❌</li>
            <li>DISLIKE DARWIN ❌</li>
            <li>DISLIKE DARWIN ❌</li>
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
            className="translate-y-[-1rem] "
            variant="primary"
            size="large"
          >
            <span className="text-orange text-1xl">Apply Now</span>
          </Button>
        </Link>
      </div>

      <div className="bg-orange text-orange-500   text-1xl text-left py-4 ">
        <Link href="/refer">ALREADY WITH US? REFER A FRIEND +</Link>
      </div>
    </div>
  );
};

export default Homep;
