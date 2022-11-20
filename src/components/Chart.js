import { useParams } from "react-router-dom";
import axios from "axios";

const chartURL = "https://api.coingecko.com/api/v3/coins/";

const Chart = (props) => {
  const { id } = props;
  axios
    .get(chartURL + `${id}/market_chart?vs_currency=usd&days=15`)
    .then((response) => {
      console.log(response);
    });

  return <div>Chart</div>;
};

export default Chart;
