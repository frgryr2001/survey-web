import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '../components';
import { Survey, Home } from '../pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/survey" element={<Survey />} />
    </Route>
  )
);
