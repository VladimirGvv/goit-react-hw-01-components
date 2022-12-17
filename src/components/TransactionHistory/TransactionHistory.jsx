import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.scss';

export const TransactionHistory = ({ items }) => {
  const { transactions, headers__row, headers, data__row, data, data__type } = styles;

  return (
    <table className={transactions}>
      <thead>
        <tr className={headers__row}>
          <th className={headers}>Type</th>
          <th className={headers}>Amount</th>
          <th className={headers}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={data__row} key={id}>
            <td className={data__type}>{type}</td>
            <td className={data}>{amount}</td>
            <td className={data}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};