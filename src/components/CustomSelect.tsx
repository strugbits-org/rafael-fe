import { Select } from "antd";

const data = [
  { value: "continents", label: "Continents" },
  { value: "countries", label: "Countries" },
];
const CustomSelect = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <Select
      defaultValue="Continents"
      style={{ width: 120 }}
      onChange={onChange}
      options={data}
    />
  );
};

export default CustomSelect;
