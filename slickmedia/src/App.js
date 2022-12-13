import React, { Suspense } from "react";

import "./App.css";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Loader from "./components/loader/loader.component";
import Landing from "./pages/landing/landing.component";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Landing />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
