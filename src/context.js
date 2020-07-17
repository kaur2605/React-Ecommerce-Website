import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modelopen: false,
    modelProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProduct();
  }
  setProduct = () => {

    let tempProduct = [];
    storeProducts.forEach(item => {
      let singleitem = { ...item };
      tempProduct = [...tempProduct, singleitem];
    })

    this.setState(
      () => {
        return { products: tempProduct }
      })
  }

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product }
    })

  }

  addtoCart = id => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return { products: tempProduct, cart: [...this.state.cart, product] }
    }, () => { this.addTotals() })
  }

  openModel = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modelProduct: product, modelopen: true }
    })

  }
  closeModel = () => {
    this.setState(() => {
      return { modelopen: false }

    })
  }
  increment = (id) => {
    let tempcart = [...this.state.cart];
    const selectedproduct = tempcart.find(item => item.id === id)
    const index = tempcart.indexOf(selectedproduct);
    const product = tempcart[index]
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempcart]
      }
    }, () => { this.addTotals() })

  }
  decrement = (id) => {
    let tempcart = [...this.state.cart];
    const selectedproduct = tempcart.find(item => item.id === id)
    const index = tempcart.indexOf(selectedproduct);
    const product = tempcart[index]
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);

    }
    else {
      product.total = product.count * product.price;
      this.setState(() => {
        return {
          cart: [...tempcart]
        }
      }, () => { this.addTotals() })
    }
  }
  removeItem = (id) => {
    let tempProduct = [...this.state.products];
    let tempCart = [...this.state.cart]
    tempCart = tempCart.filter(item => item.id !== id);
    let index = tempProduct.indexOf(this.getItem(id));
    let removeproduct = tempProduct[index];
    removeproduct.inCart = false;
    removeproduct.count = 0;
    removeproduct.total = 0;

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProduct]
      }
    }, () => { this.addTotals() })

  }


  clearCart = (id) => {
    this.setState(() => {
      return { cart: [] }
    }, () => {
      this.addTotals();
      this.setProduct()
    });
  }

  addTotals = () => {
    let subtotal = 0;
    this.state.cart.map(item => (subtotal += item.total))
    const temptax = subtotal * 0.1;
    const tax = parseFloat(temptax.toFixed(2));
    let total = subtotal + tax;

    this.setState(() => {
      return {
        cartSubtotal: subtotal,
        cartTax: tax,
        cartTotal: total,

      }
    })

  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addtoCart: this.addtoCart,
          openModel: this.openModel,
          closeModel: this.closeModel,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider, ProductContext };
