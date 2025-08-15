import React from 'react';
import './App.css';
import { RawImg } from './components';

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bevan:wght@400&family=Saira:wght@400;500&family=Roboto+Serif:wght@400;500;600&family=Mona+Sans:wght@400;500&family=Fraunces:wght@600;700&display=swap"
      />
      <div className="homepage-container">
        {/* Header Section */}
        <header className="header">
          <div className="logo">Jazzy</div>
          <div className="logo-mask">
            <div className="mask-base"></div>
            <div className="union-left">
              <div className="union-left-tall"></div>
              <div className="union-left-short"></div>
            </div>
            <div className="union-right">
              <div className="union-right-short"></div>
              <div className="union-right-tall"></div>
            </div>
            <div className="home-text">Home</div>
            <RawImg
              image="https://api.builder.io/api/v1/image/assets/TEMP/62fe0344426367ea5deb9bef8bcba3803fd431fa?width=188"
              altText=""
              className="noise-overlay"
            />
          </div>
          <nav className="navigation">
            <div className="nav-item">
              <span>Shop</span>
              <RawImg
                image="https://api.builder.io/api/v1/image/assets/TEMP/f25ef6f441ada9900de1a1b57560dc2467ca9193?width=16"
                altText="dropdown"
                className="dropdown-icon"
              />
            </div>
            <div className="nav-item">
              <RawImg
                image="https://api.builder.io/api/v1/image/assets/TEMP/f0d1c3bec39487686ac65ed7fa8bbc71f6855070?width=82"
                altText="Pages"
                className="pages-text"
              />
              <svg className="dropdown-icon" width="9" height="6" viewBox="0 0 9 6" fill="none">
                <path d="M8.02246 0.628906C8.13228 0.595656 8.23555 0.628574 8.25293 0.631836C8.36287 0.652522 8.45914 0.720943 8.52539 0.787109C8.5917 0.853415 8.66 0.950345 8.68066 1.06055C8.68325 1.07413 8.71924 1.18139 8.68262 1.29492C8.65156 1.39119 8.57575 1.4896 8.46582 1.61328C8.23484 1.87315 7.73837 2.36514 6.70898 3.39453C5.67932 4.4242 5.18755 4.92049 4.92773 5.15137C4.804 5.26131 4.70572 5.33706 4.60937 5.36816C4.49643 5.40462 4.38865 5.36964 4.375 5.36719C4.33002 5.35905 4.29333 5.34003 4.2666 5.32324C4.23894 5.30583 4.20949 5.28242 4.17773 5.25586C4.11396 5.20251 4.02179 5.11752 3.88379 4.98438C3.6061 4.71645 3.12637 4.23867 2.28223 3.39453C1.43857 2.55086 0.961313 2.07166 0.693359 1.79395C0.560139 1.65587 0.47427 1.5638 0.420898 1.5C0.394377 1.46829 0.371891 1.43875 0.354492 1.41113C0.33761 1.38431 0.317724 1.3471 0.30957 1.30176C0.263463 1.04464 0.383717 0.7738 0.630859 0.666016C0.762235 0.608788 0.924037 0.604368 1.05859 0.654297C1.08842 0.66536 1.11071 0.682382 1.1123 0.683594C1.11943 0.688785 1.12649 0.693824 1.13184 0.698242C1.14299 0.70747 1.15676 0.719682 1.1709 0.732422C1.19952 0.758211 1.23814 0.794303 1.28516 0.838867C1.37997 0.92874 1.51291 1.05667 1.67383 1.21387C1.99585 1.52844 2.43364 1.96226 2.91602 2.44434L4.49512 4.02246L6.08691 2.43359C7.02369 1.49775 7.47445 1.04313 7.71582 0.831055C7.83106 0.729801 7.92661 0.658009 8.02246 0.628906Z" fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="0.4"/>
              </svg>
            </div>
            <span className="nav-link">Blogs</span>
            <span className="nav-link">Contact</span>
          </nav>
          <div className="header-actions">
            <RawImg
              image="https://api.builder.io/api/v1/image/assets/TEMP/508eb1e4560af192da0601187006f4f49944c4d2?width=56"
              altText="Search"
              className="search-icon"
            />
            <RawImg
              image="https://api.builder.io/api/v1/image/assets/TEMP/aa2e19b719cfa3fb9f8963be663e608d7b9b60dc?width=68"
              altText="Cart"
              className="cart-icon"
            />
            <button className="login-btn">Login</button>
          </div>
        </header>

        {/* Banner Section */}
        <section className="banner">
          <RawImg
            image="https://api.builder.io/api/v1/image/assets/TEMP/9e857d2d796baa48891d9095cd165e99cb054f59?width=3808"
            altText="Banner noise"
            className="banner-noise"
          />
          <RawImg
            image="https://api.builder.io/api/v1/image/assets/TEMP/d15e2246a6d533bbe4aa8f8c2025c48cbde27993?width=3808"
            altText="Banner vector"
            className="banner-vector"
          />
          <div className="banner-categories">
            <button className="category-btn">Apparel</button>
            <button className="category-btn">Accessories</button>
            <button className="category-btn">Jewellery</button>
          </div>
          <div className="banner-content">
            <div className="banner-text">
              <h1 className="banner-title">Step Into the Spotlight: Shop Our Latest Collection</h1>
              <p className="banner-description">Time to jazz up your wardrobe! Our latest arrivals are here to add that extra sparkle to your everyday.</p>
            </div>
            <div className="banner-actions">
              <button className="shop-now-btn">Shop now</button>
              <span className="phone-number">+14(123) 456 6789</span>
            </div>
          </div>
          <RawImg
            image="https://api.builder.io/api/v1/image/assets/TEMP/27b8709fd042479dca5353c9a845ad0a196f520f?width=1822"
            altText="Model"
            className="banner-model"
          />
          <div className="banner-slider">
            <button className="slider-btn">
              <svg width="38" height="36" viewBox="0 0 38 36" fill="none">
                <rect x="1" y="1" width="36" height="34" rx="4" stroke="#FAFAFA"></rect>
                <path d="M23.1787 24.4932C23.2244 24.6439 23.1805 24.7745 23.1689 24.8359C23.1396 24.9925 23.0389 25.1408 22.9307 25.249C22.8224 25.3573 22.6742 25.4579 22.5176 25.4873C22.4599 25.4981 22.3256 25.5462 22.1699 25.4961C22.0315 25.4514 21.8756 25.3355 21.6465 25.1318C21.1757 24.7134 20.28 23.8112 18.3936 21.9248C16.5065 20.0378 15.6047 19.1434 15.1865 18.6729C14.983 18.4438 14.868 18.2879 14.8232 18.1494C14.7732 17.9943 14.8206 17.8591 14.8311 17.8008C14.8406 17.7477 14.8641 17.7007 14.8896 17.6602C14.9157 17.6189 14.9517 17.5721 14.998 17.5166C15.0915 17.4048 15.2437 17.2398 15.4873 16.9873C15.9762 16.4805 16.8487 15.6045 18.3936 14.0596C19.9384 12.5147 20.8145 11.6423 21.3213 11.1533C21.574 10.9095 21.7388 10.7566 21.8506 10.6631C21.9063 10.6165 21.9537 10.5808 21.9951 10.5547C22.0357 10.5291 22.0826 10.5057 22.1357 10.4961C22.5407 10.4234 22.9546 10.614 23.1172 10.9873C23.2049 11.1888 23.2121 11.44 23.1357 11.6455C23.124 11.6769 23.1054 11.7015 23.1035 11.7041C23.0967 11.7134 23.0891 11.7229 23.082 11.7314C23.0673 11.7492 23.0481 11.7716 23.0254 11.7969C22.9795 11.8478 22.9146 11.9179 22.833 12.0039C22.6695 12.1764 22.4357 12.4179 22.1484 12.7119C21.5735 13.3005 20.781 14.1012 19.8994 14.9834L16.8926 17.9922L19.9189 21.0215C21.6347 22.739 22.4593 23.5577 22.8428 23.9941C23.0297 24.2069 23.1372 24.3565 23.1787 24.4932Z" fill="#FAFAFA" stroke="#FAFAFA" strokeWidth="0.4"></path>
              </svg>
            </button>
            <button className="slider-btn">
              <svg width="38" height="36" viewBox="0 0 38 36" fill="none">
                <rect x="1" y="1" width="36" height="34" rx="4" stroke="#FAFAFA"></rect>
                <path d="M14.8213 24.4932C14.7756 24.6439 14.8195 24.7745 14.8311 24.8359C14.8604 24.9925 14.9611 25.1408 15.0693 25.249C15.1776 25.3573 15.3258 25.4579 15.4824 25.4873C15.5401 25.4981 15.6744 25.5462 15.8301 25.4961C15.9685 25.4514 16.1244 25.3355 16.3535 25.1318C16.8243 24.7134 17.72 23.8112 19.6064 21.9248C21.4935 20.0378 22.3953 19.1434 22.8135 18.6729C23.017 18.4438 23.132 18.2879 23.1768 18.1494C23.2268 17.9943 23.1794 17.8591 23.1689 17.8008C23.1594 17.7477 23.1359 17.7007 23.1104 17.1602C23.0843 17.6189 23.0483 17.5721 23.002 17.5166C22.9085 17.4048 22.7563 17.2398 22.5127 16.9873C22.0238 16.4805 21.1513 15.6045 19.6064 14.0596C18.0616 12.5147 17.1855 11.6423 16.6787 11.1533C16.426 10.9095 16.2612 10.7566 16.1494 10.6631C16.0937 10.6165 16.0463 10.5808 16.0049 10.5547C15.9643 10.5291 15.9174 10.5057 15.8643 10.4961C15.4593 10.4234 15.0454 10.614 14.8828 10.9873C14.7951 11.1888 14.7879 11.44 14.8643 11.6455C14.876 11.6769 14.8946 11.7015 14.8965 11.7041C14.9033 11.7134 14.9109 11.7229 14.918 11.7314C14.9327 11.7492 14.9519 11.7716 14.9746 11.7969C15.0205 11.8478 15.0854 11.9179 15.167 12.0039C15.3305 12.1764 15.5643 12.4179 15.8516 12.7119C16.4265 13.3005 17.219 14.1012 18.1006 14.9834L21.1074 17.9922L18.0811 21.0215C16.3653 22.739 15.5407 23.5577 15.1572 23.9941C14.9703 24.2069 14.8628 24.3565 14.8213 24.4932Z" fill="#FAFAFA" stroke="#FAFAFA" strokeWidth="0.4"></path>
              </svg>
            </button>
          </div>
        </section>

        {/* Services Cards */}
        <section className="services-cards">
          <div className="service-card">
            <RawImg
              image="https://api.builder.io/api/v1/image/assets/TEMP/3d4b93d0e5b9ecc9be4cef6824755650d9278af2?width=90"
              altText="Free delivery"
              className="service-icon"
            />
            <div className="service-text">
              <h3>Free Delivery</h3>
              <p>Free Shipping on all Order</p>
            </div>
          </div>
          <div className="service-divider"></div>
          <div className="service-card">
            <RawImg
              image="https://api.builder.io/api/v1/image/assets/TEMP/107822a168839db3c53677e5e433f58a2deb00d0?width=90"
              altText="Online support"
              className="service-icon"
            />
            <div className="service-text">
              <h3>Online Support 24/7</h3>
              <p>Online support 24 hours a day</p>
            </div>
          </div>
          <div className="service-divider"></div>
          <div className="service-card">
            <RawImg
              image="https://api.builder.io/api/v1/image/assets/TEMP/0b3da0a8a0892814c8286d281b962f1c5b9ab22c?width=90"
              altText="Member discount"
              className="service-icon"
            />
            <div className="service-text">
              <h3>Member Discount</h3>
              <p>Onevery order over $120.00</p>
            </div>
          </div>
          <div className="service-divider"></div>
          <div className="service-card">
            <RawImg
              image="https://api.builder.io/api/v1/image/assets/TEMP/0485bd6dceb392fcf3cc7cf15deb8de43137d7e1?width=90"
              altText="Return policy"
              className="service-icon"
            />
            <div className="service-text">
              <h3>60 Days Return</h3>
              <p>30 day free return Policy</p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <div className="section-header">
            <h2>Our Exclusive Category</h2>
            <a href="#" className="explore-link">Explore more collection</a>
          </div>
          <div className="categories-grid">
            <div className="category-card category-apparel">
              <RawImg
                image="https://api.builder.io/api/v1/image/assets/TEMP/e74993768006182972fbd152cb864aa49a8cbcd2?width=892"
                altText="Boutique apparel"
                className="category-image"
              />
              <h3>Boutique apparel</h3>
            </div>
            <div className="category-card category-accessories">
              <RawImg
                image="https://api.builder.io/api/v1/image/assets/TEMP/21613e27ee66252b491e6bbb8bf1294c9043c677?width=892"
                altText="Accessories"
                className="category-image"
              />
              <h3>Accessories</h3>
            </div>
            <div className="category-card category-jewellery">
              <RawImg
                image="https://api.builder.io/api/v1/image/assets/TEMP/26062a6b80f379e3a98945e939f33368f69c398e?width=892"
                altText="Jewellery"
                className="category-image"
              />
              <h3>Jewellery</h3>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="products-section">
          <div className="section-header">
            <h2>Features products</h2>
            <div className="product-slider-arrows">
              <button className="product-arrow">
                <svg width="38" height="35" viewBox="0 0 38 35" fill="none">
                  <rect x="1" y="0.5" width="36" height="34" rx="4" stroke="#7C7E93"></rect>
                  <path d="M23.1787 23.9932C23.2244 24.1439 23.1805 24.2745 23.1689 24.3359C23.1396 24.4925 23.0389 24.6408 22.9307 24.749C22.8224 24.8573 22.6742 24.9579 22.5176 24.9873C22.4599 24.9981 22.3256 25.0462 22.1699 24.9961C22.0315 24.9514 21.8756 24.8355 21.6465 24.6318C21.1757 24.2134 20.28 23.3112 18.3936 21.4248C16.5065 19.5378 15.6047 18.6434 15.1865 18.1729C14.983 17.9438 14.868 17.7879 14.8232 17.6494C14.7732 17.4943 14.8206 17.3591 14.8311 17.3008C14.8406 17.2477 14.8641 17.2007 14.8896 17.1602C14.9157 17.1189 14.9517 17.0721 14.998 17.0166C15.0915 16.9048 15.2437 16.7398 15.4873 16.4873C15.9762 15.9805 16.8487 15.1045 18.3936 13.5596C19.9384 12.0147 20.8145 11.1423 21.3213 10.6533C21.574 10.4095 21.7388 10.2566 21.8506 10.1631C21.9063 10.1165 21.9537 10.0808 21.9951 10.0547C22.0357 10.0291 22.0826 10.0057 22.1357 9.99609C22.5407 9.9234 22.9546 10.114 23.1172 10.4873C23.2049 10.6888 23.2121 10.94 23.1357 11.1455C23.124 11.1769 23.1054 11.2015 23.1035 11.2041C23.0967 11.2134 23.0891 11.2229 23.082 11.2314C23.0673 11.2492 23.0481 11.2716 23.0254 11.2969C22.9795 11.3478 22.9146 11.4179 22.833 11.5039C22.6695 11.6764 22.4357 11.9179 22.1484 12.2119C21.5735 12.8005 20.781 13.6012 19.8994 14.4834L16.8926 17.4922L19.9189 20.5215C21.6347 22.239 22.4593 23.0577 22.8428 23.4941C23.0297 23.7069 23.1372 23.8565 23.1787 23.9932Z" fill="#7C7E93" stroke="#7C7E93" strokeWidth="0.4"></path>
                </svg>
              </button>
              <button className="product-arrow">
                <svg width="38" height="35" viewBox="0 0 38 35" fill="none">
                  <rect x="1" y="0.5" width="36" height="34" rx="4" stroke="#7C7E93"></rect>
                  <path d="M14.8213 23.9932C14.7756 24.1439 14.8195 24.2745 14.8311 24.3359C14.8604 24.4925 14.9611 24.6408 15.0693 24.749C15.1776 24.8573 15.3258 24.9579 15.4824 24.9873C15.5401 24.9981 15.6744 25.0462 15.8301 24.9961C15.9685 24.9514 16.1244 24.8355 16.3535 24.6318C16.8243 24.2134 17.72 23.3112 19.6064 21.4248C21.4935 19.5378 22.3953 18.6434 22.8135 18.1729C23.017 17.9438 23.132 17.7879 23.1768 17.6494C23.2268 17.4943 23.1794 17.3591 23.1689 17.3008C23.1594 17.2477 23.1359 17.2007 23.1104 17.1602C23.0843 17.1189 23.0483 17.0721 23.002 17.0166C22.9085 16.9048 22.7563 16.7398 22.5127 16.4873C22.0238 15.9805 21.1513 15.1045 19.6064 13.5596C18.0616 12.0147 17.1855 11.1423 16.6787 10.6533C16.426 10.4095 16.2612 10.2566 16.1494 10.1631C16.0937 10.1165 16.0463 10.0808 16.0049 10.0547C15.9643 10.0291 15.9174 10.0057 15.8643 9.99609C15.4593 9.9234 15.0454 10.114 14.8828 10.4873C14.7951 10.6888 14.7879 10.94 14.8643 11.1455C14.876 11.1769 14.8946 11.2015 14.8965 11.2041C14.9033 11.2134 14.9109 11.2229 14.918 11.2314C14.9327 11.2492 14.9519 11.2716 14.9746 11.2969C15.0205 11.3478 15.0854 11.4179 15.167 11.5039C15.3305 11.6764 15.5643 11.9179 15.8516 12.2119C16.4265 12.8005 17.219 13.6012 18.1006 14.4834L21.1074 17.4922L18.0811 20.5215C16.3653 22.239 15.5407 23.0577 15.1572 23.4941C14.9703 24.2069 14.8628 23.8565 14.8213 23.9932Z" fill="#7C7E93" stroke="#7C7E93" strokeWidth="0.4"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <RawImg image="https://placehold.co/300x300/f5f5f5/f5f5f5" altText="Gold Ring" className="product-image" />
              <h3>Gold Ring</h3>
              <span className="product-price">$89.99</span>
            </div>
            <div className="product-card">
              <RawImg image="https://placehold.co/300x300/e8b4cb/e8b4cb" altText="Elegant Dress" className="product-image" />
              <h3>Elegant Dress</h3>
              <span className="product-price">$129.99</span>
            </div>
            <div className="product-card">
              <RawImg image="https://placehold.co/300x300/4a5568/4a5568" altText="Cap" className="product-image" />
              <h3>Cap</h3>
              <span className="product-price">$24.99</span>
            </div>
            <div className="product-card">
              <RawImg image="https://placehold.co/300x300/f7fafc/f7fafc" altText="Fragrance" className="product-image" />
              <h3>Fragrance</h3>
              <span className="product-price">$79.99</span>
            </div>
            <div className="product-card">
              <RawImg image="https://placehold.co/300x300/e2e8f0/e2e8f0" altText="Elegant Dress" className="product-image" />
              <h3>Elegant Dress</h3>
              <span className="product-price">$149.99</span>
            </div>
            <div className="product-card">
              <RawImg image="https://placehold.co/300x300/4a5568/4a5568" altText="Sunglasses" className="product-image" />
              <h3>Sunglasses</h3>
              <span className="product-price">$59.99</span>
            </div>
          </div>
        </section>

        {/* Offer Section */}
        <section className="offer-section">
          <RawImg
            image="https://api.builder.io/api/v1/image/assets/TEMP/2424a1326a000b74acc04ce789d8bcdf1d9752ae?width=3440"
            altText="Offer background"
            className="offer-bg"
          />
          <RawImg
            image="https://api.builder.io/api/v1/image/assets/TEMP/a0ffcf0e5d7d31fdbaa1e182ae90a0b06a1096cf?width=3440"
            altText="Offer overlay"
            className="offer-overlay"
          />
          <RawImg
            image="https://api.builder.io/api/v1/image/assets/TEMP/bb3f05cc9e02bf9e10953cae9eaa1f0e558cb5d8?width=2208"
            altText="Decorative element"
            className="offer-decoration"
          />
          <RawImg
            image="https://api.builder.io/api/v1/image/assets/TEMP/2069ec74ec284c623a06c35d4f859ea0fe39a41b?width=638"
            altText="Jewelry product"
            className="offer-product"
          />
          <div className="offer-content">
            <span className="offer-badge">new collection</span>
            <h2>Get ready to turn heads with our latest collection!</h2>
          </div>
          <div className="offer-info">
            <p>Elevate your wardrobe with pieces that make a statement—because you deserve to shine.</p>
            <a href="#" className="shop-products-link">Shop products</a>
          </div>
        </section>

        {/* Deal of the Day */}
        <section className="deals-section">
          <div className="section-header">
            <h2>Deal of the day</h2>
            <div className="deal-indicators">
              <span className="indicator active">01</span>
              <span className="indicator">02</span>
              <span className="indicator">03</span>
            </div>
          </div>
          <div className="deals-grid">
            <div className="deal-card">
              <RawImg image="https://placehold.co/300x300/1e3a8a/1e3a8a" altText="Blue earrings" className="deal-image" />
              <h3>Blue earrings</h3>
              <div className="deal-price">
                <span className="current-price">$89.99</span>
                <span className="original-price">$129.99</span>
              </div>
            </div>
            <div className="deal-card">
              <RawImg image="https://placehold.co/300x400/f5f5dc/f5f5dc" altText="Coat set" className="deal-image tall" />
              <h3>Coat set</h3>
              <div className="deal-price">
                <span className="current-price">$199.99</span>
                <span className="original-price">$299.99</span>
              </div>
            </div>
            <div className="deal-card">
              <RawImg image="https://placehold.co/300x300/d2b48c/d2b48c" altText="Cosmetic container" className="deal-image" />
              <h3>Cosmetic container</h3>
              <div className="deal-price">
                <span className="current-price">$49.99</span>
                <span className="original-price">$79.99</span>
              </div>
            </div>
            <div className="deal-card">
              <RawImg image="https://placehold.co/300x300/cd853f/cd853f" altText="Hand bag" className="deal-image" />
              <h3>Hand bag</h3>
              <div className="deal-price">
                <span className="current-price">$159.99</span>
                <span className="original-price">$199.99</span>
              </div>
            </div>
            <div className="deal-card">
              <RawImg image="https://placehold.co/300x300/ffc0cb/ffc0cb" altText="Face Serum" className="deal-image" />
              <h3>Face Serum</h3>
              <div className="deal-price">
                <span className="current-price">$39.99</span>
                <span className="original-price">$59.99</span>
              </div>
            </div>
            <div className="deal-card">
              <RawImg image="https://placehold.co/300x300/f0f8ff/f0f8ff" altText="Body spray" className="deal-image" />
              <h3>Body spray</h3>
              <div className="deal-price">
                <span className="current-price">$29.99</span>
                <span className="original-price">$49.99</span>
              </div>
            </div>
          </div>
          <button className="view-all-btn">View all products</button>
        </section>

        {/* Testimonial Section */}
        <section className="testimonial-section">
          <RawImg
            image="https://api.builder.io/api/v1/image/assets/TEMP/1a107ec985b5faf58baec2c13f3eb5531da4aeab?width=3840"
            altText="Testimonial background"
            className="testimonial-bg"
          />
          <div className="testimonial-content">
            <div className="testimonial-avatars">
              <svg width="317" height="127" viewBox="0 0 317 127" fill="none">
                <circle cx="18" cy="36" r="17.5" fill="url(#pattern0_232_473)"></circle>
                <circle cx="18" cy="36" r="17.5" fill="black" fillOpacity="0.5"></circle>
                <circle cx="18" cy="36" r="17.5" stroke="black"></circle>
                <circle cx="79.5" cy="36" r="24" fill="url(#pattern1_232_473)"></circle>
                <circle cx="79.5" cy="36" r="24" fill="black" fillOpacity="0.5"></circle>
                <circle cx="79.5" cy="36" r="24" stroke="black"></circle>
                <circle cx="158.5" cy="36" r="35" fill="url(#pattern2_232_473)" stroke="white" strokeWidth="2"></circle>
                <circle cx="237.5" cy="36" r="24" fill="url(#pattern3_232_473)"></circle>
                <circle cx="237.5" cy="36" r="24" fill="black" fillOpacity="0.5"></circle>
                <circle cx="237.5" cy="36" r="24" stroke="black"></circle>
                <circle cx="299" cy="36" r="17.5" fill="url(#pattern4_232_473)"></circle>
                <circle cx="299" cy="36" r="17.5" fill="black" fillOpacity="0.5"></circle>
                <circle cx="299" cy="36" r="17.5" stroke="black"></circle>
                <defs>
                  <pattern id="pattern0_232_473" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_232_473" transform="scale(0.005)"></use>
                  </pattern>
                  <pattern id="pattern1_232_473" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image1_232_473" transform="scale(0.000625391)"></use>
                  </pattern>
                  <pattern id="pattern2_232_473" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image2_232_473" transform="scale(0.005)"></use>
                  </pattern>
                  <pattern id="pattern3_232_473" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image3_232_473" transform="scale(0.000797448)"></use>
                  </pattern>
                  <pattern id="pattern4_232_473" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image4_232_473" transform="scale(0.005)"></use>
                  </pattern>
                </defs>
              </svg>
            </div>
            <blockquote>"I can't get enough of this collection! Each piece has a jazzy vibe that elevates my outfits. If you're into chic, eye-catching jewellery, this is a must-have."</blockquote>
            <cite>Cameron Williamson</cite>
          </div>
        </section>

        {/* Blog Section */}
        <section className="blog-section">
          <div className="section-header">
            <h2>Our latest blogs</h2>
            <a href="#" className="view-all-link">View all</a>
          </div>
          <div className="blog-grid">
            <article className="blog-card">
              <RawImg image="https://placehold.co/400x250/ddd6fe/ddd6fe" altText="Blog 1" className="blog-image" />
              <h3>Style Secrets: Tricks and Tips for the Modern</h3>
              <time>March 15, 2024</time>
            </article>
            <article className="blog-card">
              <RawImg image="https://placehold.co/400x250/fef3c7/fef3c7" altText="Blog 2" className="blog-image" />
              <h3>The Art of Accessorizing: Elevate Your Look</h3>
              <time>March 12, 2024</time>
            </article>
            <article className="blog-card">
              <RawImg image="https://placehold.co/400x250/1f2937/1f2937" altText="Blog 3" className="blog-image" />
              <h3>Behind the Elegance: Modern Trends in Classic Styles</h3>
              <time>March 10, 2024</time>
            </article>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-info">
              <svg width="62" height="43" viewBox="0 0 62 43" fill="none" className="newsletter-icon">
                <path d="M27.3932 27.4941L33.6158 31.5791L44.1363 38.4727L56.1607 6.14941L27.3932 27.4941ZM23.4996 36.8594L30.4996 32.5947L25.8414 29.4941L23.4996 36.8594ZM20.0435 24.0205L21.6666 34.1748L23.9322 27.0977L23.9332 27.0938L23.9732 26.9893C24.018 26.887 24.0768 26.7912 24.1471 26.7041L24.1529 26.6963C24.2096 26.6312 24.2736 26.5726 24.3424 26.5205L24.3443 26.5186L45.5123 10.8916L20.0435 24.0205ZM6.17831 15.3877L18.6578 21.9043L49.733 5.88477L6.17831 15.3877ZM60.0797 2.29688C60.088 2.37066 60.0883 2.44453 60.0836 2.51855C60.0856 2.52127 60.0877 2.52401 60.0894 2.52637C60.0921 2.52994 60.0948 2.53323 60.0963 2.53516L60.0973 2.53711H60.0982L60.1519 2.60742L60.15 2.69629C60.147 2.8338 60.1218 2.97036 60.0748 3.09961L60.0738 3.10156L45.9391 40.8789C45.8736 41.0573 45.77 41.2195 45.6334 41.3516C45.4967 41.4837 45.3315 41.5832 45.151 41.6426C44.9705 41.7019 44.7788 41.7195 44.5904 41.6943C44.4021 41.6691 44.2216 41.6018 44.0631 41.4971V41.4961L32.858 34.1328L21.9693 40.835L21.9537 40.8447L21.9361 40.8516L21.7955 40.9121L21.7477 40.9326H21.6021C21.4509 40.9304 21.3022 40.8988 21.1617 40.8438C21.074 40.8516 20.9865 40.8514 20.899 40.8408V40.8418H20.7223L20.6725 40.8184C20.5728 40.7719 20.4794 40.7122 20.3951 40.6416L20.3853 40.6338C20.2906 40.5459 20.2098 40.4435 20.1461 40.3311L20.1139 40.2734V40.1934C20.0743 40.1007 20.0424 40.0049 20.026 39.9053V39.9043L17.5113 24.1465L1.91367 16.0176L1.91269 16.0166C1.68495 15.8961 1.49936 15.7086 1.38144 15.4795C1.26356 15.2505 1.21827 14.9906 1.25253 14.7354C1.28686 14.48 1.3996 14.2406 1.57382 14.0508C1.74793 13.8613 1.97596 13.7299 2.22714 13.6738L2.2291 13.6729L58.6461 1.45703L58.6725 1.45117H59.1959L59.2369 1.46582L59.4078 1.52637L59.4225 1.53125L59.4371 1.53809L59.525 1.58203H59.6305L59.7848 1.73633L59.8951 1.84766L59.9088 1.86035L59.9205 1.87598C59.9752 1.9503 60.021 2.03078 60.0582 2.11523L60.0797 2.16309V2.29688Z" fill="#D9EE52" stroke="#D9EE52" strokeWidth="0.5"></path>
              </svg>
              <div className="newsletter-text">
                <h2>Sign Up to our Newsletter</h2>
                <p>Get <span className="highlight">10% off</span> coupon when you subscribe</p>
              </div>
            </div>
            <div className="newsletter-form">
              <div className="email-input">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" className="email-icon">
                  <path d="M12.3197 6.40039L9.35756 8.80908C8.79789 9.25308 8.01048 9.25308 7.45081 8.80908L4.46362 6.40039" stroke="#7C7E93" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.6573 14.5C13.6848 14.5056 15.0514 12.8397 15.0514 10.7922V6.21334C15.0514 4.16588 13.6848 2.5 11.6573 2.5H5.11211C3.08454 2.5 1.71802 4.16588 1.71802 6.21334V10.7922C1.71802 12.8397 3.08454 14.5056 5.11211 14.5H11.6573Z" stroke="#7C7E93" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <input type="email" placeholder="Enter Your Email Address" />
              </div>
              <button className="subscribe-btn">subscribe</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-background-text">Jazzy</div>
          <div className="footer-content">
            <div className="footer-column">
              <h3>Quick links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Help Centre</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Go to</h3>
              <ul>
                <li><a href="#">My Cart</a></li>
                <li><a href="#">My Orders</a></li>
                <li><a href="#">Return & Exchange</a></li>
                <li><a href="#">My Profile</a></li>
                <li><a href="#">Shop</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Stay Connected</h3>
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M0 6.70833C0 4.33546 0 3.14902 0.469111 2.24594C0.864425 1.48493 1.48493 0.864425 2.24594 0.469111C3.14902 0 4.33546 0 6.70833 0H13.2917C15.6645 0 16.851 0 17.7541 0.469111C18.5151 0.864425 19.1356 1.48493 19.5309 2.24594C20 3.14902 20 4.33546 20 6.70833V13.2917C20 15.6645 20 16.851 19.5309 17.7541C19.1356 18.5151 18.5151 19.1356 17.7541 19.5309C16.851 20 15.6645 20 13.2917 20H6.70833C4.33546 20 3.14902 20 2.24594 19.5309C1.48493 19.1356 0.864425 18.5151 0.469111 17.7541C0 16.851 0 15.6645 0 13.2917V6.70833Z" fill="url(#paint0_linear_242_452)"></path>
                    <path d="M13.8889 12.7776L14.3334 9.99978H11.6667V8.05534C11.6667 7.27756 11.9445 6.66645 13.1667 6.66645H14.4445V4.11089C13.7223 3.99978 12.9445 3.88867 12.2223 3.88867C9.94449 3.88867 8.33337 5.27756 8.33337 7.77756V9.99978H5.83337V12.7776H8.33337V19.9998C9.44448 19.9998 10.5556 19.9998 11.6667 19.9998V12.7776H13.8889Z" fill="white"></path>
                    <defs>
                      <linearGradient id="paint0_linear_242_452" x1="10" y1="19.4156" x2="10" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0062E0"></stop>
                        <stop offset="1" stopColor="#19AFFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  Facebook
                </a>
                <a href="#" className="social-link">
                  <RawImg image="https://api.builder.io/api/v1/image/assets/TEMP/aca1ee05f54752cb58facf06b22cc1a003613354?width=40" altText="X" className="social-icon" />
                  X
                </a>
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M0 6.70833C0 4.33546 0 3.14902 0.469111 2.24594C0.864425 1.48493 1.48493 0.864425 2.24594 0.469111C3.14902 0 4.33546 0 6.70833 0H13.2917C15.6645 0 16.851 0 17.7541 0.469111C18.5151 0.864425 19.1356 1.48493 19.5309 2.24594C20 3.14902 20 4.33546 20 6.70833V13.2917C20 15.6645 20 16.851 19.5309 17.7541C19.1356 18.5151 18.5151 19.1356 17.7541 19.5309C16.851 20 15.6645 20 13.2917 20H6.70833C4.33546 20 3.14902 20 2.24594 19.5309C1.48493 19.1356 0.864425 18.5151 0.469111 17.7541C0 16.851 0 15.6645 0 13.2917V6.70833Z" fill="#1265BF"></path>
                    <path d="M4.48915 6.21023C5.44736 6.21023 6.22414 5.43344 6.22414 4.47523C6.22414 3.51702 5.44736 2.74023 4.48915 2.74023C3.53093 2.74023 2.75415 3.51702 2.75415 4.47523C2.75415 5.43344 3.53093 6.21023 4.48915 6.21023Z" fill="white"></path>
                    <path d="M7.8131 7.49244H10.6886V8.8097C10.6886 8.8097 11.4688 7.24911 13.5919 7.24911C15.4858 7.24911 17.0546 8.18208 17.0546 11.0258V17.0225H14.0748V11.7525C14.0748 10.0749 13.1792 9.89041 12.4968 9.89041C11.0805 9.89041 10.838 11.1121 10.838 11.9713V17.0225H7.8131V7.49244Z" fill="white"></path>
                    <path d="M2.97671 7.49244H6.00159V17.0225H2.97671V7.49244Z" fill="white"></path>
                  </svg>
                  linkedin
                </a>
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clipPath="url(#clip0_242_461)">
                      <path d="M0.0114746 6.70833C0.0114746 4.33546 0.0114746 3.14902 0.480585 2.24594C0.8759 1.48493 1.4964 0.864425 2.25741 0.469111C3.16049 0 4.34693 0 6.71981 0H13.3031C15.676 0 16.8625 0 17.7655 0.469111C18.5265 0.864425 19.147 1.48493 19.5424 2.24594C20.0115 3.14902 20.0115 4.33546 20.0115 6.70833V13.2917C20.0115 15.6645 20.0115 16.851 19.5424 17.7541C19.147 18.5151 18.5265 19.1356 17.7655 19.5309C16.8625 20 15.676 20 13.3031 20H6.71981C4.34693 20 3.16049 20 2.25741 19.5309C1.4964 19.1356 0.8759 18.5151 0.480585 17.7541C0.0114746 16.851 0.0114746 15.6645 0.0114746 13.2917V6.70833Z" fill="url(#paint0_radial_242_461)"></path>
                      <path d="M0.0114746 6.70833C0.0114746 4.33546 0.0114746 3.14902 0.480585 2.24594C0.8759 1.48493 1.4964 0.864425 2.25741 0.469111C3.16049 0 4.34693 0 6.71981 0H13.3031C15.676 0 16.8625 0 17.7655 0.469111C18.5265 0.864425 19.147 1.48493 19.5424 2.24594C20.0115 3.14902 20.0115 4.33546 20.0115 6.70833V13.2917C20.0115 15.6645 20.0115 16.851 19.5424 17.7541C19.147 18.5151 18.5265 19.1356 17.7655 19.5309C16.8625 20 15.676 20 13.3031 20H6.71981C4.34693 20 3.16049 20 2.25741 19.5309C1.4964 19.1356 0.8759 18.5151 0.480585 17.7541C0.0114746 16.851 0.0114746 15.6645 0.0114746 13.2917V6.70833Z" fill="url(#paint1_radial_242_461)"></path>
                      <path d="M10.0003 2.72656C8.02519 2.72656 7.77732 2.7352 7.00159 2.7705C6.22737 2.80596 5.6989 2.92853 5.23649 3.10838C4.75817 3.29414 4.35243 3.54262 3.9482 3.94702C3.54366 4.35126 3.29519 4.75702 3.10883 5.2352C2.92853 5.69777 2.80581 6.22641 2.77096 7.00035C2.73626 7.77611 2.72717 8.02414 2.72717 9.99929C2.72717 11.9744 2.73596 12.2216 2.77111 12.9973C2.80672 13.7716 2.92929 14.3 3.10898 14.7625C3.29488 15.2408 3.54336 15.6466 3.94774 16.0508C4.35182 16.4553 4.75757 16.7044 5.23558 16.8902C5.6983 17.07 6.22692 17.1926 7.00098 17.2281C7.77672 17.2634 8.02444 17.272 9.99938 17.272C11.9746 17.272 12.2217 17.2634 12.9975 17.2281C13.7717 17.1926 14.3008 17.07 14.7635 16.8902C15.2416 16.7044 15.6468 16.4553 16.0509 16.0508C16.4554 15.6466 16.7039 15.2408 16.8902 14.7626C17.069 14.3 17.1917 13.7714 17.2281 12.9975C17.2629 12.2217 17.272 11.9744 17.272 9.99929C17.272 8.02414 17.2629 7.77626 17.2281 7.0005C17.1917 6.22626 17.069 5.69777 16.8902 5.23535C16.7039 4.75702 16.4554 4.35126 16.0509 3.94702C15.6463 3.54247 15.2418 3.29399 14.763 3.10838C14.2994 2.92853 13.7706 2.80596 12.9964 2.7705C12.2207 2.7352 11.9737 2.72656 9.99801 2.72656H10.0003ZM9.34788 4.03717C9.54151 4.03687 9.75757 4.03717 10.0003 4.03717C11.942 4.03717 12.1722 4.04414 12.939 4.07899C13.6481 4.11141 14.0329 4.2299 14.2892 4.32944C14.6286 4.46126 14.8706 4.61883 15.125 4.87338C15.3795 5.12793 15.5371 5.37035 15.6692 5.70974C15.7687 5.9658 15.8874 6.35065 15.9197 7.05974C15.9545 7.82641 15.9621 8.05671 15.9621 9.99762C15.9621 11.9385 15.9545 12.1688 15.9197 12.9355C15.8872 13.6446 15.7687 14.0294 15.6692 14.2855C15.5374 14.6249 15.3795 14.8666 15.125 15.121C14.8704 15.3755 14.6288 15.5331 14.2892 15.6649C14.0332 15.7649 13.6481 15.8831 12.939 15.9155C12.1723 15.9503 11.942 15.9579 10.0003 15.9579C8.05837 15.9579 7.82823 15.9503 7.06159 15.9155C6.35252 15.8828 5.96768 15.7643 5.71117 15.6647C5.37179 15.5329 5.12937 15.3753 4.87484 15.1208C4.6203 14.8663 4.46273 14.6244 4.33061 14.2849C4.23107 14.0288 4.11243 13.644 4.08016 12.9349C4.04531 12.1682 4.03835 11.9379 4.03835 9.9958C4.03835 8.05368 4.04531 7.82459 4.08016 7.05793C4.11259 6.34884 4.23107 5.96399 4.33061 5.70762C4.46242 5.36823 4.6203 5.1258 4.87484 4.87126C5.12937 4.61671 5.37179 4.45914 5.71117 4.32702C5.96753 4.22702 6.35252 4.10884 7.06159 4.07626C7.73248 4.04596 7.99247 4.03687 9.34788 4.03535V4.03717ZM13.8823 5.24474C13.4005 5.24474 13.0096 5.6352 13.0096 6.11717C13.0096 6.59899 13.4005 6.9899 13.8823 6.9899C14.3641 6.9899 14.755 6.59899 14.755 6.11717C14.755 5.63535 14.3641 5.24444 13.8823 5.24444V5.24474ZM10.0003 6.26444C7.93777 6.26444 6.26555 7.93671 6.26555 9.99929C6.26555 12.0619 7.93777 13.7334 10.0003 13.7334C12.0628 13.7334 13.7344 12.0619 13.7344 9.99929C13.7344 7.93671 12.0626 6.26444 10.0001 6.26444H10.0003ZM10.0003 7.57505C11.339 7.57505 12.4245 8.66035 12.4245 9.99929C12.4245 11.3381 11.339 12.4235 10.0003 12.4235C8.66139 12.4235 7.57612 11.3381 7.57612 9.99929C7.57612 8.66035 8.66139 7.57505 10.0003 7.57505Z" fill="white"></path>
                    </g>
                    <defs>
                      <radialGradient id="paint0_radial_242_461" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.324 21.5404) rotate(-90) scale(19.8215 18.4355)">
                        <stop stopColor="#FFDD55"></stop>
                        <stop offset="0.1" stopColor="#FFDD55"></stop>
                        <stop offset="0.5" stopColor="#FF543E"></stop>
                        <stop offset="1" stopColor="#C837AB"></stop>
                      </radialGradient>
                      <radialGradient id="paint1_radial_242_461" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.33863 1.44077) rotate(78.6806) scale(8.86028 36.5225)">
                        <stop stopColor="#3771C8"></stop>
                        <stop offset="0.128" stopColor="#3771C8"></stop>
                        <stop offset="1" stopColor="#6600FF" stopOpacity="0"></stop>
                      </radialGradient>
                      <clipPath id="clip0_242_461">
                        <rect width="20" height="20" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Instagram
                </a>
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M0 6.70833C0 4.33546 0 3.14902 0.469111 2.24594C0.864425 1.48493 1.48493 0.864425 2.24594 0.469111C3.14902 0 4.33546 0 6.70833 0H13.2917C15.6645 0 16.851 0 17.7541 0.469111C18.5151 0.864425 19.1356 1.48493 19.5309 2.24594C20 3.14902 20 4.33546 20 6.70833V13.2917C20 15.6645 20 16.851 19.5309 17.7541C19.1356 18.5151 18.5151 19.1356 17.7541 19.5309C16.851 20 15.6645 20 13.2917 20H6.70833C4.33546 20 3.14902 20 2.24594 19.5309C1.48493 19.1356 0.864425 18.5151 0.469111 17.7541C0 16.851 0 15.6645 0 13.2917V6.70833Z" fill="#FF0000"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.869 4.90524C16.5115 5.07822 17.0181 5.5848 17.191 6.22731C17.5123 7.40111 17.4999 9.84755 17.4999 9.84755C17.4999 9.84755 17.4999 12.2816 17.191 13.4554C17.0181 14.0979 16.5115 14.6045 15.869 14.7775C14.6952 15.0864 9.99997 15.0864 9.99997 15.0864C9.99997 15.0864 5.31712 15.0864 4.13096 14.7652C3.48846 14.5922 2.98188 14.0856 2.80889 13.4431C2.5 12.2816 2.5 9.8352 2.5 9.8352C2.5 9.8352 2.5 7.40111 2.80889 6.22731C2.98188 5.5848 3.50082 5.06586 4.13096 4.89288C5.30477 4.58398 9.99997 4.58398 9.99997 4.58398C9.99997 4.58398 14.6952 4.58398 15.869 4.90524ZM12.4093 9.74941L8.50491 11.9982V7.50065L12.4093 9.74941Z" fill="white"></path>
                  </svg>
                  Youtube
                </a>
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M0 6.70833C0 4.33546 0 3.14902 0.469111 2.24594C0.864425 1.48493 1.48493 0.864425 2.24594 0.469111C3.14902 0 4.33546 0 6.70833 0H13.2917C15.6645 0 16.851 0 17.7541 0.469111C18.5151 0.864425 19.1356 1.48493 19.5309 2.24594C20 3.14902 20 4.33546 20 6.70833V13.2917C20 15.6645 20 16.851 19.5309 17.7541C19.1356 18.5151 18.5151 19.1356 17.7541 19.5309C16.851 20 15.6645 20 13.2917 20H6.70833C4.33546 20 3.14902 20 2.24594 19.5309C1.48493 19.1356 0.864425 18.5151 0.469111 17.7541C0 16.851 0 15.6645 0 13.2917V6.70833Z" fill="url(#paint0_linear_242_467)"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5807 2.74708C12.351 2.83408 14.0006 3.5641 15.2605 4.82488C16.6045 6.16965 17.3442 7.9572 17.3435 9.85819C17.3419 13.781 14.1483 16.9729 10.2252 16.9729H10.2223C9.03093 16.9724 7.86035 16.6737 6.82064 16.1069L3.04712 17.0962L4.057 13.4094C3.43407 12.3305 3.10629 11.1065 3.10681 9.85254C3.10838 5.92979 6.30164 2.73828 10.2251 2.73828L10.5807 2.74708ZM6.99545 14.8189L7.21153 14.947C8.11991 15.4858 9.16116 15.7709 10.2228 15.7713H10.2252C13.4862 15.7713 16.1403 13.1185 16.1416 9.85778C16.1422 8.2777 15.5274 6.79196 14.4104 5.67421C13.2933 4.5564 11.8079 3.94046 10.2276 3.93995C6.96408 3.93995 4.30996 6.59252 4.30866 9.85295C4.30821 10.9704 4.62099 12.0586 5.21324 13L5.35391 13.2238L4.75622 15.406L6.99545 14.8189ZM13.8114 11.55C13.7669 11.4758 13.6484 11.4314 13.4705 11.3424C13.2926 11.2534 12.4182 10.8233 12.2551 10.764C12.0921 10.7047 11.9735 10.6751 11.855 10.853C11.7364 11.0309 11.3956 11.4314 11.2918 11.55C11.188 11.6687 11.0843 11.6835 10.9065 11.5945C10.7286 11.5056 10.1555 11.3178 9.47613 10.7122C8.94738 10.2408 8.59042 9.65865 8.48666 9.48067C8.38294 9.30272 8.4756 9.20648 8.56463 9.11786C8.64466 9.03819 8.74253 8.91021 8.83146 8.8064C8.92039 8.70263 8.95001 8.62842 9.00932 8.50983C9.0686 8.39116 9.03895 8.28739 8.9945 8.1984C8.95001 8.10938 8.59432 7.23433 8.44612 6.87838C8.30171 6.53176 8.15508 6.57869 8.04591 6.57321C7.94229 6.56808 7.8236 6.56695 7.70505 6.56695C7.58646 6.56695 7.39377 6.61141 7.23074 6.78942C7.0677 6.96737 6.60822 7.39749 6.60822 8.27247C6.60822 9.14754 7.24557 9.9928 7.3345 10.1115C7.42343 10.2302 8.58867 12.0257 10.3729 12.7958C10.7972 12.979 11.1285 13.0883 11.3868 13.1703C11.8129 13.3056 12.2006 13.2865 12.5071 13.2407C12.8488 13.1897 13.5594 12.8107 13.7076 12.3954C13.8558 11.9801 13.8558 11.6242 13.8114 11.55Z" fill="white"></path>
                    <defs>
                      <linearGradient id="paint0_linear_242_467" x1="10" y1="20" x2="10" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#25CF43"></stop>
                        <stop offset="1" stopColor="#61FD7D"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  WhatsApp
                </a>
                <a href="#" className="social-link">
                  <RawImg image="https://api.builder.io/api/v1/image/assets/TEMP/06a5fd3a969d22bf31f5e063fa6c758bfcbe2f69?width=40" altText="Threads" className="social-icon" />
                  Threads
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Contact Info</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="contact-icon">
                    <path d="M11.7659 2.08398C14.7998 2.42648 17.1967 4.85982 17.5369 7.94399" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M11.7659 5.03711C13.2176 5.32378 14.3522 6.47794 14.635 7.95378" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.04308 10.3943C12.313 13.7176 13.0549 9.87292 15.1369 11.988C17.1441 14.0279 18.2986 14.4367 15.7546 17.0213C15.436 17.2815 13.4121 20.4125 6.29935 13.1837C-0.814307 5.95398 2.26382 3.89435 2.51989 3.57061C5.06915 0.978856 5.46514 2.15847 7.47234 4.19842C9.55346 6.3144 5.77313 7.071 9.04308 10.3943Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <div>
                    <span>Hotline 24/7:</span>
                    <span>(+11) 123 456 789</span>
                  </div>
                </div>
                <div className="contact-item">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="contact-icon">
                    <path d="M6.86791 15.5786V13.2785C6.8679 12.6935 7.34484 12.2181 7.93576 12.2142H10.1003C10.6941 12.2142 11.1754 12.6907 11.1754 13.2785V13.2785V15.5857C11.1752 16.0824 11.5757 16.4884 12.0773 16.5H13.5203C14.9588 16.5 16.125 15.3455 16.125 13.9214V13.9214V7.37838C16.1173 6.81812 15.8516 6.29201 15.4035 5.94977L10.4683 2.01398C9.6037 1.32867 8.37465 1.32867 7.51006 2.01398L2.59652 5.95692C2.14669 6.29777 1.88054 6.82475 1.875 7.38552V13.9214C1.875 15.3455 3.04116 16.5 4.47968 16.5H5.92272C6.43677 16.5 6.85348 16.0875 6.85348 15.5786V15.5786" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span>Brooklyn, NY 11209, USA</span>
                </div>
                <div className="contact-item">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="contact-icon">
                    <path d="M13.427 6.63867L10.0945 9.34845C9.46492 9.84795 8.57908 9.84795 7.94946 9.34845L4.58887 6.63867" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.6816 15.75C14.9627 15.7563 16.5 13.8822 16.5 11.5788V6.42751C16.5 4.12412 14.9627 2.25 12.6816 2.25H5.31835C3.03734 2.25 1.5 4.12412 1.5 6.42751V11.5788C1.5 13.8822 3.03734 15.7563 5.31835 15.75H12.6816Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span>support@jazzy.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-category">
              <h4>Boutique apparel</h4>
              <div className="category-tags">
                <span>Jeans</span> / <span>Skirts</span> / <span>Tops</span> / <span>Crop tops</span> / <span>One piece</span> / <span>Middy</span> / <span>Night dress</span> / <span>Gown</span> / <span>Dress</span> / <span>Lehenga</span> / <span>Saree</span> / <span>Bridal blouse</span> / <span>Shirts</span> / <span>T-Shirts</span> / <span>Ethnic wear</span>
              </div>
            </div>
            <div className="footer-category">
              <h4>Accessories</h4>
              <div className="category-tags">
                <span>Suns cream</span> / <span>Cream</span> / <span>Lip lose</span> / <span>Lip balm</span> / <span>Compacc</span> / <span>Primer</span> / <span>Foundation</span> / <span>Blush</span> / <span>Eyeshadow</span> / <span>Mascara</span> / <span>Liner</span> / <span>Kajal</span> / <span>Conciliar</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>Copyright © 2024. Powered by Shopify</span>
            <div className="payment-methods">
              <div className="payment-method visa">
                <svg width="30" height="9" viewBox="0 0 30 9" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.50027 8.81526H4.90397L2.95707 1.92226C2.86466 1.60518 2.66845 1.32487 2.37983 1.19275C1.65955 0.860737 0.865854 0.596505 0 0.46324V0.19786H4.18243C4.75966 0.19786 5.19259 0.596505 5.26474 1.05948L6.27491 6.03163L8.86994 0.19786H11.3941L7.50027 8.81526ZM12.8374 8.81526H10.3854L12.4045 0.19786H14.8565L12.8374 8.81526ZM18.0285 2.58602C18.1007 2.1219 18.5336 1.85652 19.0387 1.85652C19.8324 1.78988 20.697 1.92315 21.4185 2.25401L21.8514 0.398645C21.1299 0.133265 20.3362 0 19.6159 0C17.2361 0 15.5043 1.19364 15.5043 2.85026C15.5043 4.11053 16.731 4.77225 17.5968 5.1709C18.5336 5.5684 18.8944 5.83378 18.8222 6.23127C18.8222 6.82752 18.1007 7.0929 17.3804 7.0929C16.5145 7.0929 15.6487 6.89415 14.8562 6.56214L14.4233 8.41865C15.2892 8.74952 16.2259 8.88278 17.0918 8.88278C19.7602 8.94827 21.4185 7.75578 21.4185 5.96589C21.4185 3.71188 18.0285 3.57977 18.0285 2.58602ZM30.0001 8.81526L28.0532 0.19786H25.9619C25.529 0.19786 25.0961 0.46324 24.9518 0.860737L21.3466 8.81526H23.8707L24.3745 7.55613H27.4759L27.7645 8.81526H30.0001ZM26.3227 2.51953L27.043 5.76729H25.0239L26.3227 2.51953Z" fill="#172B85"></path>
                </svg>
              </div>
              <div className="payment-method paypal">
                <svg width="50" height="30" viewBox="0 0 130 60" fill="none">
                  <rect x="40" y="15" width="50" height="30" fill="white"></rect>
                  <path fillRule="evenodd" clipRule="evenodd" d="M62.1342 37.4577L62.4318 35.6965L61.7689 35.6821H58.6035L60.8034 22.6851C60.8102 22.6457 60.8324 22.6092 60.8647 22.5832C60.8972 22.5572 60.9387 22.543 60.982 22.543H66.3194C68.0915 22.543 69.3143 22.8865 69.9526 23.5646C70.2519 23.8827 70.4426 24.2152 70.5348 24.581C70.6316 24.9649 70.6332 25.4236 70.5388 25.983L70.532 26.0237V26.3822L70.8313 26.5402C71.0833 26.6648 71.2836 26.8074 71.4373 26.9706C71.6933 27.2427 71.8589 27.5885 71.9288 27.9982C72.0012 28.4197 71.9773 28.9214 71.8589 29.4893C71.7223 30.1425 71.5015 30.7114 71.2033 31.1769C70.9292 31.6058 70.5798 31.9616 70.1649 32.2373C69.7688 32.4992 69.2983 32.6981 68.7663 32.8254C68.2507 32.9504 67.6629 33.0135 67.0181 33.0135H66.6028C66.3058 33.0135 66.0174 33.1132 65.7909 33.2919C65.5637 33.4742 65.4136 33.7234 65.3675 33.996L65.3361 34.1546L64.8103 37.259L64.7866 37.3729C64.7802 37.409 64.7694 37.4269 64.7534 37.4391C64.7392 37.4503 64.7188 37.4577 64.6989 37.4577H62.1342Z" fill="#28356A"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M71.115 26.0645C71.0993 26.1594 71.0809 26.2563 71.0605 26.356C70.3567 29.7234 67.9485 30.8867 64.873 30.8867H63.307C62.9309 30.8867 62.6139 31.1411 62.5554 31.4869L61.5265 37.5678C61.4884 37.7949 61.6762 37.9994 61.922 37.9994H64.6994C65.0282 37.9994 65.3076 37.7767 65.3594 37.4745L65.3867 37.3431L65.9097 34.2509L65.9433 34.0813C65.9944 33.778 66.2745 33.5552 66.6033 33.5552H67.0187C69.7096 33.5552 71.8162 32.5373 72.4319 29.5914C72.689 28.3608 72.5559 27.3332 71.8753 26.6105C71.6694 26.3927 71.4139 26.2118 71.115 26.0645Z" fill="#298FC2"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M70.3786 25.792C70.2711 25.7628 70.1601 25.7363 70.0463 25.7124C69.9319 25.6891 69.8147 25.6685 69.6941 25.6504C69.2719 25.5868 68.8092 25.5566 68.3136 25.5566H64.1302C64.0271 25.5566 63.9292 25.5783 63.8417 25.6175C63.6487 25.704 63.5054 25.8742 63.4707 26.0825L62.5807 31.3349L62.5552 31.488C62.6137 31.1423 62.9307 30.8879 63.3068 30.8879H64.8728C67.9483 30.8879 70.3565 29.724 71.0603 26.3571C71.0814 26.2575 71.0991 26.1605 71.1149 26.0656C70.9368 25.9775 70.744 25.9022 70.5363 25.8381C70.485 25.8222 70.432 25.8069 70.3786 25.792Z" fill="#22284F"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M63.4706 26.0821C63.5053 25.8737 63.6486 25.7035 63.8416 25.6177C63.9298 25.5783 64.027 25.5566 64.1301 25.5566H68.3135C68.809 25.5566 69.2717 25.5869 69.694 25.6505C69.8146 25.6685 69.9318 25.6892 70.0462 25.7126C70.16 25.7363 70.2709 25.7629 70.3785 25.792C70.4319 25.8069 70.4848 25.8223 70.5366 25.8376C70.7443 25.9018 70.9373 25.9777 71.1154 26.0651C71.3248 24.8207 71.1136 23.9735 70.3916 23.2062C69.5955 22.3615 68.1587 22 66.3202 22H60.9827C60.6072 22 60.2868 22.2544 60.2288 22.6007L58.0057 35.7314C57.9619 35.9911 58.1769 36.2255 58.458 36.2255H61.7532L63.4706 26.0821Z" fill="#28356A"></path>
                </svg>
              </div>
              <div className="payment-method mastercard">
                <div className="mastercard-left"></div>
                <div className="mastercard-right"></div>
                <div className="mastercard-overlap"></div>
              </div>
              <div className="payment-method bitcoin">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#F7931A"></circle>
                  <path d="M11.2 6.4C11.2 5.6 10.8 5.2 10 5.2V3.6H9.2V5.2H8.4V3.6H7.6V5.2H6V6H6.8C7.2 6 7.2 6.4 7.2 6.8V9.2C7.2 9.6 7.2 10 6.8 10H6V10.8H7.6V12.4H8.4V10.8H9.2V12.4H10V10.8C10.8 10.8 11.2 10.4 11.2 9.6C11.2 9.2 11.2 8.8 10.4 8.8C11.2 8.8 11.2 8.4 11.2 8C11.2 7.6 11.2 7.2 11.2 6.4ZM8.4 6.8H9.6C10 6.8 10 7.2 10 7.6C10 8 10 8.4 9.6 8.4H8.4V6.8ZM9.6 9.2C10 9.2 10 9.6 10 10C10 10.4 10 10.8 9.6 10.8H8.4V9.2H9.6Z" fill="white"></path>
                </svg>
              </div>
              <div className="payment-method apple-pay">
                <svg width="34" height="14" viewBox="0 0 34 14" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.15464 1.80495C5.75986 2.27783 5.12821 2.65081 4.49657 2.59753C4.41761 1.95814 4.72686 1.27878 5.08874 0.859182C5.48352 0.372978 6.17438 0.0266413 6.73365 0C6.79944 0.666033 6.54284 1.31874 6.15464 1.80495ZM6.72711 2.72416C6.17065 2.69175 5.66289 2.89357 5.25277 3.05659C4.98884 3.16149 4.76534 3.25033 4.59531 3.25033C4.4045 3.25033 4.17177 3.15674 3.91048 3.05167C3.5681 2.91398 3.17666 2.75657 2.76617 2.76413C1.82528 2.77745 0.950189 3.31693 0.469875 4.17612C-0.517071 5.89448 0.213269 8.43872 1.16732 9.83739C1.63447 10.5301 2.19374 11.2893 2.93066 11.2627C3.25486 11.2503 3.48807 11.1501 3.72942 11.0465C4.00728 10.9271 4.29594 10.8031 4.74664 10.8031C5.18172 10.8031 5.45775 10.9239 5.72272 11.0398C5.97466 11.15 6.21661 11.2559 6.57578 11.2494C7.33902 11.2361 7.81934 10.5567 8.28649 9.86403C8.79063 9.1206 9.01217 8.39505 9.04579 8.28495L9.04973 8.27221C9.04892 8.2714 9.04269 8.26851 9.03171 8.26342C8.86318 8.18532 7.57508 7.5884 7.56273 5.98772C7.55032 4.64419 8.58441 3.96347 8.7472 3.85631C8.7571 3.84979 8.76378 3.84539 8.7668 3.8431C8.10884 2.85737 7.08242 2.75081 6.72711 2.72416ZM12.0102 11.1764V0.792969H15.8593C17.8463 0.792969 19.2346 2.17832 19.2346 4.20305C19.2346 6.22779 17.82 7.62646 15.8066 7.62646H13.6024V11.1764H12.0102ZM13.6027 2.15104H15.4384C16.8202 2.15104 17.6097 2.897 17.6097 4.20908C17.6097 5.52117 16.8202 6.27378 15.4319 6.27378H13.6027V2.15104ZM24.4919 9.93054C24.0708 10.7431 23.143 11.2559 22.1429 11.2559C20.6625 11.2559 19.6295 10.3635 19.6295 9.01807C19.6295 7.68601 20.6296 6.92007 22.4785 6.80685L24.4655 6.68696V6.11418C24.4655 5.26832 23.9194 4.80875 22.9456 4.80875C22.1429 4.80875 21.5573 5.22835 21.4389 5.86774H20.0045C20.0506 4.52236 21.3007 3.54329 22.9917 3.54329C24.8143 3.54329 25.9986 4.50904 25.9986 6.00761V11.176H24.5248V9.93054H24.4919ZM22.5711 10.0241C21.7223 10.0241 21.1827 9.61116 21.1827 8.97843C21.1827 8.32572 21.7025 7.94608 22.6961 7.88614L24.466 7.77292V8.35902C24.466 9.33143 23.6501 10.0241 22.5711 10.0241ZM30.8878 11.5822C30.2496 13.4005 29.5193 13.9999 27.9665 13.9999C27.8481 13.9999 27.4533 13.9866 27.3612 13.9599V12.7145C27.4599 12.7278 27.7033 12.7411 27.8283 12.7411C28.5323 12.7411 28.9271 12.4414 29.1706 11.6621L29.3153 11.2026L26.6177 3.6431H28.2823L30.1575 9.77726H30.1904L32.0656 3.6431H33.6842L30.8878 11.5822Z" fill="black"></path>
                </svg>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
