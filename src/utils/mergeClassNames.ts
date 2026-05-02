export const mergeClassNames = (
  ...classNames: (string | boolean | undefined | null)[]
) => classNames.filter(Boolean).join(" ");
