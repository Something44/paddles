namespace SpriteKind {
    export const rightpaddle = SpriteKind.create()
    export const leftpaddle = SpriteKind.create()
}
function Left_Paddle () {
    Left_paddle = sprites.create(img`
        . . . 6 6 6 6 1 . . . . . . . . 
        . . . 6 6 6 6 1 . . . . . . . . 
        . . . 6 6 6 1 1 . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . 6 6 6 1 1 . . . . . . . . . 
        . . 6 6 6 1 . . . . . . . . . . 
        . . 6 6 6 1 . . . . . . . . . . 
        . . 6 6 6 1 . . . . . . . . . . 
        . . 6 6 6 1 . . . . . . . . . . 
        . . 6 6 6 1 . . . . . . . . . . 
        . . 6 6 6 1 . . . . . . . . . . 
        . . 6 6 6 1 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 1 . . . . . . . . 
        . . . 6 6 6 6 1 . . . . . . . . 
        . . . 6 6 6 6 1 . . . . . . . . 
        `, SpriteKind.leftpaddle)
    controller.moveSprite(Left_paddle, 0, 150)
    Left_paddle.left = 0
    Left_paddle.setStayInScreen(true)
}
function Crate_Ball () {
    Ball = sprites.create(img`
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . 1 1 6 6 6 6 6 6 1 1 . . . 
        . . 1 1 6 6 6 6 6 6 6 6 1 1 . . 
        . 1 1 6 b 6 6 6 6 6 6 6 6 1 1 . 
        . 1 6 b 6 6 6 6 6 1 1 1 6 6 1 . 
        1 6 b b 6 6 6 6 6 1 1 1 6 6 6 1 
        1 6 b 6 6 6 6 6 6 1 1 1 6 6 6 1 
        1 6 3 6 6 6 6 6 6 6 6 6 1 6 6 1 
        1 5 3 b 6 6 6 6 6 6 6 6 6 6 6 1 
        1 5 3 3 6 6 6 6 6 6 6 6 6 b 6 1 
        1 5 b 3 3 6 6 6 6 6 6 6 b b 6 1 
        . 1 5 3 3 3 b 6 6 6 6 b b 5 1 . 
        . 1 b 5 3 3 3 3 3 3 3 5 5 1 1 . 
        . . 1 b 5 b 3 3 3 3 5 5 1 1 . . 
        . . . 1 1 5 5 5 5 5 5 1 1 . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        `, SpriteKind.Player)
    Ball.setVelocity(100, 100)
    Ball.setBounceOnWall(true)
    Ball.y = randint(0, 120)
}
function Right_Paddle () {
    Right_Paddle2 = sprites.create(img`
        . . . . . . . . . 1 2 2 2 2 . . 
        . . . . . . . . . 1 2 2 2 2 . . 
        . . . . . . . . . 1 1 2 2 2 . . 
        . . . . . . . . . . . 1 2 2 . . 
        . . . . . . . . . . . 1 2 2 2 . 
        . . . . . . . . . . . . 1 2 2 . 
        . . . . . . . . . . . . 1 2 2 . 
        . . . . . . . . . . . . 1 2 2 . 
        . . . . . . . . . . . . 1 2 2 . 
        . . . . . . . . . . . . 1 2 2 . 
        . . . . . . . . . . . 1 2 2 2 . 
        . . . . . . . . . . . 1 2 2 2 . 
        . . . . . . . . . . . 1 2 2 2 . 
        . . . . . . . . . 1 1 2 2 2 . . 
        . . . . . . . . . 1 2 2 2 2 . . 
        . . . . . . . . . 1 2 2 2 2 . . 
        `, SpriteKind.rightpaddle)
    controller.player2.moveSprite(Right_Paddle2, 0, 150)
    Right_Paddle2.right = 160
    Right_Paddle2.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.leftpaddle, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rightpaddle, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
    music.baDing.play()
})
let Right_Paddle2: Sprite = null
let Ball: Sprite = null
let Left_paddle: Sprite = null
Crate_Ball()
Left_Paddle()
Right_Paddle()
forever(function () {
    music.playMelody("G B A G C5 B A B ", 175)
})
