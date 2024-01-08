import './style.scss';

export const Finder = () => {
  return (
    <div className="finder">
      <p className="finder__name">Пошук</p>
      <input className="finder__value" type="text" placeholder="Почни вводити..."/>
    </div>
  );
}

export default Finder;