export const findById = <T extends { id: number }>(items: T[], id: number) =>
  items.find((item) => item.id === id);
