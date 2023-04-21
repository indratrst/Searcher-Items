// import { useState } from "react";
// import "./App.css";

// function ProductCategoryRow({ category }) {
//   return (
//     <tr>
//       <th colSpan="2">{category}</th>
//     </tr>
//   );
// }

// function ProductRow({ product }) {
//   const name = product.stocked ? (
//     product.name
//   ) : (
//     <span style={{ color: "red" }}>{product.name}</span>
//   );

//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{product.price}</td>
//     </tr>
//   );
// }

// function ProductTable({ products, filterText, inStockOnly }) {
//   const rows = [];
//   let lastCategory = null;

//   products.forEach((product) => {
//     if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
//       return;
//     }
//     if (inStockOnly && !product.stocked) {
//       return;
//     }
//     if (product.category !== lastCategory) {
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category}
//         />
//       );
//     }
//     rows.push(<ProductRow product={product} key={product.name} />);
//     lastCategory = product.category;
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   );
// }

// function SearchBar({
//   filterText,
//   inStockOnly,
//   onFilterTextChange,
//   onInStockOnlyChange,
// }) {
//   return (
//     <form>
//       <input
//         type="text"
//         value={filterText}
//         placeholder="Search..."
//         onChange={(e) => onFilterTextChange(e.target.value)}
//       />

//       <label>
//         <input
//           type="checkbox"
//           checked={inStockOnly}
//           onChange={(e) => onInStockOnlyChange(e.target.checked)}
//         />{" "}
//         Only show products in stock
//       </label>
//     </form>
//   );
// }

// function FilterableProductTable({ products }) {
//   const [filterText, setFilterText] = useState("");
//   const [inStockOnly, setInStockOnly] = useState(false);

//   return (
//     <div>
//       <SearchBar
//         filterText={filterText}
//         inStockOnly={inStockOnly}
//         onFilterTextChange={setFilterText}
//         onInStockOnlyChange={setInStockOnly}
//       />
//       <ProductTable
//         products={products}
//         filterText={filterText}
//         inStockOnly={inStockOnly}
//       />
//       <CategoryGroup products={products} />
//     </div>
//   );
// }

// const PRODUCTS = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
//   { category: "Mount", price: "$2", stocked: true, name: "Guntur" },
//   { category: "Mount", price: "$4", stocked: false, name: "Tangkuban" },
//   { category: "Mount", price: "$1", stocked: true, name: "Burang" },
// ];
// // const CategoryList = ({ products, category }) => (
// //   <>
// //     <ul>
// //       {category.map(({ name }) => (
// //         <li key={PRODUCTS.category}>{name}</li>
// //       ))}
// //     </ul>
// //   </>
// // );

// function CategoryList({ products, category }) {
//   console.log({ c: category });
//   console.log({ p: products });
//   return (
//     <>
//       <ProductCategoryRow
//         category={products.category}
//         key={products.category}
//       />
//       <ul>
//         {category.map(({ name }) => (
//           <li key={products.category}>{name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// function CategoryGroup({ products }) {
//   const [activeButton, setActiveButton] = useState("");

//   const handleButton = (buttonId) => {
//     setActiveButton(buttonId);
//     console.log(buttonId);
//   };

//   return (
//     <div>
//       <button onClick={() => handleButton("Vegetables")}>Vegetables</button>
//       <button onClick={() => handleButton("Fruits")}>Fruits</button>
//       <button onClick={() => handleButton("Mount")}>Mount</button>
//       <CategoryList
//         products={products}
//         category={products.filter(({ category }) => category === activeButton)}
//       />
//     </div>
//   );
// }

// // const CategoryGroup = () => {
// //   const [activeButton, setActiveButton] = useState("");

// //   const handleButton = (buttonId) => {
// //     setActiveButton(buttonId);
// //     console.log(buttonId);
// //   };

// //   return (
// //     <div>
// //       <button onClick={() => handleButton("Vegetables")}>Vegetables</button>
// //       <button onClick={() => handleButton("Fruits")}>Fruits</button>
// //       <button onClick={() => handleButton("Mount")}>Mount</button>
// //       <CategoryList
// //         category={PRODUCTS.filter(({ category }) => category === activeButton)}
// //       />
// //     </div>
// //   );
// // };

// export default function App() {
//   return (
//     <>
//       <FilterableProductTable products={PRODUCTS} />
//     </>
//   );
// }

// // import React, { useState } from "react";

// // const products = [
// //   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
// //   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
// //   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
// //   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
// //   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
// //   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
// //   { category: "Mount", price: "$2", stocked: true, name: "Guntur" },
// //   { category: "Mount", price: "$4", stocked: false, name: "Tangkuban" },
// //   { category: "Mount", price: "$1", stocked: true, name: "Burang" },
// // ];

// // const CategoryList = ({ category }) => (
// //   <ul>
// //     {category.map(({ name }) => (
// //       <li key={products.category}>{name}</li>
// //     ))}
// //   </ul>
// // );

// // const CategoryGroup = () => {
// //   const [activeButton, setActiveButton] = useState("");

// //   const handleButton = (buttonId) => {
// //     setActiveButton(buttonId);
// //     console.log(buttonId);
// //   };

// //   return (
// //     <div>
// //       <button onClick={() => handleButton("Vegetables")}>Vegetables</button>
// //       <button onClick={() => handleButton("Fruits")}>Fruits</button>
// //       <button onClick={() => handleButton("Mount")}>Mount</button>
// //       <CategoryList
// //         category={products.filter(({ category }) => category === activeButton)}
// //       />
// //     </div>
// //   );
// // };

