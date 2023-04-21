import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

export default function SearchBar({
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
      <Container>
        <Row className="mt-5 ms-4">
          <Col>
            <h1>SnapShot</h1>
          </Col>
        </Row>
        <form onSubmit={handleSearchQueryChange}>
          <InputGroup className="mb-3 w-50 mt-2 ms-5">
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
          <div className="ms-5">
            <Button variant="primary" onClick={() => handleS()}>
              All
            </Button>{" "}
            {categories.map((category, index) => (
              <>
                <Button
                  variant="primary"
                  key={index}
                  onClick={() => handleClick(category)}
                  className="ms-5"
                >
                  {category}
                </Button>{" "}
              </>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
