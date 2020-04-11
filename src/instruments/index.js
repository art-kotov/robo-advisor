export const delay = (duration = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("A resolved promise"), duration);
  });
};

export const removeProperty = (prop) => ({ [prop]: _, ...rest }) => rest;
