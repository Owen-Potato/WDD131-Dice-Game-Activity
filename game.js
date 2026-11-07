// 1. Click on button
document.querySelector('#rollButton').addEventListener("click", e => {

    // 2. Animate the die
    document.querySelectorAll('#gameboard img').forEach(image => {
        // change image src to the animated gif
        image.src = "die_rolling.gif";
    });

    // 3. Land on a new random number
    setTimeout(() => {
        // this function will run after the timeout duration below

        const randomNumber = Math.ceil(Math.random() * 6);
        document.querySelectorAll('#gameboard img').forEach(image => {
            const randomNumber = Math.ceil(Math.random() * 6);
            image.src = `hot_pink_dice_${randomNumber}.gif`;
        });
    }, 1000);
})

function isDieUnlocked(dieImage) {
    return Array.from(document.querySelectorAll('#gameboard input'))
            .filter(checkbox => !checkbox.checked)
            .find(unchecked => unchecked.className === dieImage.className);
}



// function setDieImages(imagePath) {
//     document.querySelectorAll('#gameboard img').forEach(image => {
//         image.src = imagePath;
//     });
// }