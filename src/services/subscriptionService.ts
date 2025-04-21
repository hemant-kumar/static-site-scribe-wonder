
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../utils/firebase";
import { toast } from "sonner";

export interface Subscription {
  email: string;
  createdAt: Timestamp;
}

export const subscribeToNewsletter = async (email: string): Promise<boolean> => {
  try {
    await addDoc(collection(db, "subscriptions"), {
      email,
      createdAt: Timestamp.now()
    });
    toast.success("Successfully subscribed to the newsletter!");
    return true;
  } catch (error) {
    console.error("Error adding subscription: ", error);
    toast.error("Failed to subscribe. Please try again.");
    return false;
  }
};
