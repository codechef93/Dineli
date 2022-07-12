
import React, { Component } from 'react';

import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

class App extends Component {

  render() {
    return (
      <React.Suspense fallback={loading}>
        <TheLayout />
      </React.Suspense>
    );
  }
}

export default App;