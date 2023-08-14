import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Auth = lazy(() => import('./container/Auth'));

export default function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<Auth />} />
      </Routes>
    </Suspense>
  );
}