import { HttpHeaders } from "@angular/common/http";

const clave1 = '51b28c63013644ce8fb07878bb63d1f2'; //Clave face detect
const clave2 = '619779919c074ba682f8b69ca0bd1220'; //Clave hand detect

export let config = {
    host: 'https://southcentralus.api.cognitive.microsoft.com/face/v1.0',
    hostHand: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/caf490d4-6228-43d8-adf1-2ed5a4b1b046/classify/iterations/ModeloManos/image',
    clave1: clave1,
    clave2: clave2,
    personGruop: 'prog3demo',
    headers: {
        Octent_stream: new HttpHeaders({'Content-Type':  'application/octet-stream', 'Ocp-Apim-Subscription-Key': clave1}),
        JSON: new HttpHeaders({'Content-Type': 'application/json', 'Ocp-Apim-Subscription-Key': clave1}),
        hand_Octent_stream: new HttpHeaders({'Content-Type': 'application/octet-stream', 'Prediction-Key': clave2})
    },
    atributo: {
        detectionModel: 'detection_03',
        recognitionModel:'recognition_03',
        returnFaceId: 'true',
        returnFaceLandmarks: 'false',
        returnRecognitionModel: 'false',
        faceIdTimeToLive:'86400'
    }
}