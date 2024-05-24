import { Button, Highlight } from "./shared/button";
import { Hero, HeroTitle, HeroSubtitle } from "./shared/hero";
import { Logo } from "./icons/logo";
export const HomepageHero = () => (
  <Hero>
    <div className="relative">
      <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
        <Logo />
      </div>
      <div>
        <p className="mt-8 text-sm">
          We believe the role of Live Tech Support Admin is the perfect
          opportunity for people looking to get their first foot in the door of
          their future esports career. Despite being a volunteer position,
          you&ll have a great opportunity to participate in gaming nights with
          fulltime staff and become a familiar cog within the FACEIT machine.
        </p>
      </div>
    </div>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/"
      variant="primary"
      size="large"
    >
      <span className="text-white ">Apply Now !</span>
    </Button>
  </Hero>
);
