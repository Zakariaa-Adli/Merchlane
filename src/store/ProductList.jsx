import React, { useState, useEffect } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Unable to load products right now. Please try again later.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadProducts();
    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <main className="container my-4" aria-busy="true">
        <p className="mb-0">Loading products…</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container my-4" role="alert">
        <h1 className="h3 mb-3">Product Catalog</h1>
        <p className="text-danger mb-0">{error}</p>
      </main>
    );
  }

  return (
    <main className="container my-4">
      <h1 className="h3 mb-4">Product Catalog</h1>
      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                  />
                </td>
                <td>{product.title}</td>
                <td>${Number(product.price).toFixed(2)}</td>
                <td>{product.description}</td>
                <td className="text-capitalize">{product.category}</td>
                <td>
                  {product.rating?.rate ?? 'N/A'}
                  {product.rating?.count != null ? ` (${product.rating.count} reviews)` : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}