import { Heading } from "@radix-ui/themes";
import { SEOWrapper, StoreTableLayout } from "@/layouts";

const metaData = {
  title: "React Starter Project",
  name: "description",
  content: "React Starter Project",
};

export default function StoreList() {
  return (
    <SEOWrapper metaData={metaData}>
      <StoreTableLayout>
        <Heading className="p-[20px] pt-8 pb-1">Stores</Heading>
      </StoreTableLayout>
    </SEOWrapper>
  );
}
