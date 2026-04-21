'use client';

import { FC, FormEvent, useState, useRef, useEffect } from 'react';

interface Comment {
  username: string;
  text: string;
}

interface CommentsProps {
  postId: string;
  initialComments: Comment[];
}

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'https://api.nice-advice.info';

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function timeAgo(): string {
  return 'Just now';
}

const AVATAR_COLORS = [
  'from-teal-400 to-cyan-500',
  'from-violet-400 to-purple-500',
  'from-rose-400 to-pink-500',
  'from-amber-400 to-orange-500',
  'from-blue-400 to-indigo-500',
  'from-emerald-400 to-green-500',
];

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

const Comments: FC<CommentsProps> = ({ postId, initialComments }) => {
  const [comments, setComments] = useState<Comment[]>(initialComments || []);
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const newCommentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [showForm]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !text.trim()) return;

    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch(`${SERVER_URL}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postId,
          username: username.trim(),
          text: text.trim(),
          site: 'nice-advice',
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to post comment');
      }

      const data = await res.json();
      const newComment: Comment = data.comment;

      setComments((prev) => [...prev, newComment]);
      setText('');
      setIsSuccess(true);
      setShowForm(false);

      setTimeout(() => {
        setIsSuccess(false);
        newCommentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full mt-10 mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-main/10 dark:bg-main/20">
            <svg className="w-5 h-5 text-main" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-mainText dark:text-white font-playfair">
              Comments
            </h2>
            <p className="text-xs text-additionalText dark:text-gray-400">
              {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
            </p>
          </div>
        </div>

        <button
          id="open-comment-form-btn"
          onClick={() => setShowForm((v) => !v)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-main text-white text-sm font-semibold hover:bg-main2 active:scale-95 transition-all duration-200 shadow-lg shadow-main/20"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          {showForm ? 'Cancel' : 'Write a comment'}
        </button>
      </div>

      {/* Success toast */}
      {isSuccess && (
        <div className="mb-5 flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-300 text-sm font-medium animate-fade-in">
          <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Your comment has been posted!
        </div>
      )}

      {/* Comment Form */}
      {showForm && (
        <div
          ref={formRef}
          className="mb-8 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 shadow-lg shadow-black/5 dark:shadow-black/20"
        >
          <h3 className="text-base font-semibold text-mainText dark:text-white mb-4 flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 rounded-full bg-main" />
            Leave a comment
          </h3>

          {error && (
            <div className="mb-4 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-700/50 text-rose-600 dark:text-rose-400 text-sm">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="comment-username" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Your name <span className="text-main">*</span>
              </label>
              <input
                id="comment-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                maxLength={100}
                placeholder="e.g. John Smith"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-mainText dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-main/40 focus:border-main transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="comment-text" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Comment <span className="text-main">*</span>
              </label>
              <textarea
                id="comment-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                maxLength={2000}
                rows={4}
                placeholder="Share your thoughts..."
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-mainText dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-main/40 focus:border-main transition-all resize-none"
              />
              <p className="text-xs text-additionalText dark:text-gray-500 text-right">
                {text.length}/2000
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-1">
              <button
                type="button"
                onClick={() => { setShowForm(false); setError(''); }}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
              >
                Cancel
              </button>
              <button
                id="submit-comment-btn"
                type="submit"
                disabled={isSubmitting || !username.trim() || !text.trim()}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-main hover:bg-main2 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95 transition-all duration-200 shadow-md shadow-main/25"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Posting...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Post comment
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Comments List */}
      {comments.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-14 gap-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <svg className="w-7 h-7 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-mainText dark:text-white mb-1">No comments yet</p>
            <p className="text-sm text-additionalText dark:text-gray-400">Be the first to share your thoughts!</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {comments.map((comment, i) => {
            const isNew = i === comments.length - 1 && isSuccess;
            const gradientClass = getAvatarColor(comment.username);
            return (
              <div
                key={i}
                ref={isNew ? newCommentRef : undefined}
                className={`group flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md dark:hover:shadow-black/20 transition-all duration-300 ${isNew ? 'ring-2 ring-main/30 animate-pulse-once' : ''}`}
              >
                {/* Avatar */}
                <div className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white text-sm font-bold shadow-md`}>
                  {getInitials(comment.username)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <span className="text-sm font-bold text-mainText dark:text-white truncate">
                      {comment.username}
                    </span>
                    {isNew && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-main/10 text-main font-medium">
                        Just now
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap break-words">
                    {comment.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Comments;
