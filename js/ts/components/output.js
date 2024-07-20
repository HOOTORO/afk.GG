import { allRes, iconSize, leftover, xh } from "../model/constants.js";
import { newEl, weekLabels } from "./helper.js";
function makeOut() {
    const out = document.createElement("div"), output = document.createElement("output"), datalist = xh +
        weekLabels(52, [
            { n: 1, desc: "↑ нед." },
            { n: 2, desc: "↑ ~1 мес.   " },
            { n: 26, desc: "↑ полгода" },
            { n: 52, desc: "1 год ↑" },
        ]) +
        leftover;
    out.className = "out";
    output.name = "Total Income";
    output.setAttribute("for", "a-form");
    output.id = "result";
    output.innerHTML += datalist;
    drawResourceBox(output);
    out.appendChild(output);
    return out;
}
function drawResourceBox(parent) {
    allRes.forEach((el) => {
        const resContainer = newEl("div", {
            class: "inc-res",
        });
        const rr = newEl("span", { id: el });
        resContainer.appendChild(getResImg(el));
        resContainer.appendChild(rr);
        parent.appendChild(resContainer);
    });
}
function getResImg(src) {
    const img = document.createElement("img");
    img.src = `../../assets/icons/s/${src}.png`;
    img.width = iconSize;
    return img;
}
function updateResourceBox(gr, timeW = 1) {
    gr.filter((f) => f.amount > -1).forEach((x) => {
        document.getElementById(x.type).innerHTML = (x
            ? x.amount * timeW
            : 0);
    });
}
export { drawResourceBox, getResImg, makeOut, updateResourceBox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvb3V0cHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVoRCxTQUFTLE9BQU87SUFDZCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUN2QyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFDekMsUUFBUSxHQUNOLEVBQUU7UUFDRixVQUFVLENBQUMsRUFBRSxFQUFFO1lBQ2IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7WUFDeEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDOUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDNUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7U0FDM0IsQ0FBQztRQUNGLFFBQVEsQ0FBQztJQUViLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO0lBQzdCLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ3JCLE1BQU0sQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDO0lBQzdCLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLE1BQWU7SUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQVUsRUFBRSxFQUFFO1FBQzVCLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDaEMsS0FBSyxFQUFFLFNBQVM7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQVc7SUFDNUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxHQUFHLENBQUMsR0FBRyxHQUFHLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztJQUM1QyxHQUFHLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUNyQixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEVBQWdCLEVBQUUsS0FBSyxHQUFHLENBQUM7SUFDcEQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQzVDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSztZQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFzQixDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsUmVzLCBpY29uU2l6ZSwgbGVmdG92ZXIsIHhoIH0gZnJvbSBcIi4uL21vZGVsL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgQmFzZVJlc1F0eSB9IGZyb20gXCIuLi9tb2RlbC90eXBlcy5qc1wiO1xuaW1wb3J0IHsgbmV3RWwsIHdlZWtMYWJlbHMgfSBmcm9tIFwiLi9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gbWFrZU91dCgpIHtcbiAgY29uc3Qgb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3V0cHV0XCIpLFxuICAgIGRhdGFsaXN0ID1cbiAgICAgIHhoICtcbiAgICAgIHdlZWtMYWJlbHMoNTIsIFtcbiAgICAgICAgeyBuOiAxLCBkZXNjOiBcIuKGkSDQvdC10LQuXCIgfSxcbiAgICAgICAgeyBuOiAyLCBkZXNjOiBcIuKGkSB+MSDQvNC10YEuICAgXCIgfSxcbiAgICAgICAgeyBuOiAyNiwgZGVzYzogXCLihpEg0L/QvtC70LPQvtC00LBcIiB9LFxuICAgICAgICB7IG46IDUyLCBkZXNjOiBcIjEg0LPQvtC0IOKGkVwiIH0sXG4gICAgICBdKSArXG4gICAgICBsZWZ0b3ZlcjtcblxuICBvdXQuY2xhc3NOYW1lID0gXCJvdXRcIjtcbiAgb3V0cHV0Lm5hbWUgPSBcIlRvdGFsIEluY29tZVwiO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiYS1mb3JtXCIpO1xuICBvdXRwdXQuaWQgPSBcInJlc3VsdFwiO1xuICBvdXRwdXQuaW5uZXJIVE1MICs9IGRhdGFsaXN0O1xuICBkcmF3UmVzb3VyY2VCb3gob3V0cHV0KTtcbiAgb3V0LmFwcGVuZENoaWxkKG91dHB1dCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGRyYXdSZXNvdXJjZUJveChwYXJlbnQ6IEVsZW1lbnQpIHtcbiAgYWxsUmVzLmZvckVhY2goKGVsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXNDb250YWluZXIgPSBuZXdFbChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJpbmMtcmVzXCIsXG4gICAgfSk7XG4gICAgY29uc3QgcnIgPSBuZXdFbChcInNwYW5cIiwgeyBpZDogZWwgfSk7XG4gICAgcmVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGdldFJlc0ltZyhlbCkpO1xuICAgIHJlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChycik7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHJlc0NvbnRhaW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRSZXNJbWcoc3JjOiBzdHJpbmcpIHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLnNyYyA9IGAuLi8uLi9hc3NldHMvaWNvbnMvcy8ke3NyY30ucG5nYDtcbiAgaW1nLndpZHRoID0gaWNvblNpemU7XG4gIHJldHVybiBpbWc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJlc291cmNlQm94KGdyOiBCYXNlUmVzUXR5W10sIHRpbWVXID0gMSkge1xuICBnci5maWx0ZXIoKGYpID0+IGYuYW1vdW50ID4gLTEpLmZvckVhY2goKHgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh4LnR5cGUpLmlubmVySFRNTCA9ICh4XG4gICAgICA/IHguYW1vdW50ICogdGltZVdcbiAgICAgIDogMCkgYXMgdW5rbm93biBhcyBzdHJpbmc7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBkcmF3UmVzb3VyY2VCb3gsIGdldFJlc0ltZywgbWFrZU91dCwgdXBkYXRlUmVzb3VyY2VCb3ggfTtcbiJdfQ==