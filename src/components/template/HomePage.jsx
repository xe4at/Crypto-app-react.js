import { useEffect, useState } from "react";
import TableCoin from "../module/Tablecoin";
import { getCoinList } from "../../services/CryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(getCoinList())
      .then((res) => res.json())
      .then((json) => setCoins(json));
  }, []);
  {
    return (
      <div>
        <TableCoin coins={coins} />
      </div>
    );
  }
}

export default HomePage;
