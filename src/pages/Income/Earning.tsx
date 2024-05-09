import { Heading } from "@radix-ui/themes";
import { SEOWrapper, EarningLayout } from "@/layouts";

const metaData = {
  title: "React Starter Project",
  name: "description",
  content: "React Starter Project",
};

export default function EarningDashboard() {
  return (
    <SEOWrapper metaData={metaData}>
      <EarningLayout>
        <Heading className="p-[20px] pt-8 pb-1">Earning</Heading>
      </EarningLayout>
    </SEOWrapper>
  );
}
