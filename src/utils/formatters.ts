/**
 * Formata a number for social media info.
 * If a number reaches 1000 like 1200 will be shown as 1.2K and the same for M
 *
 * Thanks to: https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900#answer-9461657
 * @param num
 */
export const kFormatter = (num: number) => {
  if (Math.abs(num) <= 9999) {
    return Math.sign(num) * Math.abs(num);
  } else if (Math.abs(num) <= 999999) {
    return Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1)) + "k";
  } else {
    return Math.sign(num) * Number((Math.abs(num) / 1000000).toFixed(1)) + "M";
  }
};
