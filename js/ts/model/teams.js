import { storedValue } from "../components/helper.js";
import { Tree } from "../types/inventory.js";
import { Renderer } from "./afk.js";
export class Team {
    heroes;
    pet;
    target;
    elderTree;
    _max;
    damage;
    constructor(p, t, ...team) {
        this._max = 5;
        this.pet = p;
        this.target = t;
        this.heroes = [];
        for (const br of Tree) {
            if (storedValue(br.id.toString())) {
                br.value = parseInt(storedValue(br.id.toString()).toString());
            }
        }
        if (team.length >= this._max) {
            throw Error("Only 5 team members max");
        }
        else {
            team.forEach((v, i) => {
                this.heroes.push([i, v]);
            });
        }
    }
    addToTeam(h) {
        if (this.heroes?.length < 5) {
            this.heroes.push([this.heroes.length, h]);
            return true;
        }
        else {
            console.log("Team is full!");
            return false;
        }
    }
    makeAttack(dmg, c) {
        if (this.damage === undefined) {
            this.damage = [];
        }
        this.damage.push([dmg, c]);
    }
    removeHero(h) {
        if (typeof h === "string") {
            const idx = this.heroes.findIndex((x) => x[1].name.includes(h) || x[1].short.includes(h));
            if (idx > -1) {
                this.heroes.splice(idx, 1);
            }
        }
        if (typeof h === "number") {
            this.heroes.splice(h, 1);
        }
        if (typeof h === "object") {
            const idx = this.heroes.findIndex((x) => x[1].name === h.name);
            if (idx > -1) {
                this.heroes.splice(idx, 1);
            }
        }
    }
    Heroes() {
        return this.heroes.map((x) => x[1]);
    }
    setElderTree(t, lvl) {
        this.elderTree.find((x) => x.name === t).value = lvl;
        storedValue(t, lvl);
    }
    TreeString() {
        return this.elderTree
            .map((x) => `${Renderer.Icon(x.icon, x.name, 12)}:${x.value}`)
            .join("  ");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kZWwvdGVhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBNENwQyxNQUFNLE9BQU8sSUFBSTtJQUNmLE1BQU0sQ0FBbUI7SUFDekIsR0FBRyxDQUFNO0lBQ1QsTUFBTSxDQUFVO0lBQ2hCLFNBQVMsQ0FBVztJQUNaLElBQUksQ0FBUztJQUNyQixNQUFNLENBQXNCO0lBRTVCLFlBQVksQ0FBTyxFQUFFLENBQVUsRUFBRSxHQUFHLElBQVk7UUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQUssTUFBTSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNoRSxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDN0IsTUFBTSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN6QyxDQUFDO2FBQU0sQ0FBQztZQUNOLElB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Q0FBQyxTQUFTO2FBQ2xCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0b3JlZFZhbHVlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVscGVyLmpzXCI7XG5pbXBvcnQgeyBUcmVlIH0gZnJvbSBcIi4uL3R5cGVzL2ludmVudG9yeS5qc1wiO1xuaW1wb3J0IHsgVmlydHVlIH0gZnJvbSBcIi4uL3R5cGVzL3ZpcnR1ZS5qc1wiO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tIFwiLi9hZmsuanNcIjtcblxuaW50ZXJmYWNlIEFma09iamVjdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbn1cblxudHlwZSBQZXQgPSB7IG5hbWU6IHN0cmluZzsgc2hvcnQ/OiBzdHJpbmc7IGx2bD86IG51bWJlcjsgaWNvbj86IHN0cmluZyB9O1xuXG4vLyB0eXBlIER1cmFUcmVlID0ge1xuLy8gICBpZDogc3RyaW5nO1xuLy8gICBuYW1lOiBzdHJpbmc7XG4vLyAgIGljb246IHN0cmluZztcbi8vICAgdmFsdWU6IG51bWJlcjtcbi8vIH07XG5cbnR5cGUgSGVybyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBzaG9ydDogc3RyaW5nO1xuICBhc2M/OiBBc2NlbnNpb247XG4gIHNpPzogU2lnO1xuICBmdT86IEZ1cm47XG4gIGVuZz86IEVuZ3J2O1xuICBpY29uPzogc3RyaW5nO1xufTtcblxudHlwZSBBc2NlbnNpb24gPVxuICB8IFwiRVwiXG4gIHwgXCJFK1wiXG4gIHwgXCJMXCJcbiAgfCBcIkwrXCJcbiAgfCBcIk1cIlxuICB8IFwiTStcIlxuICB8IFwiQVwiXG4gIHwgXCJBKlwiXG4gIHwgXCJBKipcIlxuICB8IFwiQSoqKlwiXG4gIHwgXCJBKioqKlwiXG4gIHwgXCJBKioqKipcIjtcbnR5cGUgRnVybiA9IFwiMEZcIiB8IFwiM0ZcIiB8IFwiOUZcIjtcbnR5cGUgU2lnID0gXCIrMjBcIiB8IFwiKzMwXCI7XG5cbnR5cGUgRW5ncnYgPSBcIkUzMFwiIHwgXCJFNjBcIiB8IFwiRTgwXCI7XG5cbmV4cG9ydCBjbGFzcyBUZWFtIHtcbiAgaGVyb2VzOiBbbnVtYmVyLCBIZXJvXVtdO1xuICBwZXQ6IFBldDtcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuICBlbGRlclRyZWU6IFZpcnR1ZVtdO1xuICBwcml2YXRlIF9tYXg6IG51bWJlcjtcbiAgZGFtYWdlOiBbbnVtYmVyLCBzdHJpbmc/XVtdO1xuXG4gIGNvbnN0cnVjdG9yKHA/OiBQZXQsIHQ/OiBzdHJpbmcsIC4uLnRlYW06IEhlcm9bXSkge1xuICAgIHRoaXMuX21heCA9IDU7XG4gICAgdGhpcy5wZXQgPSBwO1xuICAgIHRoaXMudGFyZ2V0ID0gdDtcbiAgICB0aGlzLmhlcm9lcyA9IFtdO1xuICAgIGZvciAoY29uc3QgYnIgb2YgVHJlZSkge1xuICAgICAgaWYgKHN0b3JlZFZhbHVlKGJyLmlkLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgIGJyLnZhbHVlID0gcGFyc2VJbnQoc3RvcmVkVmFsdWUoYnIuaWQudG9TdHJpbmcoKSkudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZWFtLmxlbmd0aCA+PSB0aGlzLl9tYXgpIHtcbiAgICAgIHRocm93IEVycm9yKFwiT25seSA1IHRlYW0gbWVtYmVycyBtYXhcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlYW0uZm9yRWFjaCgodiwgaSkgPT4ge1xuICAgICAgICB0aGlzLmhlcm9lcy5wdXNoKFtpLCB2XSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyB4IC0gaGVybyBwb3NpdGlvbiBmcm9tIDEgdG8gNSBvbmx5XG4gIGFkZFRvVGVhbShoOiBIZXJvKSB7XG4gICAgaWYgKHRoaXMuaGVyb2VzPy5sZW5ndGggPCA1KSB7XG4gICAgICB0aGlzLmhlcm9lcy5wdXNoKFt0aGlzLmhlcm9lcy5sZW5ndGgsIGhdKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlRlYW0gaXMgZnVsbCFcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbWFrZUF0dGFjayhkbWc6IG51bWJlciwgYz86IHN0cmluZykge1xuICAgIGlmICh0aGlzLmRhbWFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRhbWFnZSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmRhbWFnZS5wdXNoKFtkbWcsIGNdKTtcbiAgfVxuXG4gIHJlbW92ZUhlcm8oaDogc3RyaW5nIHwgbnVtYmVyIHwgSGVybykge1xuICAgIGlmICh0eXBlb2YgaCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5oZXJvZXMuZmluZEluZGV4KFxuICAgICAgICAoeCkgPT4geFsxXS5uYW1lLmluY2x1ZGVzKGgpIHx8IHhbMV0uc2hvcnQuaW5jbHVkZXMoaClcbiAgICAgICk7XG4gICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5oZXJvZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy5oZXJvZXMuc3BsaWNlKGgsIDEpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGggPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuaGVyb2VzLmZpbmRJbmRleCgoeCkgPT4geFsxXS5uYW1lID09PSBoLm5hbWUpO1xuICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgIHRoaXMuaGVyb2VzLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlcm9lcygpIHtcbiAgICByZXR1cm4gdGhpcy5oZXJvZXMubWFwKCh4KSA9PiB4WzFdKTtcbiAgfVxuXG4gIHNldEVsZGVyVHJlZSh0OiBzdHJpbmcsIGx2bDogbnVtYmVyKSB7XG4gICAgdGhpcy5lbGRlclRyZWUuZmluZCgoeCkgPT4geC5uYW1lID09PSB0KS52YWx1ZSA9IGx2bDtcbiAgICBzdG9yZWRWYWx1ZSh0LCBsdmwpO1xuICB9XG5cbiAgVHJlZVN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5lbGRlclRyZWVcbiAgICAgIC5tYXAoKHgpID0+IGAke1JlbmRlcmVyLkljb24oeC5pY29uLCB4Lm5hbWUsIDEyKX06JHt4LnZhbHVlfWApXG4gICAgICAuam9pbihcIiAgXCIpO1xuICB9XG59XG5cbmV4cG9ydCB7IEFma09iamVjdCwgQXNjZW5zaW9uLCBFbmdydiwgRnVybiwgSGVybywgUGV0LCBTaWcgfTtcbiJdfQ==