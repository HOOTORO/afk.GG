import { loadBag, RelicEstimator } from "./abex/relicEstimate.js";
import { Militia } from "./types/militia.js";
import { Expeditor } from "./types/expeditor.js";
import { Locations } from "./util/locations.js";
import { AttackForm } from "./abex/attack.js";
import { Team } from "./types/team.js";
export const mil = new Militia(10);
export const expeditor = new Expeditor(mil, false);
export const team = new Team("team-set");
switch (window.location.pathname) {
    case Locations.abex:
        RelicEstimator();
        loadBag();
        break;
    case Locations.warBook:
        AttackForm();
        break;
    default:
        console.log("nothing to do here");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hYmV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2QyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbkMsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUVuRCxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFekMsUUFBUSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLEtBQUssU0FBUyxDQUFDLElBQUk7UUFDakIsY0FBYyxFQUFFLENBQUM7UUFDakIsT0FBTyxFQUFFLENBQUM7UUFDVixNQUFNO0lBQ1IsS0FBSyxTQUFTLENBQUMsT0FBTztRQUNwQixVQUFVLEVBQUUsQ0FBQztRQUNiLE1BQU07SUFDUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN0QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZEJhZywgUmVsaWNFc3RpbWF0b3IgfSBmcm9tIFwiLi9hYmV4L3JlbGljRXN0aW1hdGUuanNcIjtcbmltcG9ydCB7IE1pbGl0aWEgfSBmcm9tIFwiLi90eXBlcy9taWxpdGlhLmpzXCI7XG5pbXBvcnQgeyBFeHBlZGl0b3IgfSBmcm9tIFwiLi90eXBlcy9leHBlZGl0b3IuanNcIjtcbmltcG9ydCB7IExvY2F0aW9ucyB9IGZyb20gXCIuL3V0aWwvbG9jYXRpb25zLmpzXCI7XG5pbXBvcnQgeyBBdHRhY2tGb3JtIH0gZnJvbSBcIi4vYWJleC9hdHRhY2suanNcIjtcbmltcG9ydCB7IFRlYW0gfSBmcm9tIFwiLi90eXBlcy90ZWFtLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBtaWwgPSBuZXcgTWlsaXRpYSgxMCk7XG5leHBvcnQgY29uc3QgZXhwZWRpdG9yID0gbmV3IEV4cGVkaXRvcihtaWwsIGZhbHNlKTtcblxuZXhwb3J0IGNvbnN0IHRlYW0gPSBuZXcgVGVhbShcInRlYW0tc2V0XCIpO1xuXG5zd2l0Y2ggKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkge1xuICBjYXNlIExvY2F0aW9ucy5hYmV4OlxuICAgIFJlbGljRXN0aW1hdG9yKCk7XG4gICAgbG9hZEJhZygpO1xuICAgIGJyZWFrO1xuICBjYXNlIExvY2F0aW9ucy53YXJCb29rOlxuICAgIEF0dGFja0Zvcm0oKTtcbiAgICBicmVhaztcbiAgZGVmYXVsdDpcbiAgICBjb25zb2xlLmxvZyhcIm5vdGhpbmcgdG8gZG8gaGVyZVwiKTtcbn1cbiJdfQ==