const controls = () => {
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
            case ' ':
                if (player.vel.y == 0 && player.disable == false) {
                    audio.playAudio(audio.sound.marioJump);
                    player.mState.isJumping = true;
                    player.vel.y -= 25;
                }
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                if (keys.right.pressed === false && player.disable == false) {
                    player.mState.isIdle = false;
                    player.mState.isMoving = true;
                    player.mState.isLeft = true;
                    player.mState.isRight = false;
                    keys.left.pressed = true;
                }
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                if (keys.left.pressed === false && player.disable == false) {
                    player.mState.isIdle = false;
                    player.mState.isMoving = true;
                    player.mState.isLeft = false;
                    player.mState.isRight = true;
                    keys.right.pressed = true;
                }
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                // Add any specific action for the down arrow or 'S' key if needed
                break;
            case 'x': 
                if (player.disable == false && player.powerUp.fire) {
                    audio.playAudio(audio.sound.fireball);
                    player.shootFire();
                }
                break;
        }
    });

    document.addEventListener('keyup', (e) => {
        switch (e.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                if (keys.right.pressed === false && player.disable == false) {
                    player.mState.isIdle = true;
                    player.mState.isMoving = false;
                    player.mState.isLeft = true;
                    player.mState.isRight = false;
                    keys.left.pressed = false;
                }
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                if (keys.left.pressed === false && player.disable == false) {
                    player.mState.isIdle = true;
                    player.mState.isMoving = false;
                    player.mState.isLeft = false;
                    player.mState.isRight = true;
                    keys.right.pressed = false;
                }
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                // Add any specific action for the down arrow or 'S' key if needed
                break;
        }
    });
}

controls();