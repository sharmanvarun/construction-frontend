class WebSocketService {
  constructor() {
    this.socket = new WebSocket("ws://localhost:8000/ws/materials/"); // Replace with your WebSocket URL

    this.socket.addEventListener("open", this.handleOpen);
    this.socket.addEventListener("message", this.handleMessage);
  }

  handleOpen = () => {
    console.log("WebSocket connection opened");
  };

  handleMessage = (event) => {
    console.log("here");
    const message = JSON.parse(event.data);
    console.log("Received WebSocket message:", message);

    // Handle the received message here and update your React components accordingly
  };

  close = () => {
    this.socket.close();
  };
}

export default WebSocketService;
