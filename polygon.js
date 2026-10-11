const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

// Requirements#
// Store the number of sides in a constant.
// Store the center and radius in constants.
// Calculate all seven vertices.
// Do not hard-code any vertex coordinates.
// Use a loop.
// Every vertex must lie on the same circle.
// The vertices must be equally spaced around the circle.
// Connect the last vertex back to the first vertex.

function setup() {
    // prepare the sketch
    const WIDTH = 400;
    const HEIGHT = 400;
    const RADIUS = 150;

    r.SetTraceLogLevel(r.LOG_NONE)
    r.InitWindow(WIDTH, HEIGHT, "Points Around a Circle")
    r.SetTargetFPS(60);

    const sides = 7;


    const circle = {
        x: WIDTH / 2,
        y: HEIGHT / 2,
        RADIUS,
    }
    const world = {
        WIDTH, HEIGHT, RADIUS, circle, sides,
    }
    return world
}

function update(world) {
}

function draw(world) {
    r.BeginDrawing()
    r.DrawCircle(world.circle.x, world.circle.y, world.RADIUS, r.RED)
    let radian = 0;
    let x1 = world.circle.x + world.RADIUS * Math.cos(radian)
    let y1 = world.circle.y + world.RADIUS * Math.sin(radian)
    for (let i = 0; i <= world.sides; i++) {

        radian += (2 * Math.PI) / world.sides

        const x2 = world.circle.x + world.RADIUS * Math.cos(radian)
        const y2 = world.circle.y + world.RADIUS * Math.sin(radian)

        r.DrawLine(x1, y1, x2, y2, r.WHITE)
        r.DrawCircle(x2, y2, 10, r.WHITE)
        x1 = x2;
        y1 = y2;
    }
    r.EndDrawing()
}


function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};