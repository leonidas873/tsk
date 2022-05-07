import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

import { useTranslation } from 'react-i18next';
import i18next from "i18next";


const Languages = () => {

  const [show, setShow] = useState(false);
  const [activeLan,setActiveLan] = useState('en')
  
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }


  return (
    <div className="lan-select" onClick={()=>setShow(state=>!state)}>
      <div className="lan-select__active">
        <img src="/images/Group.svg" alt="" />
        {activeLan}</div>
   {show && <div className="lan-select__options">
      <div className="lan-select__option" onClick={()=>{setActiveLan('en'); handleClick('en')}}>en</div>
      <div className="lan-select__option" onClick={()=>{setActiveLan('ru'); handleClick('ru')}}>ru</div>
      <div className="lan-select__option" onClick={()=>{setActiveLan('geo'); handleClick('geo')}}>geo</div>
      </div>}
    </div>
  );
};

const Header = () => {

  const { t } = useTranslation();
  
  return (
    <div className="header">
     
      <div className="header__logo"><img src="/images/logo.svg" alt="logo"/></div>
      <div className="header__nav">
        <nav>
          <Link to="/trade">{t('nav.1')}</Link>
          <Link to="/earn">{t('nav.2')}</Link>
          <Link to="/win">{t('nav.3')}</Link>
          <Link to="/nft">{t('nav.4')}</Link>
          <Link to="/more">{t('nav.5')}</Link>
        </nav>
      </div>
      <div className="header__balance">
      <img src="/images/orangeIcon.svg" alt="" />
      <span>$4.709</span>
      </div>
      <Languages />
      <div className="header__settings"><img src="/images/settingsIcon.svg" alt="" /></div>
      <button className="header__conncetWallet-btn">{t('headerBtn.1')}</button>
    </div>
  );
};

export default Header;
