class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet(userMessage) {
      const message = this.createChatBotMessage(userMessage);
      this.setState(prev => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  