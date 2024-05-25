import { Container } from "@/components/shared/container";
import { HomepageHero } from "@/components/homepage";
import Benefits from "@/components/benefits";
export default function Homepage() {
  return (
    <>
      <title>Volunteer Application Form</title>
      <link rel="icon" href="/favicon.ico" />
      <Container className="pt-[6.4rem]">
        <HomepageHero />
        <Benefits />
      </Container>
    </>
  );
}
