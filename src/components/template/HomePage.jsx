import { useEffect, useState } from "react";
import TableCoin from "../module/Tablecoin";
import { getCoinList } from "../../services/CryptoApi";
import Pagination from "../module/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };

    getData();
  }, [page]);
  {
    return (
      <div>
        <TableCoin coins={coins} isLoading={isLoading} />
        <Pagination page={page} setPage={setPage} />
 
      </div>
    );
  }
}

export default HomePage;
