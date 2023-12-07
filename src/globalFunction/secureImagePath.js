import { hashData } from "./hashData";

export function generateSecureImagePath(imageData) {
    // Create a unique image path based on the data (e.g., user ID, timestamp)
    // You can use a combination of data and random characters to make it unique
    const uniqueIdentifier = imageData.userId + imageData.timestamp + Math.random().toString(36).substring(2, 15);
    
    // You can also hash the unique identifier for added security if needed
    const hashedIdentifier = hashData(uniqueIdentifier); // Use a suitable hash function

    // Construct the secure image path using the hashed identifier
    const secureImagePath = `images/${hashedIdentifier}.jpg`;

    return secureImagePath;
}