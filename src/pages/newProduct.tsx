import { Heading } from "@radix-ui/themes";
import { SEOWrapper, NewProdLayout } from "@/layouts";

const metaData = {
  title: "React Starter Project",
  name: "description",
  content: "React Starter Project",
};

export default function NewProduct() {
  return (
    <SEOWrapper metaData={metaData}>
      <NewProdLayout>
        <Heading className="p-[20px] pt-8 pb-1">New Product</Heading>
      </NewProdLayout>
    </SEOWrapper>
  );
}
