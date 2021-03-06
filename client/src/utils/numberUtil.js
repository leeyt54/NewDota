export const nth = n => {
  return ["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th";
};

export const getWinRate = (wins, games_played) => {
  return ((wins / games_played) * 100).toFixed(2);
};

export const kFormatter = num => {
  return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
};
