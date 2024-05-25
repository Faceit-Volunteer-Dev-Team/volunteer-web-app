import React from "react";

import HText from "./shared/HText";
import { Button } from "./shared/button";

import { RiHomeOfficeFill, RiGroup2Fill, RiBookOpenLine } from "react-icons/ri";

type BenefitProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Benefit = ({ icon, title, description }: BenefitProps) => {
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

function Benefits() {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <div>
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>More than just a volunteer.</HText>
          <p className="my-5 text-sm text-white font-play">
            We provide world class training,
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-5 items-center text-sm justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitProps) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <HText>
                  MILLIONS OF CUSTOMERS{" "}
                  <span className="text-primary-500 text-orange">HAPPY</span>
                </HText>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="my-5 text-md text-white ">
              Getting assistance on their live matches, a professional volunteer
              team!
            </p>

            {/* BUTTON */}
            <div className="relative mt-16">
              <Button>Join Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
