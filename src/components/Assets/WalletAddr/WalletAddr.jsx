import copy from "copy-text-to-clipboard";
import { useState } from "react";
import { toast } from "react-toastify";
import {BiCopy} from "react-icons/bi";
import {MdQrCodeScanner} from 'react-icons/md';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import './WalletAddr.css';
import { Button, Modal } from "react-bootstrap";

const WalletAddr = () => {
  const notify = () =>
    toast("copied", {
      position: "bottom-left",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type: "success",
    });
  const [addr, setAddr] = useState("TPvJNLZVh1qgcvWKCpC8mZgyEfvLVQs65H");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <div className="walletAddr__wrapper">
    <div className="walletAddr">
      <div className="walletAddr__addr">
          {addr}
</div>
      <div
        className="walletAddr__copy"
        
      >
        <BiCopy onClick={() => {
          copy(addr);
          notify();
        }}
        className="walletAddr__copy-icon"/>
      </div>
      <div className="walletAddr__qr-icon"><MdQrCodeScanner onClick={setShow}/></div>
    </div>
    <Modal contentClassName="walletAddr__modal" show={show} onHide={handleClose} centered>
   
      <div className="wallet-modal__header">
          <h4>Account QR Code</h4>
          <IoIosCloseCircleOutline onClick={handleClose}/>
      </div>
    
  
    
      <div className="wallet-modal__body">
          <div className="wallet-modal__qr"><img src="/images/qrgen1.svg" /></div>
          <p className="wallet-modal__text">Account QR Code</p>
          <div className="wallet-modal__walletAddr">
              <span>{addr}</span><BiCopy onClick={() => {
          copy(addr);
          notify();
        }}
        className="walletAddr__copy-icon"/>
          </div>
          <button className="wallet-modal__btn">Save QR Code</button>
      </div>
    
  </Modal>
  </div>
  );
};

export default WalletAddr;
