import { Container } from "@/components/shared/container";
import Homep from "@/components/home";
export default function Homepage() {
  return (
    <>
      <title>Volunteer Application Form</title>
      <link rel="icon" href="/favicon.ico" />
      <Container className="pt-[6.4rem] w-full p-4">
        <Homep />
      </Container>
    </>
  );
}
