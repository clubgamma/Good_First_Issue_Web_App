import "./App.css";
import { Hero, About, Repositories, Form, Layout } from "./pages";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";

function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>
        <header
          style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}
        >
          <UserButton /> {/* Profile + Sign out */}
        </header>
        {children}
      </SignedIn>

      <SignedOut>
        <SignIn /> {/* Show sign in if not authenticated */}
      </SignedOut>
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Public Routes */}
      <Route index element={<Hero />} />
      <Route path="about" element={<About />} />

      {/* Protected Routes */}
      <Route
        path="repositories"
        element={
          <ProtectedRoute>
            <Repositories />
          </ProtectedRoute>
        }
      />
      <Route
        path="form"
        element={
          <ProtectedRoute>
            <Form />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
