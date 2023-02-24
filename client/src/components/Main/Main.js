import { socket } from "../../socket/socket";
import { useRecoilState } from "recoil";
import { tickersItemsState } from "../../state/atoms";
import { useEffect } from "react";
import { Ticker } from "../Ticker/Ticker";

import "./main.scss";

export const Main = () => {
  const [tickers, setTickers] = useRecoilState(tickersItemsState);

  useEffect(() => {
    socket.emit("start");
    socket.on("ticker", (res) => {
      setTickers(res);
    });
  }, [setTickers]);
  return (
    <div className="main" data-testid="main-component">
      {tickers.map((item) => (
        <Ticker
          key={item.change}
          tickerName={item.ticker}
          tickerPrice={item.price}
          tickerChange={item.change}
          tickerDate={item.last_trade_time}
          changePercent={item.change_percent}
          tickerDividend={item.dividend}
          tickerYield={item.yield}
        />
      ))}
    </div>
  );
};
