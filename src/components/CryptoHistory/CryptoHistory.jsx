import style from './CryptoHistory.module.css';
import { format } from 'date-fns';

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr className={style.tr} key={item.id}>
              <td className={style.td}>{item.id}</td>
              <td className={style.td}>{item.price}</td>
              <td className={style.td}>{item.amount}</td>
              <td className={style.td}>{format(item.date, 'MM/dd/yyyy, p')}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
