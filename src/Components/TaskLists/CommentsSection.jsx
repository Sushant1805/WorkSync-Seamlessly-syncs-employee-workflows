// CommentSection.jsx
import React, { useState } from "react";

// Initial data
const initialComments = [
  {
    id: 1,
    username: "ronaldo",
    text: "What a game!",
    replies: [
      {
        id: 2,
        username: "messi",
        text: "🔥🔥🔥",
        replies: [],
      },
    ],
  },
];

let globalId = 3; // To generate unique comment IDs

const Comment = ({ comment, addReply }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (replyText.trim() === "") return;
    addReply(comment.id, {
      id: globalId++,
      username: "you", // can make this dynamic
      text: replyText,
      replies: [],
    });
    setReplyText("");
    setShowReplyBox(false);
  };

  return (
    <div className="ml-4 mt-2">
      <div className="text-sm">
        <span className="font-bold">{comment.username}</span> {comment.text}
      </div>

      <button
        onClick={() => setShowReplyBox(!showReplyBox)}
        className="text-blue-500 text-xs mt-1"
      >
        Reply
      </button>

      {showReplyBox && (
        <div className="mt-1">
          <input
            className="border rounded px-2 py-1 text-sm"
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button
            onClick={handleReply}
            className="ml-2 px-2 py-1 text-xs bg-blue-500 text-white rounded"
          >
            Post
          </button>
        </div>
      )}

      {/* Render replies recursively */}
      <div className="ml-4 border-l border-gray-200 pl-2 mt-1">
        {comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} addReply={addReply} />
        ))}
      </div>
    </div>
  );
};

const CommentSection = () => {
  const [comments, setComments] = useState(initialComments);
  const [newCommentText, setNewCommentText] = useState("");

  // Recursive function to add a reply by ID
  const addReplyById = (commentsArray, parentId, replyObj) => {
    return commentsArray.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, replyObj],
        };
      }
      if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: addReplyById(comment.replies, parentId, replyObj),
        };
      }
      return comment;
    });
  };

  const addReply = (parentId, replyObj) => {
    const updated = addReplyById(comments, parentId, replyObj);
    setComments(updated);
  };

  const addNewComment = () => {
    if (newCommentText.trim() === "") return;
    setComments([
      ...comments,
      {
        id: globalId++,
        username: "Sushant_07",
        text: newCommentText,
        replies: [],
      },
    ]);
    setNewCommentText("");
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Comments</h2>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border rounded px-3 py-1"
          placeholder="Write a comment..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <button
          onClick={addNewComment}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Post
        </button>
      </div>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} addReply={addReply} />
      ))}
    </div>
  );
};

export default CommentSection;
