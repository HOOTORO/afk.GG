import { storedValue } from "../components/helper.js";
import { IconizedInput } from "./iconized.js";
export var Virtues;
(function (Virtues) {
    Virtues[Virtues["MIGHT"] = 0] = "MIGHT";
    Virtues[Virtues["FORTITUDE"] = 1] = "FORTITUDE";
    Virtues[Virtues["CELERITY"] = 2] = "CELERITY";
    Virtues[Virtues["SORCERY"] = 3] = "SORCERY";
    Virtues[Virtues["SUSTENANCE"] = 4] = "SUSTENANCE";
})(Virtues || (Virtues = {}));
export class Virtue extends IconizedInput {
    class;
    acronym;
    dura;
    constructor(icon, name, id, cl, acronym) {
        super(id, icon, name);
        this.buttons = true;
        this.cssName = `team-set-inputs-number`;
        this.acronym = acronym;
        this.dura = this.name;
        this.value = parseInt(storedValue(this.name).toString());
        this.width = 45;
        this.height = 46;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3R5cGVzL3ZpcnR1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFZLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxNQUFNLENBQU4sSUFBWSxPQU1YO0FBTkQsV0FBWSxPQUFPO0lBQ2pCLHVDQUFLLENBQUE7SUFDTCwrQ0FBUyxDQUFBO0lBQ1QsNkNBQVEsQ0FBQTtJQUNSLDJDQUFPLENBQUE7SUFDUCxpREFBVSxDQUFBO0FBQ1osQ0FBQyxFQU5XLE9BQU8sS0FBUCxPQUFPLFFBTWxCO0FBSUQsTUFBTSxPQUFPLE1BQU8sU0FBUSxhQUFhO0lBQ3ZDLEtBQUssQ0FBUztJQUNkLE9BQU8sQ0FBUztJQUVULElBQUksQ0FBYztJQUN6QixZQUNFLElBQVksRUFDWixJQUFZLEVBQ1osRUFBVSxFQUNWLEVBQVUsRUFDVixPQUFlO1FBRWYsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFtQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZWRWYWx1ZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hlbHBlci5qc1wiO1xuaW1wb3J0IHsgSWNvbml6ZWQsIEljb25pemVkSW5wdXQgfSBmcm9tIFwiLi9pY29uaXplZC5qc1wiO1xuZXhwb3J0IGVudW0gVmlydHVlcyB7XG4gIE1JR0hULFxuICBGT1JUSVRVREUsXG4gIENFTEVSSVRZLFxuICBTT1JDRVJZLFxuICBTVVNURU5BTkNFLFxufVxuXG5leHBvcnQgdHlwZSBEdXJhc1ZpcnR1ZSA9IGtleW9mIHR5cGVvZiBWaXJ0dWVzO1xuXG5leHBvcnQgY2xhc3MgVmlydHVlIGV4dGVuZHMgSWNvbml6ZWRJbnB1dCB7XG4gIGNsYXNzOiBzdHJpbmc7XG4gIGFjcm9ueW06IHN0cmluZztcblxuICBwdWJsaWMgZHVyYTogRHVyYXNWaXJ0dWU7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGljb246IHN0cmluZyxcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaWQ6IG51bWJlcixcbiAgICBjbDogc3RyaW5nLFxuICAgIGFjcm9ueW06IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcihpZCwgaWNvbiwgbmFtZSk7XG4gICAgdGhpcy5idXR0b25zID0gdHJ1ZTtcbiAgICB0aGlzLmNzc05hbWUgPSBgdGVhbS1zZXQtaW5wdXRzLW51bWJlcmA7XG4gICAgdGhpcy5hY3JvbnltID0gYWNyb255bTtcbiAgICB0aGlzLmR1cmEgPSB0aGlzLm5hbWUgYXMgRHVyYXNWaXJ0dWU7XG4gICAgdGhpcy52YWx1ZSA9IHBhcnNlSW50KHN0b3JlZFZhbHVlKHRoaXMubmFtZSkudG9TdHJpbmcoKSk7XG4gICAgdGhpcy53aWR0aCA9IDQ1OyAvLzY2O1xuICAgIHRoaXMuaGVpZ2h0ID0gNDY7IC8vNjc7XG4gIH1cbn1cbiJdfQ==