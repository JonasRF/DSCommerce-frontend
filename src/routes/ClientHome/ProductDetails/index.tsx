import { useNavigate, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import * as productService from '../../../services/product-service';
import * as cartService from '../../../services/cart-service';
import { ContextCartCount } from "../../../utils/context-cart";

export default function ProductDetails() {

  const params = useParams();

  const navigate = useNavigate();

  const {setContextCartCount} = useContext(ContextCartCount);

  const [ product, setProduct ] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId))
    .then(response => {
      console.log(response.data);
      setProduct(response.data);
    })
    .catch(() => {
      navigate("/");
      });
  }, []);

  function handleByClick() {
    if(product){
      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
      navigate("/cart");
    }
  }
    return(
      <main>
        <section id="product-details-section" className="dsc-container">
          {
            product && //Renderização condicional
            <ProductDetailsCard product={product} />
          }
          <div className="dsc-btn-container">
          <div onClick={handleByClick}>
           <ButtonPrimary text="Comprar" />
           </div>
           <Link to="/">
           <ButtonInverse text="Inicio" />
           </Link>
           
          </div>
        </section>
      </main>
    );
}