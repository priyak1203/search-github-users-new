import { Button } from './components/ui/button';

function App() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Search Github Users</h1>
      <div className="flex gap-4">
        <Button>Click me</Button>
        <Button variant="outline" size="lg">
          Click me
        </Button>
        <Button variant="destructive" size="sm">
          Click me
        </Button>
      </div>
    </div>
  );
}

export default App;
