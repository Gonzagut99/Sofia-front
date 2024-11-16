import { getAccessToken, getRefreshToken } from "../../../services/auth-cookies.server";

export const setBearerAccessToken = async (req: Request) => {
    const { accessToken } = await getAccessToken(req);
    if (accessToken) {
        return `Bearer ${accessToken}`;
    }
}

export const setBearerRefreshToken = async (req: Request) => {
    const { refreshToken } = await getRefreshToken(req);
    if (refreshToken) {
        return `Bearer ${refreshToken}`;
    }
}

