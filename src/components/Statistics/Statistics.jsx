import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const iconArr = [FaRegThumbsUp, MdPeople, MdOutlineProductionQuantityLimits, GiTreeDoor];

export const Statistics = ({ stats }) => {
  return (
    <>
    <h3 className={style.title}>Main Statistics</h3>

<ul className={style.list}>
        {stats.map((item, index) =>
          <li className={style.item} key={item.id}> 
            <StatisticsItem item={item} Icon={iconArr[index]} />
          </li> )
        }
      </ul>
      </>
  );
  
  // <h2>Statistics</h2>;
};
