import { onAccumulate } from "../src/modules";

function TestFunction() {
    // Accumulate
    console.log('([1,2,3]) :>> ', onAccumulate([1,2,3]));
}

TestFunction()