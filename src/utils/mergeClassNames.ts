export const mergeClassNames = (...classNames: (string | undefined | null)[]) =>
  classNames.filter(Boolean).join(" ");
