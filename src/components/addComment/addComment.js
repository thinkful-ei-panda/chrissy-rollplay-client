import React, { Component } from 'react';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      system: '',
      username: '',
      passphrase: '',
      description: ''
    };
  };

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val})
  }

  render() {
    const { goBack } = this.props;
    return (
      <section className="adding-topic">
        <form className="add-topic-form" onSubmit={this.handleSubmit}>
          <input type="text" name="title" onChange={this.handleChange} />
          <input type="text" name="system" onChange={this.handleChange} />
          <input type="text" name="username" onChange={this.handleChange} />
          <input type="text" name="passphrase" onChange={this.handleChange} />
          <textarea name="description" onChange={this.handleChange} />
          <button type="submit">Create New Topic</button>
          <button type="button" onClick={goBack}>Go Back</button>
        </form>
      </section>
    )
  }
}

export default AddComment;