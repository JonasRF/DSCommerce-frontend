import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "dsdhshrhhrhrdhdrhrhrh",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 2500.80,
  categories: [
    {
    id: 2,
    name: "Eletronicos"
    },
    {
      id: 3,
      name: "Computadores"
      }
  ]
}

export default function ProductDetails() {
    return(
    <>
    <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-container">
           <ButtonPrimary />
           <ButtonInverse />
          </div>
        </section>
      </main>
    </>
    );
}