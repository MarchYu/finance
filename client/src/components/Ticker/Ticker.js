import "./ticker.scss";
import { useState } from "react";

export const Ticker = ({
  tickerName,
  tickerPrice,
  tickerChange,
  tickerDate,
  changePercent,
  tickerDividend,
  tickerYield,
}) => {
  const tradeTime = new Date(tickerDate);
  const [hover, setHover] = useState(false);

  return (
    <div
      data-testid="ticker"
      className={hover ? "ticker-container-hover" : "ticker-container"}
      onMouseEnter={() => setHover((prev) => !prev)}
      onMouseLeave={() => setHover((prev) => !prev)}
    >
      <div
        className={
          Number(tickerPrice) > Number(tickerChange)
            ? "ticker-name-positive"
            : "ticker-name-negative"
        }
      >
        {tickerName}
      </div>
      <div className="ticker-price">{tickerPrice}$</div>
      <div className="ticker-change">
        Change: <br />
        {tickerChange}
      </div>
      <div className="ticker-dividend">
        Dividend
        <br />
        {tickerDividend}
      </div>
      <div className="ticker-time">{tradeTime.toDateString()}</div>
      <div
        className={
          Number(tickerPrice) > Number(tickerChange)
            ? "ticker-positive-change"
            : "ticker-negative-change"
        }
      >
        {changePercent}%
      </div>
    </div>
  );
};
