import SearchInput from "./components/SearchInput/SearchInput";
import ProductList from "./components/ProductList/ProductList";

export default function Home() {
  return (
    <main className="main-container">
      <h1>Welcome to Smart Search Playground</h1>
      <p>Explore smart search capabilities powered by Elasticsearch</p>
      <SearchInput />
      <ProductList />
    </main>
  );
}
 