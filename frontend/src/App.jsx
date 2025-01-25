import "./App.css";
import {Hero, About, Repositories, Form, Layout} from './pages'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Hero />} />
      <Route path='about' element={<About />} />
      <Route path='repositories' element={<Repositories />} />
      <Route path='form' element={<Form />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App;
