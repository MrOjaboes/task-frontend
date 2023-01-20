import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
const EditBook = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState([]);
  useEffect(() => {
    getBook();
  }, []);
  const getBook = () => {
    fetch(`http://127.0.0.1:8000/api/books/edit` + id)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  };

  const handleChange = (event) => {
    this.setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(book);
    fetch(`http://127.0.0.1:8000/api/books/update` + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: book.title,
        author: book.author,
        publisher: book.publisher,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    event.preventDefault();
    this.props.navigate("/");
  };

  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Title:
        <input
          value={book.title}
          name="title"
          type="text"
          onChange={this.handleChange}
        />
      </label>
      <br />
      <label>
        Author:
        <input
          value={book.author}
          name="author"
          type="text"
          onChange={this.handleChange}
        />
      </label>
      <br />
      <label>
        Publisher:
        <input
          value={book.publisher}
          name="publisher"
          type="text"
          onChange={this.handleChange}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default EditBook;
