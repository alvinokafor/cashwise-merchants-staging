import { Heading } from "@radix-ui/themes";
import { SEOWrapper, AppLayout } from "@/layouts";

const metaData = {
  title: "React Starter Project",
  name: "description",
  content: "React Starter Project",
};

export default function Home() {
  return (
    <SEOWrapper metaData={metaData}>
      <AppLayout>
        <Heading className="p-[20px] pt-8 pb-1">Dashboard</Heading>
      </AppLayout>
    </SEOWrapper>
  );
}
