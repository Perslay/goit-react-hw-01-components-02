import PropTypes from 'prop-types';
import css from '../css/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const transactionsList = items.transactionsArr;
  return (
    <div className={css.transactionHistory}>
      <table className={css.table}>
        <thead className={css.tableHead}>
          <tr className={css.tableRow}>
            <th className={css.tableHeading}>Type</th>
            <th className={css.tableHeading}>Amount</th>
            <th className={css.tableHeading}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactionsList.map(transaction => (
            <tr className={css.tableRow} key={transaction.id}>
              <td className={css.tableData}>{transaction.type}</td>
              <td className={css.tableData}>{transaction.amount}</td>
              <td className={css.tableData}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.shape({
    transactionsArr: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      })
    ),
  }).isRequired,
};
