// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    if (row === n) {
        return;
    }

    if (stair.length === n) {
        console.log(stair);
        return steps(n, ++row);
    }

    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
}

module.exports = steps;

/* 
solution #1:
    function steps(n) {
        for (let row = 0; row < n; row++) {
            let stair = '';
            for (let col = 0; col < n; col++) {
                if (col <= row) {
                    stair += '#';
                } else {
                    stair += ' ';
                }
            }
            console.log(stair);
        }
    }
*/