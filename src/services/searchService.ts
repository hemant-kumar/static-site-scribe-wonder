
import { collection, query, getDocs, orderBy, where, limit } from "firebase/firestore";
import { db } from "../utils/firebase";
import { BlogPost } from "../utils/blogUtils";

export const searchBlogPosts = async (searchTerm: string): Promise<BlogPost[]> => {
  try {
    // For a real production app, you'd use Firebase's full-text search via an extension
    // like Algolia. For now, we'll implement a simple search by title
    const blogPostsCollection = collection(db, "blogPosts");
    
    // This is a simple implementation - for production, consider Firebase extensions 
    // like Algolia for more powerful search
    const q = query(
      blogPostsCollection,
      where("titleLowerCase", ">=", searchTerm.toLowerCase()),
      where("titleLowerCase", "<=", searchTerm.toLowerCase() + '\uf8ff'),
      orderBy("titleLowerCase"),
      limit(10)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() as Omit<BlogPost, "id">
    }));
  } catch (error) {
    console.error("Error searching blog posts: ", error);
    return [];
  }
};
