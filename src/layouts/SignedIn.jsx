import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";
import CartSummary from "./CartSummary";

export default function SignedIn({signOut}) {
  // Vatandaş sisteme giriş yaptığı zamanki durum 
  return (
    <div>
      
      <Menu.Item>
        
        <Image
          avatar
          spaced="right"
          src="https://img.a.transfermarkt.technology/portrait/header/8198-1685035469.png?lm=1"
        />
        
        <Dropdown pointing="top right" text="C.Ronaldo #süü">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
