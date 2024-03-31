import CommonHero from "@/components/hero/CommonHero";
import { sharedHosting } from "@/utility/home";


const SharedHosting = () => {
  return (
    <>
      <CommonHero title="Shared" secondTitle="Hosting" price={4.99} list={sharedHosting} />
    </>
  );
};

export default SharedHosting;
