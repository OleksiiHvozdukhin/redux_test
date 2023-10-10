// Импортируем хук
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
// Импортируем генератор экшена
// import { deleteTask } from 'redux/actions';
import { deleteTask, toggleCompleted } from 'redux/action';
export const Task = ({ task }) => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен удаления задачи
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button type="button" className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
