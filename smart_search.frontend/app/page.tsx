import SearchFilter from "./components/SearchFilter/SearchFilter";
import ProductCards from "./components/ProductCards/ProductCards";

export default function Home() {
  return (
    <>
    <div className="main-container">
      <SearchFilter />
      <ProductCards />
    </div>
    </>
  );
}
 