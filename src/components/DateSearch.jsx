import { useState } from "react";

export default function DateSearch({ onChange }) {
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setDate(value);
    onChange(value);
  };

  return (
    <div className="bg-white p-3 rounded-xl shadow flex items-center gap-3">
      <label className="font-semibold">📅 Chọn ngày:</label>

      <input
        type="date"
        value={date}
        onChange={handleChange}
        className="border px-2 py-1 rounded"
      />
    </div>
  );
}