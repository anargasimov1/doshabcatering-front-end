import { useEffect, useState } from 'react';

export default function BusinessLunch() {

  const [lunchItems, setLunchItems] = useState([]);

  useEffect(() => {
    fetch("https://doshabcatering.az/node/api/all")
      .then(r => r.json())
      .then(r => setLunchItems(r))
  })




  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 display-5 fw-bold text-success">🍱 Bussines Lunch</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        {lunchItems.map((item, idx) => (
          <div className="col" key={idx}>
            <div className="card shadow-sm lunch-card h-100 border-0">
              <div className="card-header bg-success text-white text-center">
                <h5 className="mb-0">{item.weekday}</h5>
              </div>
              <div className="card-body d-flex flex-column">
                <div className="card-text flex-grow-1">
                  <ul>
                    {item.menu.split("\n").map((i,index) => {
                      return (
                        <li key={index}  className='text-dark-emphasis' style={{ fontStyle: 'italic', fontWeight: "bold" }}>{i}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
