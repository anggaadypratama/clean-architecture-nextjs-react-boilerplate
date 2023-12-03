import { ProductRest } from 'data/network/rest/v1/Packages/models/ProductRest';
import { Product } from 'domain/Packages/models/Product';

export const productRestToProductDomain = ({
  id,
  name,
}: ProductRest): Product => ({
  id,
  name,
});

export const productsRestToProductsDomain = (
  products: ProductRest[]
): Product[] => {
  return products.map((product) => productRestToProductDomain(product));
};
