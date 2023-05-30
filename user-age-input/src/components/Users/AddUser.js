import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    console.log(username, age);
    event.preventDefault();

    if (username.trim().length === 0 && age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return;
    }

    props.onAddUser(username, age, Math.random().toString());
    setUsername("");
    setAge("");
  };

  const onUsernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError();
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            is="username"
            type="text"
            value={username}
            onChange={onUsernameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            is="age"
            type="number"
            value={age}
            onChange={onAgeChangeHandler}
          />
          <Button type="submit" onSubmit={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
