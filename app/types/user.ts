// enum Plan {
//     FREE
//     PRO
//     //ENTERPRISE
//   }
  
//   enum SubscriptionPeriod {
//     MONTHLY
//     YEARLY
//   }
//   model User {
//     id        String   @id @default(uuid())
//     email     String   @unique
//     password  String
//     name      String?
//     lastname  String?
//     username  String   @unique
//     avatarUrl String?
//     hashedRefreshToken String?
//     plan    Plan     @default(FREE)
//     customerId String? @unique // Stripe Customer ID
//     subscription Subscription?
//     // posts     Post[]
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//   }
  
//   model Subscription {
//     id        String   @id @default(uuid())
//     userId    String  @unique
//     plan      Plan
//     period    SubscriptionPeriod
  
//     startDate DateTime @default(now())
//     endDate   DateTime
  
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
  
//     user      User     @relation(fields: [userId], references: [id])
//   }

export type User = {
    id: string;
    email: string;
    password: string;
    name?: string;
    lastname?: string;
    username: string;
    avatarUrl?: string;
    hashedRefreshToken: string;
    createdAt: string;
    updatedAt: string;
}

export type CreateUserDto = Omit<User, "id" | "createdAt" | "updatedAt" | "hashedRefreshToken">

// export enum Plan {
//     FREE = "FREE",
//     PRO = "PRO",
//     // ENTERPRISE = "ENTERPRISE"
// }
export type Plan = "FREE" | "PRO" | "ENTERPRISE"

// export enum SubscriptionPeriod {
//     MONTHLY = "MONTHLY",
//     YEARLY = "YEARLY"
// }

export type SubscriptionPeriod = "MONTHLY" | "YEARLY"

export type Subscription = {
    id: string;
    userId: string;
    plan: Plan;
    period: SubscriptionPeriod;
    startDate?: Date;
    endDate: Date;
    createdAt: string;
    updatedAt: string;
    user: User;
}

export type UserData = Omit<User, "password" | "createdAt" | "updatedAt" | "hashedRefreshToken">

export type SubscriptionCreate = Omit <Subscription, "id" | "createdAt" | "updatedAt" | "user">


