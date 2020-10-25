// basic class
var Emoji = /** @class */ (function () {
    function Emoji(icon) {
        this.icon = icon;
    }
    return Emoji;
}());
var ball = new Emoji("⚽");
console.log(ball); // Emoji { icon: "⚽" }
// basic class with public constructor argument
var EmojiWithPublicConstructorArgument = /** @class */ (function () {
    function EmojiWithPublicConstructorArgument(icon) {
        this.icon = icon;
    }
    return EmojiWithPublicConstructorArgument;
}());
var ballPublic = new EmojiWithPublicConstructorArgument("⚽");
ballPublic.icon = "🔥"; // could be problem since you can modify it somewhere else
console.log(ballPublic); // EmojiWithPublicConstructorArgument { icon: "🔥" }
// basic class with private constructor argument
var EmojiWithPrivateConstructorArgument = /** @class */ (function () {
    function EmojiWithPrivateConstructorArgument(icon) {
        this.icon = icon;
    }
    return EmojiWithPrivateConstructorArgument;
}());
var ballPrivate = new EmojiWithPrivateConstructorArgument("⚽");
// ballPrivate.icon = "🔥" -- cant be done, since icon is private
console.log(ballPrivate); // EmojiWithPrivateConstructorArgument { icon: "⚽" }
