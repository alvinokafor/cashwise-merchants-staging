import { Heading } from "@radix-ui/themes";
import { SEOWrapper, DraftTableLayout } from "@/layouts";

const metaData = {
  title: "React Starter Project",
  name: "description",
  content: "React Starter Project",
};

export default function DraftTableDashboard() {
  return (
    <SEOWrapper metaData={metaData}>
      <DraftTableLayout>
        <Heading className="p-[20px] pt-8 pb-1">Draft</Heading>
      </DraftTableLayout>
    </SEOWrapper>
  );
}
