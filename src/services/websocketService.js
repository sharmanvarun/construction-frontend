class WebSocketService {
  constructor() {
    this.socket = new WebSocket("ws://localhost:8000/ws/materials/");

    this.socket.addEventListener("open", this.handleOpen);
    this.socket.addEventListener("message", this.handleMessage);
    this.socket.addEventListener("error", this.handleError);
  }

  handleOpen = () => {
    console.log("WebSocket connection opened");
  };

  handleMessage = (event) => {
    console.log("Received WebSocket message:", event.data);

    try {
      const message = JSON.parse(event.data);
      console.log("message", message);
      // Handle the received message here and update your React components accordingly
    } catch (error) {
      console.error("Error parsing WebSocket message:", error);
    }
  };

  handleError = (error) => {
    console.error("WebSocket error:", error);
  };

  close = () => {
    this.socket.close();
  };
}

export default WebSocketService;
