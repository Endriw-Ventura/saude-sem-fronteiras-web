import Doctor from "@/types/doctor";

interface componentProps {
  createDoctor: Doctor;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function WeekdaysCheckbox({
  createDoctor,
  handleCheckboxChange,
}: componentProps) {
  return (
    <div className="grid grid-cols-7 gap-2 text-center font-semibold text-sm">
      <div>D</div>
      <div>S</div>
      <div>T</div>
      <div>Q</div>
      <div>Q</div>
      <div>S</div>
      <div>S</div>
      <input
        checked={createDoctor.WeekdaysDTO.sunday}
        name="sunday"
        type="checkbox"
        onChange={handleCheckboxChange}
      />
      <input
        checked={createDoctor.WeekdaysDTO.monday}
        name="monday"
        type="checkbox"
        onChange={handleCheckboxChange}
      />
      <input
        checked={createDoctor.WeekdaysDTO.tuesday}
        name="tuesday"
        type="checkbox"
        onChange={handleCheckboxChange}
      />
      <input
        checked={createDoctor.WeekdaysDTO.wednesday}
        name="wednesday"
        type="checkbox"
        onChange={handleCheckboxChange}
      />
      <input
        checked={createDoctor.WeekdaysDTO.thursday}
        name="thursday"
        type="checkbox"
        onChange={handleCheckboxChange}
      />
      <input
        checked={createDoctor.WeekdaysDTO.friday}
        name="friday"
        type="checkbox"
        onChange={handleCheckboxChange}
      />
      <input
        checked={createDoctor.WeekdaysDTO.saturday}
        name="saturday"
        type="checkbox"
        onChange={handleCheckboxChange}
      />
    </div>
  );
}
