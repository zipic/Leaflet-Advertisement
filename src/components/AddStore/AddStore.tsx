import './style.scss';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStore = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    store: '',
    photo: '',
    latitude: '',
    longitude: ''
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    const newData = {
      title: formData.title,
      store: formData.store,
      photo: formData.photo,
      latitude: formData.latitude,
      longitude: formData.longitude
    };

    try {
      await axios.post('http://localhost:3001/add', newData);
      navigate('/');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const handleCloseMenu = () => {
    navigate('/');
    
  };

  return (
    <div className='add'>
      <h2>Додати оголошення</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Назва товару:</label>
        <input type="text" id="title" name="title" onChange={handleChange}/>

        <label htmlFor="storeName">Назва магазину:</label>
        <input type="text" id="storeName" name="store" onChange={handleChange}/>

        <label htmlFor="photoUrl">фото URL:</label>
        <input type="text" id="photoUrl" name="photo" onChange={handleChange} />

        <label htmlFor="latitude">Локація:</label>
        <input type="text" id="latitude" name="latitude" placeholder='Широта' onChange={handleChange} />
        <input type="text" id="longitude" name="longitude" placeholder='Довгота' onChange={handleChange} />

        <button className='adding' type="button" onClick={handleSubmit}>
          Додати
        </button>
        <button className='close' onClick={handleCloseMenu}>Закрити</button>
      </form>
    </div>
  );
};

export default AddStore;
