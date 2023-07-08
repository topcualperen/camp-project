import React, { useState, useEffect } from 'react'
import { Button, Icon, Menu, Table, TableHeaderCell } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { Link } from 'react-router-dom'
import { addToCart } from '../store/actions/cartActions'
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function ProductList() {


  const dispatch = useDispatch();
  
  const [products, setProducts] = useState([])

  useEffect(()=>{ // compunent yüklendiğinde yapılmasıni istediğim kodu buraya yazarım.
     let productService = new ProductService()
     productService.getProducts().then(result=>setProducts(result.data.data))
  },[])
  

  // yukarıdaki products değiştiği anda aşağıdaki yapı yeniden render ediliyor.
  

    const handleAddCart=(product)=>{ //bir değişken oluşturup içine fonksiyon atadık
      dispatch(addToCart(product))
      toast.success(`${product.productName} sepete eklendi!`)
    }

     return (
    <div>
     <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ürün adı</Table.HeaderCell>
        <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
        <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
        <Table.HeaderCell>Açıklama</Table.HeaderCell>
        <Table.HeaderCell>Kategori</Table.HeaderCell>
        <TableHeaderCell></TableHeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

     {
          products.map((product)=>( // ürün geldikçe otomatik olarak row(satır) üretecek.
        <Table.Row Key={product.id}>
        <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
        <Table.Cell>{product.unitPrice}</Table.Cell>
        <Table.Cell>{product.unitsInStock}</Table.Cell>
        <Table.Cell>{product.quantityPerUnity}</Table.Cell>
        <Table.Cell>{product.category && product.category.categoryName}</Table.Cell>
        <Table.Cell><Button onClick={()=>handleAddCart(product)}>Sepete Ekle</Button></Table.Cell>
        </Table.Row> 
          ))
     }
      

    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
     </div>
  )
}
