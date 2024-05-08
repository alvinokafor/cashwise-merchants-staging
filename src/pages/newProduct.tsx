import { Heading } from "@radix-ui/themes";
import { SEOWrapper, NewProdLayout } from "@/layouts";
import { useExampleQuery, ExampleAdapter } from "@/adapters/ExampleAdapter";
import { queryKeys } from "@/lib/constants";

const metaData = {
  title: "React Starter Project",
  name: "description",
  content: "React Starter Project",
};

export default function NewProduct() {
  //example of how to use the query adapter, this returns all the data from react query
  const { data, isLoading, error, isError, ...rest } = useExampleQuery(
    ExampleAdapter.exampleQueryApiCall1,
    [queryKeys.EXAMPLE_KEY],
    "" // pass in any params you may have
  );

  return (
    <SEOWrapper metaData={metaData}>
      <NewProdLayout>
        <Heading className="p-[20px] pt-8 pb-1">New Product</Heading>
      </NewProdLayout>
    </SEOWrapper>
  );
}
