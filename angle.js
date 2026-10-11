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

    r.DrawLine(world.point1.x, 0, world.point1.x, world.HEIGHT, r.WHITE)
    r.DrawLine(0, world.point1.y, world.WIDTH, world.point1.y, r.WHITE)


    r.DrawCircle(world.point1.x, world.point1.y, 5, r.WHITE);
    r.DrawCircle(world.point2.x, world.point2.y, 5, r.WHITE);

    const h = distance(world.point1, world.point2)
    const p = distance(world.point2, { x: world.point2.x, y: world.point1.y })

    const theta = toDegree(Math.asin(p / h))
    r.DrawText(`Angle ${Math.floor(theta)} degree`, world.WIDTH - 200, 50, 24, r.GOLD);

    r.DrawLine(world.point1.x, world.point1.y, world.point2.x, world.point2.y, r.BLUE)
    r.DrawLine(world.point2.x, world.point2.y, world.point2.x, world.point1.y, r.BLUE)


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