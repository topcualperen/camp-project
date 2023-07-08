import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownDivider, Label } from "semantic-ui-react";

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Dropdown item text="Sepetiniz" style={{ marginTop: "0.5em" }}>
        <Dropdown.Menu>
          {cartItems.map((cartItems) => (
            <Dropdown.Item key={cartItems.product.id}>
              {cartItems.product.productName}
              <Label style={{ marginLeft: "3em" }}>{cartItems.quantity}</Label>
            </Dropdown.Item>
          ))}
          <DropdownDivider />
          <Dropdown.Item as={NavLink} to="/cart">
            Sepete Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
