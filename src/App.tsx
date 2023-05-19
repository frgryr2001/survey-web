import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import Loading from './components/Loading';
import React from 'react';

function App() {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <CssBaseline />

      {loading ? <Loading /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
