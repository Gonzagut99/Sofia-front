import { createCookie } from "@remix-run/node";
import cookie from 'cookie'

// Cookie para el JWT (access token)
export const accessTokenCookie = createCookie("accessToken", {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // Solo en producción
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 120, 
});

// Cookie para el refresh token
export const refreshTokenCookie = createCookie("refreshToken", {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 7 días
});

export const userIdCookie = createCookie("userId", {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 7 días
});

export const setAuthCookies = async (
  accessToken: string,
  refreshToken: string,
  userId: string
) => {
  const accessTokenCookieHeader = await accessTokenCookie.serialize(
    accessToken
  );
  const refreshTokenCookieHeader = await refreshTokenCookie.serialize(
    refreshToken
  );
  const userIdCookieHeader = await userIdCookie.serialize(userId);
  const headers = new Headers();
  headers.append("Set-Cookie", accessTokenCookieHeader);
  headers.append("Set-Cookie", refreshTokenCookieHeader);
  headers.append("Set-Cookie", userIdCookieHeader);
  return headers;
};

export const removeAuthCookies = async () => {
  const accessTokenCookieHeader = await accessTokenCookie.serialize("", {maxAge: 0});
  const refreshTokenCookieHeader = await refreshTokenCookie.serialize("",{maxAge: 0});
  const idCookieHeader = await userIdCookie.serialize("", {maxAge: 0});
  const headers = new Headers();
  headers.append("Set-Cookie", accessTokenCookieHeader);
  headers.append("Set-Cookie", refreshTokenCookieHeader);
  headers.append("Set-Cookie", idCookieHeader);
  return headers;
};

export const getAuthCookies = async (request: Request) => {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) {
    return {
      accessToken: '',
      refreshToken: '',
      userId: ''
    };
  }

  let accessToken = await accessTokenCookie.parse(cookieHeader);
  let refreshToken = await refreshTokenCookie.parse(cookieHeader);
  let userId = await userIdCookie.parse(cookieHeader);

  console.log('getAuthCookies');
  console.log(typeof accessToken,typeof refreshToken,typeof userId);
  console.log('cookieHeader', cookieHeader);

  //In case of googlee auth
  if (!accessToken || !refreshToken || !userId || 
      accessToken === undefined || refreshToken === undefined || userId === undefined ||
      (accessToken && typeof accessToken === 'object' && Object.keys(accessToken).length === 0) ||
      (refreshToken && typeof refreshToken === 'object' && Object.keys(refreshToken).length === 0) ||
      (userId && typeof userId === 'object' && Object.keys(userId).length === 0)) {
    const nonJsonCookieParsed = cookie.parse(cookieHeader);
    console.log('noJsonCookieParsed',nonJsonCookieParsed);
    accessToken = nonJsonCookieParsed.accessToken || '';
    refreshToken = nonJsonCookieParsed.refreshToken || '';
    userId = nonJsonCookieParsed.userId || '';

    //Set the cookies again by the remix form
    const remixAccessTokenHeader = await accessTokenCookie.serialize(
      accessToken
    );
    const remixRefreshTokenHeader = await refreshTokenCookie.serialize(
      refreshToken
    );
    const remixUserIdHeader = await userIdCookie.serialize(userId);

    //use the new cookies
    accessToken= await accessTokenCookie.parse(remixAccessTokenHeader);
    refreshToken= await refreshTokenCookie.parse(remixRefreshTokenHeader);
    userId= await userIdCookie.parse(remixUserIdHeader);
  }

  return {
    accessToken,
    refreshToken,
    userId,
  };
};

export const getAccessToken = async (request: Request) => {
  const cookieHeader = request.headers.get("cookie");
  let accessToken = await accessTokenCookie.parse(cookieHeader);
  if (!accessToken || accessToken === undefined || (accessToken && typeof accessToken === 'object' && Object.keys(accessToken).length === 0)) {
    const nonJsonCookieParsed = cookie.parse(cookieHeader!);
    accessToken = nonJsonCookieParsed.accessToken || '';
  }
  return accessToken;
};

export const getRefreshToken = async (request: Request) => {
  const cookieHeader = request.headers.get("cookie");
  let refreshToken = await refreshTokenCookie.parse(cookieHeader);
  if (!refreshToken || refreshToken === undefined || (refreshToken && typeof refreshToken === 'object' && Object.keys(refreshToken).length === 0)) {
    const nonJsonCookieParsed = cookie.parse(cookieHeader!);
    refreshToken = nonJsonCookieParsed.refreshToken || '';
  }
  return refreshToken;
  // return await refreshTokenCookie.parse(cookieHeader);
};

export const getUserId = async (request: Request) => {
  const cookieHeader = request.headers.get("cookie");
  // return await userIdCookie.parse(cookieHeader);
  let userId = await userIdCookie.parse(cookieHeader);
  if (!userId || userId === undefined || (userId && typeof userId === 'object' && Object.keys(userId).length === 0)) {
    const nonJsonCookieParsed = cookie.parse(cookieHeader!);
    userId = nonJsonCookieParsed.userId || '';
  }
  return userId;
};
