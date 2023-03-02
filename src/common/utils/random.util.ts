const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const generateRandomString = (length = 32, char = characters): string => {
  return Array.from({ length }).reduce<string>((acc) => {
    acc += char.charAt(Math.floor(Math.random() * char.length));
    return acc;
  }, '');
};
