import React, { useState } from 'react';
import LandingPage from './features/landing/pages/LandingPage';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="ticks">
            <section id="spacer">
                <LandingPage />
            </section>
        </div>
    );
}

export default App;