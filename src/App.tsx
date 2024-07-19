import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Shows from './features/shows/Shows';
import './App.css';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Shows />}>
            <Route path="/shows/:id" />
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
