const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}



function setup() {
    const WIDTH = 600;
    const HEIGHT = 400;

    r.SetTraceLogLevel(r.LOG_NONE)
    r.InitWindow(WIDTH, HEIGHT, "Points Around a Circle")
    r.SetTargetFPS(60);

    const point1 = {
        x: 100,
        y: 300,
    }
    const point2 = {
        x: 350,
        y: 350,
    }

    const world = {
        WIDTH, HEIGHT, point1, point2
    }
    return world
}

function update(world) {
}

function toRadian(degree) {
    return degree * Math.PI / 180
}

function toDegree(radian) {
    return radian * 180 / Math.PI
}

function distance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
}

function draw(world) {
    r.BeginDrawing()

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