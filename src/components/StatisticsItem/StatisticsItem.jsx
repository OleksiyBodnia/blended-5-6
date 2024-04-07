import { IconContext } from 'react-icons';
import style from './Statistics.module.css'
export const StatisticsItem = ({item: { title, total}, Icon }) => {
  return (
    <>
      {
        <IconContext.Provider value={{ size: "2em", color: "orange"}}>
  <div>
    <Icon />
  </div>
</IconContext.Provider>
      }
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
  
  // <h3>StatisticsItem</h3>;
};
