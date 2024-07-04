import React from "react";
import Link from "next/link";
import { Button } from "./shared/button";
import { RiHomeOfficeFill, RiGroup2Fill, RiBookOpenLine } from "react-icons/ri";
import HText from "./shared/HText";
import { Tools } from "./tools";

type BenefitProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="mt-5 rounded-md border-2 border-grey px-5 py-16 text-center text-white ">
      <div className="mb-4 flex justify-center bg-grey">
        <div className="rounded-full border-2 border-grey bg-grey p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
    </div>
  );
};

const benefits: Array<BenefitProps> = [
  {
    icon: <RiHomeOfficeFill className="h-6 w-6" />,
    title: "Volunteer Admin Team",
    description:
      "Get professional advice from experienced individuals in the esports industry, helping you grow and develop your skills.",
  },
  {
    icon: <RiGroup2Fill className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Get professional advice from experienced individuals in the esports industry, helping you grow and develop your skills.",
  },
  {
    icon: <RiBookOpenLine className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Kickstart your career in esports with our comprehensive support and opportunities to work in tournament operations.",
  },
];

const Homep: React.FC = () => {
  return (
    <div className="font-play text-white bg-gray-900 p-4">
      <section className="flex justify-between items-center mt-10">
        <div className="max-w">
          <h1 className="text-3xl font-bold mb-5">Become a FACEIT ADMIN</h1>
          <p className="text-xl mb-5">
            We believe the role of Live Tech Support Admin is the perfect
            opportunity for people looking to get their first foot in the door
            of their future esports career.
          </p>
        </div>
        <div className="w-1/2">
          <div className="bg-gradient-to-r from-orange to-grey rounded-full   ti-border-right p-5">
            <img
              src="darwin.png"
              alt="Admin Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      <Tools />
      <section className="mt-20">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="max-w-md mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-5">Benefits</h2>
            <div className="">
              <img
                src="/prem.png"
                alt="Premium Icon"
                className="w-20 h-20 mb-5 "
              />
              <ul className="list-disc list-inside  text-xl font-semibold  p-5">
                <li>Get premium </li>
                <li>FP for helping</li>
                <li>Career opportunities</li>
                <li>IRL hugs</li>
                <li>One free POG POG Frog</li>
              </ul>
            </div>
          </div>

          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-5">Requirements</h2>
            <div className=" p-5 rounded-md">
              <img
                src="/req.png"
                alt="Requirements Icon"
                className="w-20 h-20 mb-5 mx-auto"
              />
              <ul className="list-disc text-xl list-inside font-semibold p-5">
                <li>No Bans</li>
                <li>Good english level</li>
                <li>Love pizza </li>
                <li>Dislike DARWIN</li>
                <li>Donate elo</li>
              </ul>
              <p>
                We require volunteers to contribute a minimum of four hours of
                their precious time per week towards helping live customer
                issues with technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <div>
          <div className="md:my-5 md:w-3/5">
            <HText>More than just a volunteer.</HText>
            <p className="my-5 text-sm text-white font-play">
              We provide world class training,
            </p>
          </div>
          <div className="mt-5 items-center text-sm justify-between gap-8 md:flex">
            {benefits.map((benefit) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            <div>
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                  <HText>
                    MILLIONS OF CUSTOMERS{" "}
                    <span className="text-primary-500 text-orange">HAPPY</span>
                  </HText>
                </div>
              </div>
              <p className="my-5 text-md text-white ">
                Getting assistance on their live matches, a professional
                volunteer team!
              </p>
              <div className="relative mt-16">
                <Link href="/form">
                  <Button>Join Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homep;
