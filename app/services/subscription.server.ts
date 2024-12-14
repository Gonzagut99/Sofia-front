import { envs } from "~/config/envs";
import type { SubscriptionCreate } from "~/types/user";
// import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
// import { SubscriptionService } from './subscription.service';
// import { CreateSubscriptionDto } from './dto/create-subscription.dto';
// import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

// @Controller('subscription')
// export class SubscriptionController {
//   constructor(private readonly subscriptionService: SubscriptionService) {}

//   @Post()
//   create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
//     return this.subscriptionService.create(createSubscriptionDto);
//   }

//   @Get()
//   findAll() {
//     return this.subscriptionService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.subscriptionService.findOne(id);
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() updateSubscriptionDto: UpdateSubscriptionDto) {
//     return this.subscriptionService.update(id, updateSubscriptionDto);
//   }

//   @Post('stripe/:id')
//   upsert(@Param('id') id: string, @Body() updateSubscriptionDto: UpdateSubscriptionDto) {
//     return this.subscriptionService.upsert(id, updateSubscriptionDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.subscriptionService.remove(id);
//   }
// }

const API_URL = envs.backendUrl || 'http://localhost:3001';

export async function createSubscription(subscriptionData: SubscriptionCreate) {
    const response = await fetch(`${API_URL}/subscription`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriptionData),
    });
    return response.json();
}

export async function getAllSubscriptions() {
    const response = await fetch(`${API_URL}/subscription`);
    return response.json();
}

export async function getSubscriptionById(id: string, token: string) {
    const response = await fetch(`${API_URL}/subscription/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
    });
    return response.json();
}

export async function getSubscriptionByUserId(id: string, token:string) {
    const response = await fetch(`${API_URL}/subscription/user/${id}`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
    }
    );
    return response.json();
}

export async function updateSubscription(id: string, subscriptionData: Partial<SubscriptionCreate>) {
    const response = await fetch(`${API_URL}/subscription/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriptionData),
    });
    return response.json();
}

export async function deleteSubscription(id: string) {
    const response = await fetch(`${API_URL}/subscription/${id}`, {
        method: 'DELETE',
    });
    return response.json();
}

export async function upsertSubscription(id: string, subscriptionData: SubscriptionCreate) {
    const response = await fetch(`${API_URL}/subscription/stripe/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriptionData),
    });
    return response.json();
}



