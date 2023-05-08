import { 
  createBrowserRouter, 
  RouterProvider,
  // createRoutesFromElements,
  // Route
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductsPage from './pages/Products'
import RootLayout from './pages/Root'
import ErrorPage from './pages/Error'
import ProductDetailsPage from './pages/Product-details'

// const routeDefinitions= createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/products' element={<ProductsPage/>}/>
//   </Route>
// )
// const router=createBrowserRouter(routeDefinitions);

const router= createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {  path: "/",  element: <Home/> },
      {  path: "/products",  element: <ProductsPage/>, errorElement: <ErrorPage/> },
      { path: "/products/:product-id", element: <ProductDetailsPage/>}
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
