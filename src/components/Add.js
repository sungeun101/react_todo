import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { useDispatch } from '../context';
import { ADD } from '../actions';

function Add() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD,
      payload: input,
    }); // dispatch는 reducer함수의 action 인자에 action.type과 함께 데이터도 함께 보내줄 수 있다. // payload라고 이름 지은 것은 payload가 네트워크에서 큰 데이터 덩어리 중에 '흥미있는, 의미있는' 데이터를 구별하는데 사용되는 용어이기 때문인 듯...?
    setInput(''); // clear up the input after click addTodo
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setInput(value);
  };

  return (
    <div>
      <form>
        <h1>To-do List</h1>
        <FormControl>
          <InputLabel>🚀Write a Todo</InputLabel>
          <Input value={input} type="text" onChange={onChange} />
        </FormControl>
        <Button
          disabled={!input} // 아무것도 입력 안했을때 빈 array 출력하지 않도록
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
    </div>
  );
}

export default Add;
