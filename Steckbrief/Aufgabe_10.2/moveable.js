var L10_2;
(function (L10_2) {
    class Moveable {
        posX;
        posY;
        velocityX;
        velocityY;
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            console.log("draw");
        }
        update() {
            console.log("update");
        }
    }
    L10_2.Moveable = Moveable;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=moveable.js.map