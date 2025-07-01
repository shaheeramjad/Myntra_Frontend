import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  const searchQuery = useSelector((store) => store.search?.searchQuery || "");
  const filteredItems = searchQuery
    ? items.filter((item) =>
        item.item_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  return (
    <main>
      <div className="items-container">
        {filteredItems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;