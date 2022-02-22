import React from 'react';

class EditBurgerForm extends React.Component {
  handleChange = (e) => {
    const updatedBurger = {
      ...this.props.burger,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    this.props.updateBurger(this.props.index, updatedBurger);
  };
  render() {
    return (
      <div className='burger-edit'>
        <input
          onChange={this.handleChange}
          name='name'
          type='text'
          placeholder='Name'
          value={this.props.burger.name}
        />
        <input
          onChange={this.handleChange}
          name='price'
          type='text'
          placeholder='Price'
          value={this.props.burger.price}
        />
        <select
          onChange={this.handleChange}
          name='status'
          className='status'
          value={this.props.burger.status}
        >
          <option value='available'>Доступно</option>
          <option value='unavailable'>Убрать из меню</option>
        </select>
        <textarea
          onChange={this.handleChange}
          name='desc'
          placeholder='Desc'
          value={this.props.burger.desc}
        />
        <input
          onChange={this.handleChange}
          name='image'
          type='text'
          placeholder='Image'
          value={this.props.burger.image}
        />
        <button onClick={() => this.props.deleteBurger(this.props.index)}>Удалить из меню</button>
      </div>
    );
  }
}

export default EditBurgerForm;
