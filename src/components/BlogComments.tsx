
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addComment, getCommentsByPostId, Comment } from "@/services/commentService";

const BlogComments: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: "", content: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadComments = async () => {
      if (id) {
        setIsLoading(true);
        const fetchedComments = await getCommentsByPostId(id);
        setComments(fetchedComments);
        setIsLoading(false);
      }
    };

    loadComments();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name || !newComment.content) return;
    
    setIsSubmitting(true);
    try {
      if (id) {
        const success = await addComment({
          postId: id,
          name: newComment.name,
          content: newComment.content
        });
        
        if (success) {
          // Refresh comments
          const updatedComments = await getCommentsByPostId(id);
          setComments(updatedComments);
          setNewComment({ name: "", content: "" });
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold mb-6">Comments</h3>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h4 className="text-xl font-medium mb-4">Add a Comment</h4>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={newComment.name}
            onChange={(e) => setNewComment({...newComment, name: e.target.value})}
            className="w-full"
            required
          />
        </div>
        <div className="mb-4">
          <Textarea
            placeholder="Write your comment here..."
            value={newComment.content}
            onChange={(e) => setNewComment({...newComment, content: e.target.value})}
            className="w-full h-32"
            required
          />
        </div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white"
        >
          {isSubmitting ? "Posting..." : "Post Comment"}
        </Button>
      </form>

      {/* Comments List */}
      {isLoading ? (
        <p className="text-center text-gray-500">Loading comments...</p>
      ) : comments.length > 0 ? (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">{comment.name}</p>
                <p className="text-sm text-gray-500">
                  {comment.createdAt.toDate().toLocaleDateString()}
                </p>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
};

export default BlogComments;
