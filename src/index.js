// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix == undefined) return result;
    let leftToRight = true;
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (leftToRight) {
            for (let left = 0; left < matrix[i].length; left++)
                result[counter++] = matrix[i][left];
            leftToRight = false;
        } else {
            for (let right = matrix[i].length - 1; right >= 0; right--)
                result[counter++] = matrix[i][right];
            leftToRight = true;
        }
    }
    return result;
};
