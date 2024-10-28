import "./App.css";
import { Thread } from "./components/Thread/Thread";
import { deliverMessage } from "./components/Thread/actions";

function App() {
  async function sendMessage(formData: FormData) {
    const sentMessage = await deliverMessage(formData.get("message") as string);
    return sentMessage;
  }

  return (
    <div className="flex flex-col gap-2 min-h-screen w-full justify-center items-center">
      <h1 className="text-2xl font-mono">Hello World</h1>

      <Thread sendMessage={sendMessage} />
    </div>
  );
}

export default App;
