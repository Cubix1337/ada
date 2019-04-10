import React from "react";
import styled from "styled-components";

const Form = styled.form``;

const AddItem = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFeedItem =
        {
            title: event.target[0].value,
            description: event.target[1].value
        }
        props.handleNewFeedItem(newFeedItem)
  };

  return (
    <div>
      <h2>Add a new item</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="title">Enter a title</label>
        <input type="text" name="title" />
        <label htmlFor="description">Enter a description</label>
        <textarea name="description" />
        <button>Sign your life away</button>
      </Form>
    </div>
  );
};

export default AddItem;
