import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Helmet } from "react-helmet";

import { Card, ChangeLangModal } from "./components";
import allActions from "./store/allActions";
import { I18nProvider } from "./i18n";
import language from "./assets/images/language2.png";

function App() {
  const [showChangeLangModal, setShowChangeLangModal] = useState(false);

  const dispatch = useDispatch();

  const lang = useSelector((state) => state.main.lang);

  const { isLoading, data } = useQuery("score-board-data", () =>
    axios.get(
      "https://backend.sports.info/api/v1/nba/game/f34b1dfd-97fd-4942-9c14-05a05eeb5921/summary"
    )
  );

  useEffect(() => {
    dispatch(allActions.MainAction.fetchData(data?.data.data));
  }, [data]);

  if (isLoading) {
    return (
      <div className="app">
        <h1>Loading...</h1>;
      </div>
    );
  }

  return (
    <>
      <I18nProvider locale={lang}>
        <div className="app">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Score-Board</title>
            <link rel="canonical" href="http://localhost4200" />
          </Helmet>

          <Card />

          <ReactQueryDevtools position="bottom-right" />
        </div>
      </I18nProvider>

      <button className="intl-btn" onClick={() => setShowChangeLangModal(true)}>
        <img src={language} alt="language" />
      </button>

      {showChangeLangModal && (
        <ChangeLangModal
          showChangeLangModal={showChangeLangModal}
          setShowChangeLangModal={setShowChangeLangModal}
        />
      )}
    </>
  );
}

export default App;
