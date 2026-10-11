const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

// Requirements#
// For each curve:

// Start at an angle of 0.
// Increase the angle in small steps.
// Calculate the function value at each angle.
// Convert that value into a screen coordinate.
// Connect consecutive points with lines.

function setup() {
    // prepare the sketch
    const WIDTH = 600;
    const HEIGHT = 400;
    const RADIUS = 50;

    r.SetTraceLogLevel(r.LOG_NONE)
    r.InitWindow(WIDTH, HEIGHT, "Points Around a Circle")
    r.SetTargetFPS(60);



    const origin = {
        x: 50,
        y: 200,
        RADIUS,
    }
    const world = {
        WIDTH, HEIGHT, RADIUS, origin,
    }
    return world
}

function update(world) {
}

function toRadian(degree) {
    return degree * Math.PI / 180
}

function draw(world) {
    r.BeginDrawing()

    r.DrawLine(0, world.origin.y, world.WIDTH, world.origin.y, r.WHITE)
    r.DrawLine(world.origin.x, 0, world.origin.x, world.HEIGHT, r.WHITE)

    let x = world.origin.x
    let y = world.origin.y

    for (let i = 0; i <= 1000; i += 0.25) {

        const sinx = world.origin.y - Math.sin(toRadian(i)) * 50;
        const cosx = world.origin.y - Math.cos(toRadian(i)) * 50;

        r.DrawCircle(x, sinx, 1, r.RED)
        r.DrawCircle(x, cosx, 1, r.BLUE)

        x += 0.25
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