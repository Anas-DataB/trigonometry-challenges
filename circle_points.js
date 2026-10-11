const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

// Requirements#
// Store the number of points in a constant.
// Calculate the position of every point.
// Do not hard-code the coordinates of the 12 points.
// Do not write 12 separate drawing statements.
// Use a loop.
// Every point should lie on the circumference.
// The angular spacing between consecutive points should be equal.

function setup() {
    // prepare the sketch
    const WIDTH = 400;
    const HEIGHT = 400;
    const RADIUS = 150;

    r.SetTraceLogLevel(r.LOG_NONE)
    r.InitWindow(WIDTH, HEIGHT, "Points Around a Circle")
    r.SetTargetFPS(60);

    const points = 12;


    const circle = {
        x: WIDTH / 2,
        y: HEIGHT / 2,
        RADIUS,
    }
    const world = {
        WIDTH, HEIGHT, RADIUS, circle, points
    }
    return world
}

function update(world) {
}

function draw(world) {
    r.BeginDrawing()
    r.DrawCircle(world.circle.x, world.circle.y, world.RADIUS, r.RED)
    let radian = 0
    for (let i = 1; i <= 12; i++) {
        const x = world.circle.x + world.RADIUS * Math.cos(radian)
        const y = world.circle.y + world.RADIUS * Math.sin(radian)
        radian += (2 * Math.PI) / 12
        r.DrawCircle(x, y, 10, r.WHITE)
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