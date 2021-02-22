import {Route, HashRouter as Router} from 'react-router-dom';

import {Detail} from '../routes/Detail';
import {FC} from 'react';
import {Home} from '../routes/Home';

const App: FC = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/:id' component={Detail} />
    </Router>
  )
}

export default App;
