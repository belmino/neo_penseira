import Rating from "../components/Rating";
import { hideLoading, showLoading } from "../utils";

const HomeScreen = {
  render: async () => {
    showLoading();
    const response = await fetch('http://localhost:5000/api/products', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    hideLoading()
    if (!response || !response.ok) {
      return '<div>Error in getting data</div>';
    }
    const products = await response.json();
    return `
        <ul class="products">
        ${products
    .map(
      (product) => `
      <li>
        <div class="product">
          <a href="/#/product/${product.id}">
              <img src="${product.image}" alt="${product.name}" />
          </a>
          <div class="product-name">
            <a href="/#/product/1">
                ${product.name}
            </a>
          </div>
          <div class="product-rating">
            ${Rating.render({
              value: product.rating,
              text: `${product.numReviews} reviews`,
            })}
          </div>
          <div class="product-brand">
            ${product.brand}
          </div>
          <div class="product-price">
            $${product.price}
          </div>
        </div>
      </li>
                `,
    )
    .join('\n')}
        </ul>
        `;
  },
};
export default HomeScreen;
