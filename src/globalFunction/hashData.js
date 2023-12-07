import * as crypto from 'crypto-js'

export function hashData(data){
    const hashedData = crypto.SHA256(data).toString();
    return hashedData;
}