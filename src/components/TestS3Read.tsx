import React, { useEffect, useState } from 'react';

const SnackImages = () => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const response = await fetch('/api/snacks');
        const data = await response.json();
        setSnacks(data);
      } catch (error) {
        console.error('Error fetching snacks:', error);
      }
    };

    fetchSnacks();
  }, []);

  return (
    <div>
      {snacks.map((snack) => (
        <div key={snack.id} style={{ margin: '20px' }}>
          <h3>{snack.name}</h3>
          <img
            src={snack.photo_url}
            alt={snack.name}
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
};

export default SnackImages;
