import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "User",
        bio: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SHRUTIBIRRU");
    const json = await data.json();
    this.setState({ userData: json });
  }
  render() {
    const { name, bio } = this.state.userData;
    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>Bio: {bio}</h2>
      </div>
    );
  }
}

export default UserClass;
