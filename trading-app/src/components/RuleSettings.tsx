import { useState } from "react";

interface RuleForm {
  buyThreshold: number;
  sellThreshold: number;
}

const RuleSettings: React.FC = () => {
  const [form, setForm] = useState<RuleForm>({
    buyThreshold: 240,
    sellThreshold: 260,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Rules:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div>
        <label className="block">Buy Threshold (£)</label>
        <input
          type="number"
          value={form.buyThreshold}
          onChange={(e) => setForm({ ...form, buyThreshold: +e.target.value })}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block">Sell Threshold (£)</label>
        <input
          type="number"
          value={form.sellThreshold}
          onChange={(e) => setForm({ ...form, sellThreshold: +e.target.value })}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Save Rules
      </button>
    </form>
  );
};

export default RuleSettings;
