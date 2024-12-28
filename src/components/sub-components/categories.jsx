import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      style={{height:'30px',margin:'10px'}}
    >
      <ToggleButton value="not done">غير منجز</ToggleButton>
      <ToggleButton value="done">منجز</ToggleButton>
      <ToggleButton value="all">الكل</ToggleButton>
    </ToggleButtonGroup>
  );
}
