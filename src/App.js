import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    // {
    //   id:1,
    //   text: '리액트의 기초 알아보기',
    //   checked: true,
    // },
    // {
    //   id:2,
    //   text: '컴포넌트 스타일링하기',
    //   checked: true,
    // },
    // {
    //   id:3,
    //   text: '일정관리 앱 만들기',
    //   checked: false,
    // },
  ]);

  const nextId = useRef(1); //useRef: nextId를 생성하여 현재 할 일 항목의 고유 ID를 저장

  const onInsert = useCallback(//: 새로운 할 일을 추가하는 함수,  seCallback: todos 배열이 변경될 때만 onInsert 함수가 새로 생성
    text => { //text: 할 일의 내용을 매개변수로 받음
      const todo = {  //todo: 새로 추가할 할 일을 정의하는 객체
        id: nextId.current, //id는 nextId.current 값을 사용하고 text와 checked 상태를 초기화
        text,
        checked: false,
      };
      setTodos(todos.concat(todo)); //기존 todos 배열에 새 todo를 추가
      nextId.current += 1; //  nextId 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback( //todos(두번째 매개변수) 배열이 변경될 때만 onRemove 함수가 새로 생성
    id => { //id: 삭제할 할 일의 ID를 매개변수로 받음
      setTodos(todos.filter(todo => todo.id !== id)); //todos 배열에서 주어진 id와 일치하지 않는 항목만 남도록 필터링하여 상태를 업데이트
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id ===id ? {...todo, checked: !todo.checked} : todo, //todos 배열을 매핑하여 주어진 id와 일치하는 항목의 checked 상태를 반전시키고 다른 항목은 그대로 유지
        ),
      );
    },
    [todos],
  )

  return(
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />  {/*TodoInsert 컴포넌트에 onInsert 함수(새로운 할 일을 추가하는 함수)를 props로 전달*/}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />{/*TodoList 컴포넌트에 현재 todos 상태 배열, onRemove ,onToggle 함수를 props로 전달*/}
    </TodoTemplate>
  )
};

export default App;
