import StatusLabel, { Status } from './components/status-label';
import Button from './components/button';
import InputField from './components/input-field';

export default function Home() {
  return (
    <main>
      <h1 className="text-blue-500 text-xl">
        Home page{new Date().toTimeString()}
      </h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <Button>Add</Button>
    </main>
  );
}
