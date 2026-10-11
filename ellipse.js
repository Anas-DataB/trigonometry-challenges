const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}



function setup() {
    // prepare the sketch
    const WIDTH = 600;
    const HEIGHT = 400;

    const MAJOR_RADIUS = 200;
    const MINOR_RADIUS = 100;

    r.SetTraceLogLevel(r.LOG_NONE)
    r.InitWindow(WIDTH, HEIGHT, "Points Around a Circle")
    r.SetTargetFPS(60);

    const origin = {
        x: 300,
        y: 200,
    }

    const world = {
        WIDTH, HEIGHT, MAJOR_RADIUS, MINOR_RADIUS, origin,
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

    for (let i = 0; i <= 360; i += 0.25) {
        const x = world.origin.x + world.MAJOR_RADIUS * Math.cos(toRadian(i));
        const y = world.origin.y + world.MINOR_RADIUS * Math.sin(toRadian(i));
        r.DrawCircle(x, y, 2, r.RED)
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