// // export default CategoryGroup;

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Navbar,
  Row,
} from "react-bootstrap";
import "./App.css";

function SearchBar({
  searchQuery,
  handleSearchQueryChange,
  handleCategoryClick,
  categories,
}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [inputValue, setInputValue] = useState("");
  // console.log(search);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      handleCategoryClick(null);
    } else {
      setSelectedCategory(category);
      handleCategoryClick(category);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchQueryChange(inputValue);
  };

  const handleS = () => {
    handleCategoryClick(null);
    handleSearchQueryChange("");
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={handleSearchQueryChange}
      /> */}

      <h2>
        SEARCHER <Badge bg="primary">ITEMS</Badge>
      </h2>
      <form onSubmit={handleSearchQueryChange}>
        <InputGroup className="mb-3 w-50">
          <Form.Control
            placeholder="Search ..."
            aria-label="Search ..."
            aria-describedby="basic-addon2"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button
            variant="btn btn-primary"
            onClick={handleSubmit}
            id="button-addon2"
          >
            Button
          </Button>
        </InputGroup>
      </form>
      <div>
        <div>
          {/* <button onClick={() => handleCategoryClick(null)}>All</button> */}
          <Button variant="outline-info" onClick={() => handleS()}>
            All
          </Button>{" "}
          {categories.map((category, index) => (
            <>
              {/* <button key={index} onClick={() => handleClick(category)}>
                {category}
              </button> */}
              <Button
                variant="outline-info"
                key={index}
                onClick={() => handleClick(category)}
              >
                {category}
              </Button>{" "}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

// function ProductCategoryRow({ category }) {
//   return <div>{category}</div>;
// }
function ProductRow({ item }) {
  // const name = item.stocked ? (
  //   item.name
  // ) : (
  //   <span style={{ color: "red" }}>{item.name}</span>
  // );

  return (
    <>
      {/* <tr>
        <td>{name}</td>
        <td>{item.price}</td>
      </tr>
      <img src={item.image} alt={item.name} className="w-25" /> */}

      <Col md={3} className="m-1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} />
          {/* <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body> */}
        </Card>
      </Col>
    </>
  );
}

function Product({
  items,
  searchedItems,
  categories,
  searchQuery,
  selectedCategory,
  filteredItems,
}) {
  const rows = [];
  // let lastCategory = null;
  items.forEach((item) => {
    if (item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) === -1) {
      return;
    }
    if (selectedCategory !== item.category && selectedCategory) {
      // console.log(item.category);
      return;
    }
    // const filteredItems = selectedCategory
    //   ? items.filter((item) => item.category === selectedCategory)
    //   : items;

    // if (item.category !== lastCategory) {
    //   rows.push(
    //     <ProductCategoryRow category={item.category} key={item.category} />
    //   );
    // }
    rows.push(<ProductRow item={item} key={item.name} />);
    // lastCategory = item.category;
  });
  console.log({ r: rows });
  return (
    <>
      {/* <div>
        {searchedItems.map((item, index) => (
          <div key={index}>
            <span>{item.name}</span>
          </div>
        ))}
      </div> */}
      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table> */}

      <div className="container my-2 d-flex align-items-center">
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
  // console.log(categories);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // console.log(category);
  };
  const handleSearchQueryChange = (searchQuery) => {
    setSearchQuery(searchQuery);
    // console.log(searchQuery);
  };

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  const searchedItems = searchQuery
    ? filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredItems;

  return (
    <div>
      {/* <div>
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div> */}
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
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
      {/* <div>
        {searchedItems.map((item, index) => (
          <div key={index}>
            <span>{item.name}</span>
          </div>
        ))}
      </div> */}
      <Product
        searchQuery={searchQuery}
        searchedItems={searchedItems}
        items={items}
        categories={categories}
        selectedCategory={selectedCategory}
        filteredItems={filteredItems}
      />
    </div>
  );
}

const items = [
  {
    category: "Fruits",
    price: "$1",
    stocked: true,
    name: "Apple",
    image: "https://source.unsplash.com/600x400?apple",
  },
  {
    category: "Fruits",
    price: "$1",
    stocked: true,
    name: "Orange",
    image: "https://source.unsplash.com/600x400?orange",
  },
  {
    category: "Fruits",
    price: "$2",
    stocked: false,
    name: "Passionfruit",
    image: "https://source.unsplash.com/600x400?fruit",
  },
  {
    category: "Vegetables",
    price: "$4",
    stocked: false,
    name: "Pumpkin",
    image: "https://source.unsplash.com/600x400?vegetables",
  },
  {
    category: "Vegetables",
    price: "$2",
    stocked: true,
    name: "Spinach",
    image: "https://source.unsplash.com/600x400?vegetables",
  },
  {
    category: "Vegetables",
    price: "$1",
    stocked: true,
    name: "Peas",
    image: "https://source.unsplash.com/600x400?vegetables",
  },
  {
    category: "Mount",
    price: "$2",
    stocked: true,
    name: "Guntur",
    image: "https://source.unsplash.com/600x400?mountain",
  },
  {
    category: "Mount",
    price: "$4",
    stocked: false,
    name: "Tangkuban",
    image: "https://source.unsplash.com/600x400?mountain",
  },
  {
    category: "Mount",
    price: "$1",
    stocked: true,
    name: "Burang",
    image: "https://source.unsplash.com/600x400?mountain",
  },
];

export default function App() {
  return (
    <>
      <Main items={items} />
    </>
  );
}
