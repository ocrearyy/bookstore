import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { lookAtStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{categories}</p>
      <button onClick={() => dispatch(lookAtStatus())} type="button">Check Status</button>
    </div>
  );
};

export default Categories;
