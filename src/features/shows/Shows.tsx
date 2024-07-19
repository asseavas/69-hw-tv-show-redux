import ShowForm from './components/ShowForm/ShowForm';
import { Outlet } from 'react-router-dom';

const Shows = () => {
  return (
    <div>
      <ShowForm />
      <Outlet />
    </div>
  );
};

export default Shows;
