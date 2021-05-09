import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { ReactNode } from 'react';

interface TabPanelProp {
  value: number,
  index: number,
  children?: any;
}

function TabPanel({value, index, children}:TabPanelProp) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

export default TabPanel;