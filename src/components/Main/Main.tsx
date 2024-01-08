import { useEffect, useState } from "react";
import Advertisement from "../Advertisement/Advertisement";
import Map from "../Map/Map";
import './style.scss';
import { Furniture } from "../../interface/furniture";

export const Main = () => {
  const [furnitures, setFurnitures] = useState<Furniture[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setFurnitures(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
    <div className="main">
      <Map furnitures={furnitures}/>
      <Advertisement furnitures={furnitures}/>
    </div>
    </>
  );
}

export default Main;