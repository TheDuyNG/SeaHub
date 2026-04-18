export default function WeatherCard() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="font-semibold">🌧️ Thời tiết</h3>

      <div className="mt-3 text-center">
        <p className="text-3xl font-bold">30°C</p>
        <p className="text-sm text-gray-500">Có mây</p>
      </div>
    </div>
  );
}