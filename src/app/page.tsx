import DatePicker from '../components/DatePicker';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Recurring Date Picker</h1>
        <DatePicker />
      </div>
    </div>
  );
}
