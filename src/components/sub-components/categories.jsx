import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTasks } from "../../common/TasksContext";

export default function ColorToggleButton() {
  const { alignment, handleChange } = useTasks();

  return (
    <ToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={(_, newAlignment) => handleChange(newAlignment)}
      aria-label="Platform"
      style={{ height: "30px", margin: "10px" }}
    >
      <ToggleButton value="not done">غير منجز</ToggleButton>
      <ToggleButton value="done">منجز</ToggleButton>
      <ToggleButton value="all">الكل</ToggleButton>
    </ToggleButtonGroup>
  );
}
