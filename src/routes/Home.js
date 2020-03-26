import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo, actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  console.log({ toDos });
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

const mapStateToProps = state => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
