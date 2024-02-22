import { useNavigate, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import * as productService from '../../../services/product-service';

export default function ProductDetails() {

  const params = useParams();

  const navigate = useNavigate();

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

    return(
      <main>
        <section id="product-details-section" className="dsc-container">
          {
            product && //Renderização condicional
            <ProductDetailsCard product={product} />
          }
          <div className="dsc-btn-container">
           <ButtonPrimary name="Comprar" />
           <Link to="/">
           <ButtonInverse name="Inicio" />
           </Link>
           
          </div>
        </section>
      </main>
    );
}