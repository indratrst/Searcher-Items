import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Card, Col, Container, Navbar, Row } from "react-bootstrap";
import "./App.css";
import SearchBar from "./component/SearchBar";

function ProductRow({ item }) {
  return (
    <>
      <Col sm={3} className="ms-5 pt-4">
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} />
        </Card> */}
        <Card className="image-card" style={{ width: "300px", border: "none" }}>
          <div>
            <Card.Img
              variant="top"
              src={item.image}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="overlay">
              <p>{item.name}</p>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

function Product({ items, searchQuery, selectedCategory }) {
  const rows = [];
  items.forEach((item) => {
    if (item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) === -1) {
      return;
    }
    if (selectedCategory !== item.category && selectedCategory) {
      return;
    }
    rows.push(<ProductRow item={item} key={item.name} />);
  });
  console.log({ r: rows });
  return (
    <>
      <div className="container my-4 d-flex align-items-center">
        <Row>{rows}</Row>
      </div>
    </>
  );
}

function Main({ items }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  const categories = Array.from(new Set(items.map((item) => item.category)));

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const handleSearchQueryChange = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tugas Filter Data</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Indra Tristia</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
        handleCategoryClick={handleCategoryClick}
        selectedCategory={selectedCategory}
        categories={categories}
      />
      <Product
        searchQuery={searchQuery}
        items={items}
        selectedCategory={selectedCategory}
        filteredItems={filteredItems}
      />
    </div>
  );
}

const items = [
  {
    category: "Fruits",
    name: "Apple",
    image: "/images/apple.jpg",
  },
  {
    category: "Fruits",
    name: "Orange",
    image: "/images/orange.jpg",
  },
  {
    category: "Fruits",
    name: "Strawberry",
    image: "/images/Strawberry.jpeg",
  },
  {
    category: "Vehicle",
    name: "scrambler",
    image: "/images/scrambler.jpg",
  },
  {
    category: "Vehicle",
    name: "ducati",
    image: "/images/ducati.jpg",
  },
  {
    category: "Vehicle",
    name: "bmw",
    image: "/images/bmw.jpg",
  },
  {
    category: "Animals",
    name: "fox",
    image: "/images/fox.jpg",
  },
  {
    category: "Animals",
    name: "tiger",
    image: "/images/tiger.jpg",
  },
  {
    category: "Animals",
    name: "turtle",
    image: "/images/penyu.jpg",
  },
];

export default function App() {
  return (
    <>
      <Main items={items} />
    </>
  );
}
