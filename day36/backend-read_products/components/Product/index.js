import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledButton } from "../Button/Button.styled";
import { ProductCard } from "./Product.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/products/${id}` : null);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  console.log(data);
  console.log(id);

  function getObjectById(array, ids) {
    for (let i = 0; i < array.length; i++) {
      if (array[i]._id === ids) {
        return array[i];
      }
    }
    return null;
  }
  const object = getObjectById(data, id);
  console.log(object);

  return (
    <ProductCard>
      <h2>{object.name}</h2>
      <p>Description: {object.description}</p>
      <p>
        Price: {object.price} {object.currency}
      </p>
      <StyledButton type="button" onClick={() => router.push("/")}>
        Back to all
      </StyledButton>
    </ProductCard>
  );
}
