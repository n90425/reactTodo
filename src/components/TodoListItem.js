import {
    MdCheckBoxOutlineBlank ,
    MdCheckBox,
    MdRemoveCircleOutline,
}   from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

//할 일의 각 항목을 보여줌

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text,checked} = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox',{checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;