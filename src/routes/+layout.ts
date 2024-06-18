import routeMap from '../data/routeMap.json'
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	return {
		routes: routeMap.routes,
	}
}
