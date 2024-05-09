import { Heading } from "@radix-ui/themes";
import { SEOWrapper, ReleasedTableLayout } from "@/layouts";

const metaData = {
  title: "React Starter Project",
  name: "description",
  content: "React Starter Project",
};

export default function ReleasedTableDashboard() {
  return (
    <SEOWrapper metaData={metaData}>
      <ReleasedTableLayout>
        <Heading className="p-[20px] pt-8 pb-1">Released</Heading>
      </ReleasedTableLayout>
    </SEOWrapper>
  );
}
