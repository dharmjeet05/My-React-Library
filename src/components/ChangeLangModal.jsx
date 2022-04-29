import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import USA from "../assets/images/united-states.png";
import Germany from "../assets/images/germany.png";
import Spain from "../assets/images/spain.png";
import Japan from "../assets/images/japan.png";
import allActions from "../store/allActions";
import { LOCALES } from "../i18n";

function ChangeLangModal({ setShowChangeLangModal, showChangeLangModal }) {
  const dispatch = useDispatch();

  const langg = useSelector((state) => state.main.lang);

  function handleLanguage(lang) {
    setShowChangeLangModal(false);
    dispatch(allActions.MainAction.setLang(lang));
  }

  return (
    <>
      <div
        className={
          showChangeLangModal ? "langmodal langmodal__animated" : "langmodal"
        }
        onClick={() => setShowChangeLangModal(false)}
      ></div>
      <div
        className={
          showChangeLangModal
            ? "langmodal__content langmodal__content__animated"
            : "langmodal__content"
        }
      >
        <div className="langmodal__content__name">
          <h1>Choose Language</h1>
          <button
            className={langg == LOCALES.ENGLISH ? "btn active" : "btn"}
            onClick={() => handleLanguage(LOCALES.ENGLISH)}
          >
            <img src={USA} alt="usa" />
            <h3>English</h3>
          </button>
          <button
            className={langg == LOCALES.GERMAN ? "btn active" : "btn"}
            onClick={() => handleLanguage(LOCALES.GERMAN)}
          >
            <img src={Germany} alt="germany" />
            <h3>German</h3>
          </button>
          <button
            className={langg == LOCALES.SPANISH ? "btn active" : "btn"}
            onClick={() => handleLanguage(LOCALES.SPANISH)}
          >
            <img src={Spain} alt="spain" />
            <h3>Spanish</h3>
          </button>
          <button
            className={langg == LOCALES.JAPANESE ? "btn active" : "btn"}
            onClick={() => handleLanguage(LOCALES.JAPANESE)}
          >
            <img src={Japan} alt="japan" />
            <h3>Jpanese</h3>
          </button>
        </div>
      </div>
    </>
  );
}

ChangeLangModal.propTypes = {
  setShowChangeLangModal: PropTypes.func,
  showChangeLangModal: PropTypes.bool,
};

export default ChangeLangModal;
