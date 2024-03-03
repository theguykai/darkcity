import React, { useState, useEffect } from "react";

const Header = () => {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(false);
    }, 1000);

    return () => clearTimeout(5000);
  }, []);

  return (
    <div>
      {showComponent && (
        <div id="title">
          <h1>Dark City Productions</h1>
        </div>
      )}
    </div>
  );
};
export default Header;
