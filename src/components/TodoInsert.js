import { useState, useCallback } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import './TodoInsert.scss';

//새로운 항목 추가

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');  // value 값 초기화

            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
            placeholder="할 일을 입력하세요" 
            value={value}
            onChange={onChange}
            />
            <button type="submit">
                <MdAssignmentAdd />
            </button>
        </form>
    );
};

export default TodoInsert;