// Reducer?
// Component의 state가 엄청 많아서 뭘하고 있는지 정확하게 파악하기 위해 정리정돈 할 때
// useReducer는 state와 dispatch를 제공. dispatch는 action을 가지고 reducer 함수 실행(dispatch의 인자가 reducer의 action에 할당됨)
// dispatch 함수에 의해 실행된 reducer 함수에 의해 action.type에 따라 state가 '변경'되는 것이 아니고 '대체'된다.
import { v4 as uuid } from 'uuid';
import { ADD, COMPLETE, DEL, UNCOMPLETE } from './actions';

export const initialState = {
  toDos: [],
  completed: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }],
      };
    // ...state??? 항상 previous state를 리턴해줘야..
    // [...state.toDos]는 toDos가 가지고 있었던 내용물 자체
    // return {toDos: [{text:action.payload}]} 만 하면 submit할 때마다 새로 입력한 단 하나의 toDo만 가진 array를 얻게 됨. toDos array가 가지고 있었던 모든 내용물과 새로운 toDo를 함께 return해야 함(array를 수정하면 안됨. 새로운 것으로 대체!해야) => anti-mutation
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
      }; // filter는 element마다 실행되며 조건에 맞는 element 만 남겨 new array만든다. 이 역시 '수정'하지 않고 '대체'하는 방법..
    // action.payload가 삭제될 타겟
    case COMPLETE:
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      // find() returns the value of the first element in the array where predicate is true, and undefined otherwise.
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload), //toDos에서 삭제
        completed: [...state.completed, { ...target }], //completed에 넣기
      };
    case UNCOMPLETE:
      const aTarget = state.completed.find(
        (toDo) => toDo.id === action.payload
      );
      return {
        ...state,
        completed: state.completed.filter((toDo) => toDo.id !== action.payload), //completed에서 삭제
        toDos: [...state.toDos, { ...aTarget }], //toDos에 넣기
      };
    default:
      return;
  }
};

export default reducer;
