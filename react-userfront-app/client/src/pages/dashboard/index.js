import { useState, useEffect } from 'react';
import { Userfront } from '../../userfront';
const Dashboard = ({ children, style }) => {
  const [privateData, setPrivateData] = useState();
  // Get private data
  useEffect(() => {
    (async () => {
      try {
        // https://asia-northeast1-something.cloudfunctions.net/cool
        // http://localhost:3010/data
        const response = await fetch(
          `https://asia-northeast1-something.cloudfunctions.net/cool/data`,
          {
            headers: {
              Authorization: `Bearer ${Userfront.accessToken()}`,
            },
          }
        );
        const json = await response.json();
        setPrivateData(json);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <h3>Private data</h3>
      <pre>{JSON.stringify(privateData, null, 2)}</pre>
      <button onClick={Userfront.logout}>Logout</button>
    </div>
  );
};

export { Dashboard };
