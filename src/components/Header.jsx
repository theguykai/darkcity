import React, { useState, useEffect } from "react";

const Header = () => {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(false);
    }, 3000);

    return () => clearTimeout(3000);
  }, []);

  return (
    <div>
      {showComponent && (
        <div id="logo">
          <h1>Dark City Productions</h1>
        </div>
      )}
    </div>
  );
};
export default Header;
