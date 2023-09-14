import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';




const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const buttonStyle = {
        fontSize: '1.5em', // Adjust the font size as needed
      };
    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td>
        <button
          onClick={(event) => increaseAllocation(props.name)}
          className="circle-button green"
        >
          <span role="img" aria-label="Add" style={{ color: 'green' }}>
            ➕
          </span>
        </button>
      </td>
      <td>
        <button onClick={handleDeleteExpense} className="circle-button red">
          <span role="img" aria-label="Delete" style={{ color: 'red' }}>
          ⛔
          </span>
        </button>
      </td>
        </tr>
    );
};

export default ExpenseItem;
