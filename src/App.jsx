import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";
import SearchParams from "./SearchParams";
// import SearchParams from "./SearchParams";

// component must return the markup from React.createElement

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 一直 cache 不會 refetch
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
});

const App = () => {
  console.log("app rerender");
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adpot Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
      {/* <SearchParams /> */}
      {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mixed" /> */}
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
