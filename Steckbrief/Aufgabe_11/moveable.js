var L11;
(function (L11) {
    class Moveable {
        posX;
        posY;
        velocityX;
        velocityY;
        mor;
        constructor(_position, _velocity, _mor) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
            this.mor = _mor;
        }
    }
    L11.Moveable = Moveable;
})(L11 || (L11 = {}));
//# sourceMappingURL=moveable.js.map