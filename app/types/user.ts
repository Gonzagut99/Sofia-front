export type User = {
    id: string;
    email: string;
    password: string;
    name?: string;
    lastname?: string;
    username: string;
    avatarUrl?: string;
    hashedRefreshToken?: string;
    createdAt: string;
    updatedAt: string;
}

export type UserData = Omit<User, "password" | "createdAt" | "updatedAt" | "hashedRefreshToken">




