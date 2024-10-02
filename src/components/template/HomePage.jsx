import { useEffect, useState } from "react";
import TableCoin from "../module/Tablecoin";
import { getCoinList } from "../../services/CryptoApi";
import Pagination from "../module/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };

    getData();
  }, []);
  {
    return (
      <div>
        <Pagination />
        <TableCoin coins={coins} isLoading={isLoading} />
      </div>
    );
  }
}

export default HomePage;
