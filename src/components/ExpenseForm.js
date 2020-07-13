import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : 0,
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      focused: false,
      error: "",
    };
  }
  descriptionChange = (e) => this.setState({ description: e.target.value });
  handleAmount = (e) => {
    if (e.target.value.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState({ amount: e.target.value });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.amount || !this.state.description) {
      this.setState({ error: "Please provide description and amount" });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.descriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleAmount}
          />
          <br />
          <textarea
            placeholder="add a note for expense"
            value={this.state.note}
            onChange={(e) => this.setState({ note: e.target.value })}
          ></textarea>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={(date) => this.setState({ createdAt: date })}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>
    );
  }
}
