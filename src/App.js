import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="title">🌟 Hello Athrav</h1>
      <p className="subtitle">Welcome to your simple landing page.</p>
      <p className="info-text">This project is a basic React landing page.</p>

      <button className="main-button">🚀 Start Now</button>

      <h2 className="section-title">Project Information</h2>
      <p className="info-text">Purpose: Create a clean and simple starter page.</p>
      <p className="info-text">Status: Running with updated design.</p>

      <h2 className="section-title">New Update</h2>
      <p className="update-text">Added a multicolor background and colorful text styles.</p>

      <h2 className="section-title">Additional Information</h2>
      <p className="extra-text">This page now includes updated colors and a new information section.</p>
      <p className="extra-text">Next step: You can customize text and colors anytime.</p>

      <h2 className="section-title">Colorful Butterfly Image</h2>
      <div className="butterfly" aria-label="Colorful butterfly image">
        <div className="wing wing-left-top"></div>
        <div className="wing wing-right-top"></div>
        <div className="wing wing-left-bottom"></div>
        <div className="wing wing-right-bottom"></div>
        <div className="body"></div>
      </div>
    </div>
  );
}

export default App;
