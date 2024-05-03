import { BASE_URL } from "../../constants/constant";
import { apiRoutes } from "../apiRoutes";

export const useProductQuery = async ( { accessToken, teamId, pageParam }: { accessToken: string, teamId: number, pageParam: number } ) => {
    const res = await fetch(`${BASE_URL}${apiRoutes.useProductQuery}?page=${pageParam}&team_id=${teamId}&filter[status]=1`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
    });

    return res.json();
};