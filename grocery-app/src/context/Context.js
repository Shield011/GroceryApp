import React, { Component } from "react";
import { productData } from "../common/data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  
  state = {
    products: productData,
    cart: [],
    filteredProducts: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    shippingCharges: 0,
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  // getCategory = (category) => {
  //   const product = this.state.products.find((item) => item.category === category);
  //   return product;
  // }

  addToCart = (id) => {
    let tempCart = [...this.state.cart];
    const exist = tempCart.find((item) => item.id === id);
    if (exist) {
      let tempCart = [...this.state.cart];
      const selectedProduct = tempCart.find((item) => item.id === id);
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];
      product.count = product.count + 1;
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    } else {
      let tempProducts = [...this.state.products];
      const index = tempProducts.indexOf(this.getItem(id));
      const product = tempProducts[index];
      product.count = product.count + 1;
      const count = product.count;
      const price = product.price;
      product.total = count * price;

      this.setState(
        () => {
          return {
            products: tempProducts,
            cart: [...this.state.cart, product],
          };
        },

        () => {
          this.addTotals();
        }
      );
    }
  };

  
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeFromCart(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeFromCart = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  filterByCategory = (category) => {
    console.log("Clicked!!!");

    let tempProducts = []
    for (let i in productData) {

      if (productData[i].category === category) {
        tempProducts.push(i);
        

      }
      console.log("i",productData[i].category);
      
       

     
             
    }

    this.state.products = tempProducts;
    console.log(this.state.products);
    console.log("tempProducts", tempProducts)
    console.log("data", productData);
  



    // let tempFilteredProducts = [...this.state.filteredProducts]
    // tempFilteredProducts = tempFilteredProducts.filter((item) => item.category === category);
    // const index = tempProducts.indexOf(this.getItem(id));
    // let afterFilterProducts = tempProducts[index];
    // this.setState (
    //   () => {
    //     return {
    //       filteredProducts: [...tempFilteredProducts],
    //       products: [...tempProducts],
    //     }
    //   }
    // )

  }


  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const shipping = subTotal > 1000 ? 50 : 0;
    const total = subTotal + shipping + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        shippingCharges: shipping,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          increment: this.increment,
          decrement: this.decrement,
          clearCart: this.clearCart,
          filterByCategory:this.filterByCategory
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
