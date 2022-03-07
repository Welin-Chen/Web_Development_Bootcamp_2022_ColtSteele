const data = `{"ticker":{"base":"BTC","target":"USD","price":"45481.44646802","volume":"13476.01399427","change":"359.01168513"},"timestamp":1644512886,"success":true,"error":""}`;
const parseData = JSON.parse(data);
const data3 = {
  ticker: {
    base: "BTC",
    target: "USD",
    price: "45481.44646802",
    volume: "13476.01399427",
    change: "359.01168513",
  },
  timestamp: 1644512886,
  success: true,
  error: "",
};

const jsonData = JSON.stringify(parseData);

// axios
//   .get("https://api.cryptonator.com/api/ticker/btc-usd")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));
