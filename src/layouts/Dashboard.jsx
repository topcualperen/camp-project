import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";
import CartDetail from "../pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column floated="left" width={3}>
            <Categories />
          </Grid.Column>
          <Grid.Column floated="right" width={12}>
            <Routes>
              <Route exact path="/" element={<ProductList />} /> // eski sürümde component di şimdi element olmuş - exact url i kusursuz yapar
              <Route path="/products" element={<ProductList/>}/>
              <Route path="/products/:name" element={<ProductDetail/>}/>
              <Route path="/cart" component={CartDetail} />
              <Route path="/product/add" component={ProductAdd} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
