
import { collection, addDoc, query, where, getDocs, orderBy, Timestamp } from "firebase/firestore";
import { db } from "../utils/firebase";
import { toast } from "sonner";

export interface Comment {
  id?: string;
  postId: string;
  name: string;
  content: string;
  createdAt: Timestamp;
}

export const addComment = async (comment: Omit<Comment, "id" | "createdAt">): Promise<boolean> => {
  try {
    await addDoc(collection(db, "comments"), {
      ...comment,
      createdAt: Timestamp.now()
    });
    toast.success("Comment added successfully!");
    return true;
  } catch (error) {
    console.error("Error adding comment: ", error);
    toast.error("Failed to add comment. Please try again.");
    return false;
  }
};

export const getCommentsByPostId = async (postId: string): Promise<Comment[]> => {
  try {
    const q = query(
      collection(db, "comments"),
      where("postId", "==", postId),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() as Omit<Comment, "id">
    }));
  } catch (error) {
    console.error("Error fetching comments: ", error);
    toast.error("Failed to load comments.");
    return [];
  }
};
