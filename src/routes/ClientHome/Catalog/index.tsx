import { useEffect, useState } from 'react';
import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import * as productService from '../../../services/product-service';
import './styles.css';
import { ProductDTO } from '../../../models/product';

export default function Catalog() {

    const [ products, setProducts ] = useState<ProductDTO[]>([]);

    useEffect(() => {
      productService.findAll()
      .then(response => {
        setProducts(response.data.content);
      })
    }, []);

    return(
        <main>
        <section id="catalog-section" className="dsc-container">
         <SearchBar />
          <div className="dsc-catalog-cards">
          {
            products.map(product => <CatalogCard key={product.id} product={product} /> )
          }
          </div>
          <ButtonNextPage name="Carregar mais" />
        </section>
      </main>
    );
}