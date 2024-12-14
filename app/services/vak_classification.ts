
//make a post service with fetch the endpoint is :/predict
// thius is the response body if success
// {
//     "predicted_math_score": 60.79842993672259
// }

import { envs } from "~/config/envs";
// import { AcceptedValuesCreate } from "~/types/ml-model";

type AcceptedValuesCreate = {
    sentence: string;
}

type PredictionResponse = {
    code: number;
    message: string;
    data: {
        sentence: string;
        result: string;
    };
    error: boolean;
    detail: string;
}

export async function classifyVak(data: AcceptedValuesCreate): Promise<PredictionResponse> {
    const response = await fetch(`${envs.vakClassificationMicroserviceUrl}/dl/predictvak`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const responseBody: PredictionResponse = await response.json();
    return responseBody;
}