import "./App.css";
import { Card } from "./components/atoms/Card/Card";

function App() {
  return (
    <div className="flex flex-col gap-2 min-h-screen w-full justify-center items-center">
      <h1 className="text-2xl font-mono">Hello World</h1>

      <Card>
        <Card.Image />
        <Card.Badge cardBadge="Learning" />
        <Card.PubDate cardPubDate={`Published 15 Oct 2024`} />
        <Card.Title cardTitle="HTML &amp; CSS" />
        <Card.Content cardContent="lorem ipsum dolor sit teut tadhg tell me something that i don't know" />
        <Card.Avatar avatarName="John Doe" />
      </Card>
    </div>
  );
}

export default App;
