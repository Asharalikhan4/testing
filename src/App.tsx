import { useEffect, useState } from 'react'
import './App.css'
import UserList from "./UserList"

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchData, setSearchData] = useState([]);
  
  useEffect(() => {
    const prevSearch = localStorage.getItem("recentSearch");
    setSearch(prevSearch || "");
  }, []);
  
  useEffect(() => {
    
    const fetchData = async() => {
      const data = await fetch(`https://api.github.com/search/users?q=${search}`);
      const json = await data.json();
      setSearchData(json.items);
    }
    
    if(search?.length > 4) {
      fetchData();
    }
}, [search]);
  
  function handleSearchClick() {
    localStorage.setItem("recentSearch", search);
  }
  
  return (
    <form>
      <input placeholder="Search User" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={handleSearchClick} />
      <button onClick={handleSearchClick}>Search</button>
      <UserList searchData={searchData} />
    </form>
  )
}

export default App
