namespace SpriteKind {
    export const rightpaddle = SpriteKind.create()
    export const leftpaddle = SpriteKind.create()
}
function Left_Paddle () {
    Left_paddle = sprites.create(img`
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        . . . 6 6 6 1 . . . . . . . . . 
        `, SpriteKind.leftpaddle)
    controller.moveSprite(Left_paddle, 0, 150)
    Left_paddle.left = 0
    Left_paddle.setStayInScreen(true)
}
function Crate_Ball () {
    Ball = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . b b 9 9 9 9 9 9 9 9 b b . . 
        . b b 9 d 9 9 9 9 9 9 9 9 b b . 
        . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
        b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
        b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
        b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
        b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
        . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `, SpriteKind.Player)
    Ball.setVelocity(100, 100)
    Ball.setBounceOnWall(true)
    Ball.y = randint(0, 120)
}
function Right_Paddle () {
    Right_Paddle2 = sprites.create(img`
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        . . . . . . . . 1 2 2 2 . . . . 
        `, SpriteKind.rightpaddle)
    controller.player2.moveSprite(Right_Paddle2, 0, 150)
    Right_Paddle2.right = 160
    Right_Paddle2.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.leftpaddle, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rightpaddle, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
let Right_Paddle2: Sprite = null
let Ball: Sprite = null
let Left_paddle: Sprite = null
Crate_Ball()
Left_Paddle()
Right_Paddle()
