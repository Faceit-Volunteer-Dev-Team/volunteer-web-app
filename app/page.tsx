import { Container } from "@/components/shared/container";
import { HomepageHero } from "@/components/homepage";

export default function Homepage() {
  return (
    <>
      <title>Volunteer Application Form</title>
      <link rel="icon" href="/favicon.ico" />
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HomepageHero />
        </Container>
      </div>
      <div></div>
    </>
  );
}
