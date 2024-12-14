import { envs } from '~/config/envs';
import { BackendError } from './error-handling';
import { CreateUserDto, User } from '~/types/user';

const API_URL = envs.backendUrl || 'http://localhost:3001';

export async function createUser(userData: CreateUserDto) {
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
}

export async function getAllUsers() {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
}

export async function getUserProfile(token: string) {
    try {
        const response = await fetch(`${API_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response)
        console.log(token)
        if (!response.ok) {
            const error =  new BackendError({
                status: response.status,
                statusText: response.statusText
            })
            console.log(error)
            return error;
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching user profile:', error);
        //throw error;
    }
}

export async function getUserByEmail(email: string): Promise<User> {
    const response = await fetch(`${API_URL}/users/email/${email}`);
    return response.json();
}

export async function getUserByCustomerId(id: string): Promise<User> {
    const response = await fetch(`${API_URL}/users/customer/${id}`);
    return response.json();
}

export async function updateUser(id: string, userData: Partial<User>, token: string) {
    const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
    });
    return response.json();
}

export async function updateUserStripe(id: string, userData: Partial<User>) {
    const response = await fetch(`${API_URL}/users/stripe/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
    });
    return response.json();
}

export async function deleteUser(id: string, token: string) {
    const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.json();
}