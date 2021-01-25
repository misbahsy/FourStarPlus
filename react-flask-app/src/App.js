import React from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { Layout } from './components/Layout'
import Home from './views/Home'
import Tv from './views/Tv'
import Cameras from './views/Cameras'
import ComputerAccesories from './views/ComputerAccesories'
import ComputerTablets from './views/ComputerTablets'
import CellphoneAccesories from './views/CellphoneAccesories'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/NavigationBar'



// url_dict = {'Cellphones And Accesories': cell_acc,'Televisions': tv, 'Cameras': camera, 'Computer Accesories': computer_acc, 'Computers And Tablets': computers_tablets }

function App() {


  return (
    <>
      <NavigationBar />

      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' ><Home /></Route>
            <Route path='/tv' component={Tv} />
            <Route path='/cameras' component={Cameras} />
            <Route path='/computer_accesories' component={ComputerAccesories} />
            <Route path='/computer_tablets' component={ComputerTablets} />
            <Route path='/cellphone_accesories' component={ CellphoneAccesories } />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
