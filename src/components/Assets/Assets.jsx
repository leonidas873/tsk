import Carousel from './Carousel/Carousel';
import './Assets.css';
import Recources from './Resources/Recources';
import Search from './Search/Search';
import WalletAddr from './WalletAddr/WalletAddr';


const Assets = () => {
    return <div className="assets">
        <Search/>
        <WalletAddr/>
        <Recources/>
        <Carousel/>
    </div>
}

export default Assets;