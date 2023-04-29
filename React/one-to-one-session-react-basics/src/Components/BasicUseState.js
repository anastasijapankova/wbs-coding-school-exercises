import React, { useState } from 'react';

function Hooks() {
  const [color, setColor] = useState('Black');
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");

  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: 1964,
    color: 'red',
  });

  const updateCar = () => {
    setCar((prev) => {
      return {
        ...prev,
        color: 'Black',
        year: 1978,
      };
    });
  };

  return (
    <div className='state'>
      <h1 className='strasua'>UseState Hook</h1>


      <h2>My favorite Color is {color}</h2>
      <button className='btn_green' onClick={() => setColor('Green')}>
        GREEN
      </button>
      <button className='btn_blue' onClick={() => setColor('Blue')}>
        BLUE
      </button>
      <button className='btn_red' onClick={() => setColor('Red')}>
        RED
      </button>
      <button className='btn_gray' onClick={() => setColor('Gray')}>
        GRAY
      </button>


      <h2>
        My car is {car.brand} and it's a {car.color} {car.model} from {car.year}
      </h2>


      <button className='btn_gray' onClick={updateCar}>
        UPDATE CAR
      </button>
    </div>
  );
}

export default Hooks;
