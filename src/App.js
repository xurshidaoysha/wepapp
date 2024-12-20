import React from 'react';
import Students from './components/students/Students';
import CreateStudent from './studentcreate/Studentcreate';

function App() {
    return (
        <div className="App">
            <h1>Telegram Bot Studentlar</h1>
            <CreateStudent />
            <Students />
        </div>
    );
}

export default App;
