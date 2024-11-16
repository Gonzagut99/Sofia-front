//make a post service with fetch the endpoint is :/predict
// thius is the response body if success
// {
//     "predicted_math_score": 60.79842993672259
// }

import { AcceptedValuesCreate } from "~/types/ml-model";


interface PredictionResponse {
    predicted_math_score: number;
}

export async function predictScore(data: AcceptedValuesCreate): Promise<PredictionResponse> {
    const response = await fetch('http://localhost:8001/ml/predict', {
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