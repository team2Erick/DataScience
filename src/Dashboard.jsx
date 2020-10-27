import React, {useCallback} from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-m001-qjjut", 
});

// ___________
const subscribers = sdk.createChart({
  chartId: "e6a134fa-bb38-4223-8753-6323bdefe2b9",
  autoRefresh: true,
  showAttribution: false,
});
const mostPlayed = sdk.createChart({
  chartId: "0407475b-9518-4daf-9be7-ebf793937508",
  showAttribution: false,
});
const streamsPerMonth = sdk.createChart({
  chartId: "47f48fb8-6479-4f62-b63a-b5f2fcf65662", 
  showAttribution: false,
});
const totalStreams = sdk.createChart({
  chartId: "312ed9f1-f00c-4b37-83e5-685313aec14a",
  showAttribution: false,
});
const subscribersPerCountry  = sdk.createChart({
  chartId: "6872e087-7067-47fd-b1bc-eb317c512983", 
  showAttribution: false,
});
const topTen  = sdk.createChart({
  chartId: "920c1781-7fd0-4fc3-8f85-4f7489ef1e81", 
  showAttribution: false,
});

// ___________
export default function Dashboard() {
  const renderSubscribers = useCallback(async (ref) => {
    try {
      await subscribers.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);
  
  const renderMostPlayed = useCallback(async (ref) => {
    try {
      await mostPlayed.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const renderStreamsPerMonth = useCallback(async (ref) => {
    try {
      await streamsPerMonth.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const renderTotalStreams = useCallback(async (ref) => {
    try {
      await totalStreams.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const renderSubscribersPerCountry = useCallback(async (ref) => {
    try {
      await subscribersPerCountry.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);
  
  const renderTopTen = useCallback(async (ref) => {
    try {
      await topTen.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);
  
  // ___________
  const setRefSubscribers = useCallback(
    (ref) => {
      if (ref) {
        renderSubscribers(ref);
      }
    },
    [renderSubscribers]
    );
    
    const setRefMostPlayed = useCallback(
      (ref) => {
        if (ref) {
          renderMostPlayed(ref);
        }
      },
      [renderMostPlayed]
      );

    const setRefStreamsPerMonth = useCallback(
      (ref) => {
        if (ref) {
          renderStreamsPerMonth(ref);
        }
      },
      [renderStreamsPerMonth]
      );

    const setRefTotalStreams = useCallback(
      (ref) => {
        if (ref) {
          renderTotalStreams(ref);
        }
      },
      [renderTotalStreams]
      );

    const setRefSubscribersPerCountry = useCallback(
      (ref) => {
        if (ref) {
          renderSubscribersPerCountry(ref);
        }
      },
      [renderSubscribersPerCountry]
      );

    const setRefTopTen = useCallback(
      (ref) => {
        if (ref) {
          renderTopTen(ref);
        }
      },
      [renderTopTen]
      );
// ___________
  return (
    <>
      <header className="header">
        <h1>CDay Music Stadistics</h1>
      </header>

      <div className="actions">
        <div className="slider">
          
          
        </div>
      </div>

      <div className="charts">
        <div className="chart_1" ref={setRefSubscribers}>1</div>
        <div className="chart_2" ref={setRefMostPlayed}>2</div>
        <div className="chart_3" ref={setRefStreamsPerMonth}>3</div>
        <div className="chart_4" ref={setRefTotalStreams}>4</div>
        <div className="chart_5" ref={setRefSubscribersPerCountry}>5</div>
        <div className="chart_6" ref={setRefTopTen}>6</div>
      </div>
    </>
  );
}
