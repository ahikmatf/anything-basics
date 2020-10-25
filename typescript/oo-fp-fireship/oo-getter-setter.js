// basic class with private constructor argument
class EmojiWithGetterAndSetter {
    constructor(_icon) {
        this._icon = _icon;
    }
    get icon() {
        return this._icon;
    }
    get prev() {
        return this._prev;
    }
    change(val) {
        this._prev = this._icon;
        this._icon = val;
    }
}
const emojiGetSet = new EmojiWithGetterAndSetter("⚽");
console.log(emojiGetSet.icon, emojiGetSet.prev); // ⚽ undefined
emojiGetSet.change("🎃");
emojiGetSet.change("✔️");
console.log(emojiGetSet.icon, emojiGetSet.prev); // ✔️ 🎃
