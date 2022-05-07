import './Carousel.css';

const SingleAsset = ({ asset }) => {
  return (
    <div className="singleAsset">
      {asset.stake ? (
        <div className="singleAsset__staked">
          <div className="singleAsset__title">{asset.title}</div>
          <div className="singleAsset__property">
            Available: {asset.available}
          </div>
          <div className="singleAsset__property">stake: {asset.stake}</div>
          <div className="singleAsset__property">value: {asset.value}</div>
          <div className="singleAsset__footer">
            <button>send</button>
            <button>recieve</button>
            <button>just Swap</button>
          </div>
        </div>
      ) : (
        <div className="singleAsset__noStaked">
          <div className="singleAsset__title">{asset.title}</div>
          <div className="singleAsset__property">
            quantity: {asset.quantity}
          </div>
          <div className="singleAsset__property">value: {asset.value}</div>
        </div>
      )}
    </div>
  );
};

export default SingleAsset;
