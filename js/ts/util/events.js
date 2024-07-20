import { rewards } from "../components/dataloader.js";
import { populateStorage, rangeSlide } from "../components/helper.js";
import { updateResourceBox } from "../components/output.js";
import { user } from "../main.js";
import { ValueModes } from "../model/constants.js";
export const tLoadedEvent = new Event("tableready");
$(document).on("change", "select", function (x) {
    const changedValue = $(x.target).find(":selected").val();
    const reward = rewards.find((g) => g.mode === ValueModes.gMode(x.target.id) &&
        g.rank === changedValue);
    $("#" + x.target.id + " option[selected]").each(function () {
        this.removeAttribute("selected");
    });
    $(x.target).find(":selected").attr("selected", "");
    populateStorage(x.target.id, changedValue);
    user.reward = reward;
    user.calc();
    updateResourceBox(user.income);
});
$(document).on("mousemove", "input[type='range']", function (x) {
    rangeSlide(x.target.value, user);
    updateResourceBox(user.income, x.target.value);
});
$(document).on("change", "input[type='number']", function (x) {
    $(this).val(x.target.value);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3V0aWwvZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5ELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUdwRCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQzVDLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3pELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQ3pCLENBQUMsQ0FBYSxFQUFFLEVBQUUsQ0FDaEIsQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxJQUFJLEtBQU0sWUFBdUIsQ0FDdEMsQ0FBQztJQUNGLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFbkQsZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFlBQXNCLENBQUMsQ0FBQztJQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDWixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDLENBQUM7QUFFSCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLENBQUM7SUFDNUQsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUMsQ0FBQztBQUVILENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFFLFVBQVUsQ0FBQztJQUMxRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXdhcmRzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0YWxvYWRlci5qc1wiO1xuaW1wb3J0IHsgcG9wdWxhdGVTdG9yYWdlLCByYW5nZVNsaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVscGVyLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVSZXNvdXJjZUJveCB9IGZyb20gXCIuLi9jb21wb25lbnRzL291dHB1dC5qc1wiO1xuaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuLi9tYWluLmpzXCI7XG5pbXBvcnQgeyBWYWx1ZU1vZGVzIH0gZnJvbSBcIi4uL21vZGVsL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgUmFua1Jld2FyZCB9IGZyb20gXCIuLi9tb2RlbC90eXBlcy5qc1wiO1xuZXhwb3J0IGNvbnN0IHRMb2FkZWRFdmVudCA9IG5ldyBFdmVudChcInRhYmxlcmVhZHlcIik7XG5cbi8vIFN0b3JpbmcgdXNlciBpbnB1dFxuJChkb2N1bWVudCkub24oXCJjaGFuZ2VcIiwgXCJzZWxlY3RcIiwgZnVuY3Rpb24gKHgpIHtcbiAgY29uc3QgY2hhbmdlZFZhbHVlID0gJCh4LnRhcmdldCkuZmluZChcIjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgY29uc3QgcmV3YXJkID0gcmV3YXJkcy5maW5kKFxuICAgIChnOiBSYW5rUmV3YXJkKSA9PlxuICAgICAgZy5tb2RlID09PSBWYWx1ZU1vZGVzLmdNb2RlKHgudGFyZ2V0LmlkKSAmJlxuICAgICAgZy5yYW5rID09PSAoY2hhbmdlZFZhbHVlIGFzIHN0cmluZylcbiAgKTtcbiAgJChcIiNcIiArIHgudGFyZ2V0LmlkICsgXCIgb3B0aW9uW3NlbGVjdGVkXVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcInNlbGVjdGVkXCIpO1xuICB9KTtcbiAgJCh4LnRhcmdldCkuZmluZChcIjpzZWxlY3RlZFwiKS5hdHRyKFwic2VsZWN0ZWRcIiwgXCJcIik7XG5cbiAgcG9wdWxhdGVTdG9yYWdlKHgudGFyZ2V0LmlkLCBjaGFuZ2VkVmFsdWUgYXMgc3RyaW5nKTtcbiAgdXNlci5yZXdhcmQgPSByZXdhcmQ7XG4gIHVzZXIuY2FsYygpO1xuICB1cGRhdGVSZXNvdXJjZUJveCh1c2VyLmluY29tZSk7XG59KTtcblxuJChkb2N1bWVudCkub24oXCJtb3VzZW1vdmVcIiwgXCJpbnB1dFt0eXBlPSdyYW5nZSddXCIsIGZ1bmN0aW9uICh4KSB7XG4gIHJhbmdlU2xpZGUoeC50YXJnZXQudmFsdWUsIHVzZXIpO1xuICB1cGRhdGVSZXNvdXJjZUJveCh1c2VyLmluY29tZSwgeC50YXJnZXQudmFsdWUpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT0nbnVtYmVyJ11cIiwgZnVuY3Rpb24gKHgpIHtcbiAgJCh0aGlzKS52YWwoeC50YXJnZXQudmFsdWUpO1xufSk7XG4iXX0=