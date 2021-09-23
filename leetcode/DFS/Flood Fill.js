/*
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
Output: [[2,2,2],[2,2,2]]

*/
//내코드
var floodFill = function (image, sr, sc, newColor) {
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let len = image.length;
  let origin = image[sr][sc];
  let visited = Array.from(Array(len), () => Array(image[0].length).fill(0));
  visited[sr][sc] = 1;
  image[sr][sc] = newColor;
  const dfs = (x, y) => {
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (
        nx >= 0 &&
        nx < len &&
        ny >= 0 &&
        ny < image[0].length &&
        image[nx][ny] === origin &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = 1;
        image[nx][ny] = newColor;
        dfs(nx, ny);
      }
    }
  };
  dfs(sr, sc);
  return image;
};
// 추천 코드
const floodFill = (image, sr, sc, newColor, firstColor = image[sr][sc]) => {
  // handle if the coordinate is out of bounds
  // or if it is already the new color
  // or if it's not from the original color we're trying to change
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[sr].length ||
    image[sr][sc] !== firstColor ||
    image[sr][sc] === newColor
  ) {
    return image; // return image as-is
  }

  image[sr][sc] = newColor;

  floodFill(image, sr + 1, sc, newColor, firstColor);
  floodFill(image, sr - 1, sc, newColor, firstColor);
  floodFill(image, sr, sc + 1, newColor, firstColor);
  floodFill(image, sr, sc - 1, newColor, firstColor);

  // return modified image
  return image;
};
