export const colors = {
  theme: "#212121",
  orange: "#bf360c",
};

export const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};
