import { Heading } from "@radix-ui/themes";
import { SEOWrapper, DraftTableLayout } from "@/layouts";
import { useExampleQuery, ExampleAdapter } from "@/adapters/ExampleAdapter";
import { queryKeys } from "@/lib/constants";

const metaData = {
  title: "React Starter Project",
  name: "description",
  content: "React Starter Project",
};

export default function DraftTableDashboard() {
  //example of how to use the query adapter, this returns all the data from react query
  const { data, isLoading, error, isError, ...rest } = useExampleQuery(
    ExampleAdapter.exampleQueryApiCall1,
    [queryKeys.EXAMPLE_KEY],
    "" // pass in any params you may have
  );

  return (
    <SEOWrapper metaData={metaData}>
      <DraftTableLayout>
        <Heading className="p-[20px] pt-8 pb-1">Draft</Heading>
      </DraftTableLayout>
    </SEOWrapper>
  );
}
