import { Heading } from "@radix-ui/themes";
import { SEOWrapper, StoreDashLayout } from "@/layouts";

const metaData = {
  title: "React Starter Project",
  name: "description",
  content: "React Starter Project",
};

export default function StoreDetails() {
  return (
    <SEOWrapper metaData={metaData}>
      <StoreDashLayout>
        <Heading className="p-[20px] pt-8 pb-1">Store Dashboard</Heading>
      </StoreDashLayout>
    </SEOWrapper>
  );
}
