import { Button } from "./shared/button";
import { Hero } from "./shared/hero";

export const HomepageHero = () => (
  <Hero>
    <div className="relative flex flex-col md:flex-row md:justify-between md:items-start">
      <div className="md:w-1/2">
        <div>
          <p className="mt-8 text-sm">
            We believe the role of Live Tech Support Admin is the perfect
            opportunity for people looking to get their first foot in the door
            of their future esports career. Despite being a volunteer position,
            you'll have a great opportunity to participate in gaming nights with
            full-time staff and become a familiar cog within the FACEIT machine.
          </p>
        </div>
        <Button
          href="form"
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] mt-4"
          variant="primary"
          size="large"
        >
          <span className="text-orange">Apply Now!</span>
        </Button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="border rounded-lg p-4 bg-white bg-opacity-10 text-white">
          <h3 className="text-lg font-bold mb-4">Requirements to Apply</h3>
          <table className="w-full text-left text-md">
            <tbody>
              <tr>
                <td className="py-2 border-b border-gray-200">
                  Toxicity check
                </td>
                <td className="py-2 border-b border-gray-200">
                  No bans for the past 3 months
                </td>
              </tr>
              <tr>
                <td className="py-2 border-b border-gray-200">
                  Good english speaken/written
                </td>
                <td className="py-2 border-b border-gray-200">
                  Have a good understanding of english{" "}
                </td>
              </tr>
              <tr>
                <td className="py-2 border-b border-gray-200">
                  No pinneapple enjoyer
                </td>
                <td className="py-2 border-b border-gray-200">
                  You MUST hate pinneaple on pizza
                </td>
              </tr>
              <tr>
                <td className="py-2">Darwin</td>
                <td className="py-2">
                  DARWIN DARWIN DARWIN DARWIN DARWIN DARWIN
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Hero>
);
