import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Shows from './features/shows/Shows';
import './App.css';
import ShowInfo from './features/shows/conatiners/ShowInfo/ShowInfo';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Shows />}>
            <Route path="/shows/:id" element={<ShowInfo />} />
          </Route>
          <Route
            path="*"
            element={<h1 className="text-center">Not found!</h1>}
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
