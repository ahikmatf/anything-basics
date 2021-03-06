// basic class
class Emoji {
    constructor(icon) {
        this.icon = icon;
    }
}
const ball = new Emoji("⚽");
console.log(ball); // Emoji { icon: "⚽" }
// basic class with public constructor argument
class EmojiWithPublicConstructorArgument {
    constructor(icon) {
        this.icon = icon;
    }
}
const ballPublic = new EmojiWithPublicConstructorArgument("⚽");
ballPublic.icon = "🔥"; // could be problem since you can modify it somewhere else
console.log(ballPublic); // EmojiWithPublicConstructorArgument { icon: "🔥" }
// basic class with private constructor argument
class EmojiWithPrivateConstructorArgument {
    constructor(icon) {
        this.icon = icon;
    }
}
const ballPrivate = new EmojiWithPrivateConstructorArgument("⚽");
// ballPrivate.icon = "🔥" -- cant be done, since icon is private
console.log(ballPrivate); // EmojiWithPrivateConstructorArgument { icon: "⚽" }
