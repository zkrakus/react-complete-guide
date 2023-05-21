import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const toggleAddNewExpenseHandler = () => setIsEditing(prevState => !prevState)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    toggleAddNewExpenseHandler();
  }

  return(
    <div className='new-expense'>
      {!isEditing && <button onClick={toggleAddNewExpenseHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancel={toggleAddNewExpenseHandler} onSaveExpenseData={saveExpenseDataHandler}/> }
    </div>
  )
}

export default NewExpense;