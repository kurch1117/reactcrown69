import { Switch, Route } from 'react-router-dom';
import Homepage_69 from './pages/Homepage_69';
import ShopOverviewPage_69 from './pages/ShopOverviewPage_69';
import ContactPage_69 from './pages/ContactPage_69';
import SinginPage_69 from './pages/SigninPage_69';
import Header_69 from './components/Header_69';

import './App_69.scss';

function App_69() {
  return (
    <div>
      <Header_69 />
      <Switch>
        <Route exact path='/' component={Homepage_69} />
        <Route exact path='/shop_69' component={ShopOverviewPage_69} />
        <Route exact path='/contact_69' component={ContactPage_69} />
        <Route exact path='/sigin_69' component={SinginPage_69} />
      </Switch>
    </div>
  );
}

export default App_69;
