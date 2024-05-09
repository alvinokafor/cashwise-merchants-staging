import { Heading } from "@radix-ui/themes";
import { SEOWrapper, ProdDashLayout } from "@/layouts";

const metaData = {
  title: "React Starter Project",
  name: "description",
  content: "React Starter Project",
};

export default function ProductDashboard() {
  return (
    <SEOWrapper metaData={metaData}>
      <ProdDashLayout>
        <Heading className="p-[20px] pt-8 pb-1">Products Dashboard</Heading>
      </ProdDashLayout>
    </SEOWrapper>
  );
}
