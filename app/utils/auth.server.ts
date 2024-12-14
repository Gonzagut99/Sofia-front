import { getAuthCookies } from "~/services/auth-cookies.server";
import { getSubscriptionByUserId } from "~/services/subscription.server";
import { getUserProfile } from "~/services/user.server";

export async function isAuthenticated(request: Request) {
  const authCookies = await getAuthCookies(request);
  if (!authCookies) return { user: null, error: "Unauthorized:No cookies" };

  const user = await getUserProfile(authCookies.accessToken);
  if (!user || user.status === 401) return { user: null, error: "Unauthorized" };

  return { user, error: null };
}

export async function isProUser(request: Request) {
  const authCookies = await getAuthCookies(request);
  const { user, error } = await isAuthenticated(request);
  // return user?.plan === 'PRO';
  let currentSubscription = null;
      if (user && user?.plan !== 'FREE') {
          currentSubscription = await getSubscriptionByUserId(user.id, authCookies.accessToken);
      }
  return {
    isPro: user?.plan === 'PRO',
    currentSubscription,
    user,
    error
  }
}