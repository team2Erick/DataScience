import React, {useCallback} from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-m001-qjjut", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});

const barChart = sdk.createChart({
  chartId: "0407475b-9518-4daf-9be7-ebf793937508", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  autoRefresh: true,
  showAttribution: false,
});

const geoChart = sdk.createChart({
  chartId: "6872e087-7067-47fd-b1bc-eb317c512983", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
  showAttribution: false,
});

export default function Dashboard() {
  const renderBarChart = useCallback(async (ref) => {
    try {
      await barChart.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const renderGeoChart = useCallback(async (ref) => {
    try {
      await geoChart.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const setRefBarChart = useCallback(
    (ref) => {
      if (ref) {
        renderBarChart(ref);
      }
    },
    [renderBarChart]
  );

  const setRefGeoChart = useCallback(
    (ref) => {
      if (ref) {
        renderGeoChart(ref);
      }
      },
    [renderGeoChart]
  );
  return (
    <>
      <header className="header">
        <h1>CDay Music Stadistics</h1>
        <img src="../public/play.png" />
      </header>

      <div className="actions">
        <div className="slider">
          
          
        </div>
      </div>

      <div className="charts">
        <div id="barChart" ref={setRefBarChart}>1</div>
        <div id="geoChart" ref={setRefGeoChart}>2</div>
        <div id="barChart" ref={setRefBarChart}>3</div>
        <div id="geoChart" ref={setRefGeoChart}>4</div>
        <div id="barChart" ref={setRefBarChart}>5</div>
        <div id="geoChart" ref={setRefGeoChart}>6</div>
      </div>
    </>
  );
}
