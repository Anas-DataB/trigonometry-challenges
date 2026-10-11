// const sketch = require("./circle_points");
// const sketch = require("./polygon");
// const sketch = require("./waves");
// const sketch = require("./ellipse");
const sketch = require("./angle");



function loop(world) {
    while (sketch.running()) {
        sketch.update(world);
        sketch.draw(world);
    }
}

function main() {
    const world = sketch.setup();
    loop(world);
    sketch.teardown();
}

main(); 