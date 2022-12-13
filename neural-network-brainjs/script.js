async function calc() {
        
    // Neural network instance
    const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

    // Data for training
    const training = [
        { input: [0, 0, 1], output: [0] },
        { input: [0, 1, 1], output: [0] },
        { input: [0, 1, 0], output: [0] },
        { input: [1, 0, 1], output: [1] },
        { input: [1, 1, 0], output: [1] },
        { input: [1, 0, 0], output: [1] },
    ];

    // Number of trainings
    const numTrain = document.querySelector('#number-trainings');

    if (numTrain.value == 0) {
        alert("Inform the amount of trainings in the next time, putting 100");
        numTrain.value = 100;
    }
    
    // Neural network training with data
    //net.train(training);
    for (let i = 0; i < numTrain.value; i++) {net.train(training)}

    // Input
    const entryOne = document.querySelector('#entry01');
    const entryTwo = document.querySelector('#entry02');
    const entryThree = document.querySelector('#entry03');

    if (!testInput(entryOne.value)) {
        entryOne.value = 0;
    }
    if (!testInput(entryTwo.value)) {
        entryTwo.value = 0;
    }
    if (!testInput(entryThree.value)) {
        entryThree.value = 0;
    }

    // Neural network test with the data input
    const output = net.run([entryOne.value,
                            entryTwo.value, 
                            entryThree.value]);

    // Show result
    document.querySelector('.result').innerText = output;

}

function testInput(value){
    if (value == undefined || value == null || value == "" || value > 1 || value < 0) {
        alert("Attention, only numbers between 0 and 1 are accepted!")
        return false;
    } else {
        return true;
    }
}