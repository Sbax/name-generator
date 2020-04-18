export const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

// since google sheets returns the values by rows and I need them by columns
// this function rotates the matrix so that
//
// [                       [
//    [1, 1, 1],              [1, 2, 3],
//    [2, 2, 2],   becomes    [1, 2, 3],
//    [3, 3, 3],              [1, 2, 3],
// ]                       ]
//
export const rotateMatrix = (matrix) =>
  matrix[0].map((_, i) => matrix.map((row) => row[i]).filter(Boolean));
