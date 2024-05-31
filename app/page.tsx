import { Container } from "@/components/shared/container";
import { HomepageHero } from "@/components/homepage";
import Benefits from "@/components/benefits";
import Homep from "@/components/home";
export default function Homepage() {
  return (
    <>
      <title>Volunteer Application Form</title>
      <link rel="icon" href="/favicon.ico" />
      <Container className="pt-[6.4rem]">
        <Homep />
        <Benefits />
      </Container>
    </>
  );
}
