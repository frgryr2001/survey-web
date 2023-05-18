import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '../src/components';
import { Test, Welcome } from '../src/pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Welcome />} />
      <Route path="/test" element={<Test />} />
    </Route>
  )
);
