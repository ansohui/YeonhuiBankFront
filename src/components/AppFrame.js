import { useLocation } from "react-router-dom";

function AppFrame({ children }) {
  const location = useLocation();
  const showChrome = !["/", "/login", "/signup"].includes(location.pathname);

  return (
    <div className="App">
      <div className="phone-frame">
        {showChrome && (
          <div className="top-bar">
            <span className="carrier">YEONHUI</span>
            <span className="time">09:41</span>
            <span className="status">5G · 82%</span>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default AppFrame;
