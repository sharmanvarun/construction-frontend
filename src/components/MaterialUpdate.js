import React, { Component } from "react";
import WebSocketService from "../services/websocketService";

class MaterialUpdates extends Component {
  constructor() {
    super();
    this.state = {
      updates: [],
    };

    // Initialize the WebSocket service
    this.ws = new WebSocketService();
  }

  componentDidMount() {
    // Listen for updates and update the state when new messages arrive
    this.ws.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("message", message);
      // Assuming message is an object with material updates
      this.setState((prevState) => ({
        updates: [...prevState.updates, message],
      }));
    };
  }

  componentWillUnmount() {
    // Close the WebSocket connection when the component unmounts
    this.ws.close();
  }

  render() {
    return (
      <div>
        <h2>Material Updates</h2>
        <ul>
          {this.state.updates.map((update, index) => (
            <li key={index}>
              {update.name} - Availability: {update.availability_status}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MaterialUpdates;
