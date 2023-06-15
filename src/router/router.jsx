import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarView from '../views/CarView';
import HomeView from '../views/HomeView';
import CarList from '../components/car/CarList';
import CarCreate from '../components/car/CarCreate';
import CarDetail from '../components/car/CarDetail';
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="car" element={<CarView />}>
        <Route path="" element={<CarList />} />
        <Route path="create" element={<CarCreate />} />
        <Route path="cardetail/:vin" element={<CarDetail />} />
      </Route>
    </Routes>
  );
};
export default Router;
