import './TodoTemplate.scss';

//전체적인 틀

const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;