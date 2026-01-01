import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BlogListPage } from "./pages/BlogListPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={
          <>
            <Navigation />
            <BlogListPage />
            <Footer />
          </>
        } />
        <Route path="/blog/:slug" element={
          <>
            <Navigation />
            <BlogPostPage />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}