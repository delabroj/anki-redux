const data = ['apples', 'oranges', 'raisins'];

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fakeFetch = () =>
  delay(500).then(() => {
    return data;
  });
