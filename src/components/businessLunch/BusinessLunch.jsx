import React from 'react';

const lunchItems = [
  {
    title: "Bazar Ertəsi Menyusu",
    desc: "Toyuq kotleti + kartof + salat",
    img: "https://source.unsplash.com/400x250/?lunch"
  },
  {
    title: "Çərşənbə Axşamı",
    desc: "Plov + şorba + kompot",
    img: "https://source.unsplash.com/400x250/?rice"
  },
  {
    title: "Çərşənbə",
    desc: "Ətli makaron + salat",
    img: "https://source.unsplash.com/400x250/?pasta"
  }
  ,
  {
    title: "Cümə Axşamı",
    desc: "Ətli makaron + salat",
    img: "https://source.unsplash.com/400x250/?pasta"
  }
  ,
  {
    title: "Cümə",
    desc: "Ətli makaron + salat",
    img: "https://source.unsplash.com/400x250/?pasta"
  }
];

export default function BusinessLunch() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Business Lunch Menyular</h2>
        <div className="row">
          {lunchItems.map((item, idx) => (
            <div className="col-md-4 " key={idx}>
              <div className="card mb-4 text-bg-secondary">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
