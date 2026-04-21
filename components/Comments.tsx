'use client';

import { FC, FormEvent, useState, useRef, useEffect } from 'react';

interface Comment {
  username: string;
  text: string;
  createdAt?: string;
}

interface CommentsProps {
  postId: string;
  initialComments: Comment[];
}

const SERVER_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://api.nice-advice.info';

// ── helpers ──────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

const PALETTE = [
  ['#4BC8BE', '#28A99E'], // teal   (brand)
  ['#8B5CF6', '#6D28D9'], // violet
  ['#F59E0B', '#D97706'], // amber
  ['#EF4444', '#DC2626'], // rose
  ['#3B82F6', '#1D4ED8'], // blue
  ['#10B981', '#059669'], // emerald
];

function getAvatarGradient(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  const [from, to] = PALETTE[Math.abs(h) % PALETTE.length];
  return `linear-gradient(135deg, ${from}, ${to})`;
}

function formatDate(iso?: string): string {
  if (!iso) return '';
  try {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    }).format(new Date(iso));
  } catch {
    return '';
  }
}

// ── spinner ──────────────────────────────────────────────────────────────────
function Spinner() {
  return (
    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}

// ── main component ────────────────────────────────────────────────────────────
const Comments: FC<CommentsProps> = ({ postId, initialComments }) => {
  const [comments, setComments] = useState<Comment[]>(initialComments || []);
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const latestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [open]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !text.trim()) return;
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch(`${SERVER_URL}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId, username: username.trim(), text: text.trim(), site: 'nice-advice' }),
      });

      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || 'Failed to submit comment');
      }

      const d = await res.json();
      setComments((prev) => [...prev, { ...d.comment, createdAt: d.comment.createdAt || new Date().toISOString() }]);
      setText('');
      setOpen(false);
      setSuccess(true);
      setTimeout(() => { setSuccess(false); latestRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 2200);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full mt-12 pt-8 border-t border-gray-100 dark:border-gray-700/60">

      {/* ── Header row ────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-main shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m10-4H7a2 2 0 00-2 2v4h14V6a2 2 0 00-2-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01" />
          </svg>
          <h2 className="font-merriweather text-xl font-bold text-mainText dark:text-white">
            Discussion
            {comments.length > 0 && (
              <span className="ml-2 text-sm font-normal font-poppins text-additionalText dark:text-gray-400">
                · {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
              </span>
            )}
          </h2>
        </div>

        <button
          id="open-comment-form-btn"
          onClick={() => { setOpen((v) => !v); setError(''); }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-main text-white hover:bg-main2 active:scale-[.97] transition-all duration-150 shadow-sm shadow-main/30 dark:shadow-main/10 cursor-pointer"
        >
          {open ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancel
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add comment
            </>
          )}
        </button>
      </div>

      {/* ── Success banner ───────────────────────────────────────── */}
      {success && (
        <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/40 text-emerald-700 dark:text-emerald-300 text-sm font-medium">
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Comment posted! Thanks for sharing your thoughts.
        </div>
      )}

      {/* ── Inline form ─────────────────────────────────────────── */}
      {open && (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mb-8 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/50 shadow-sm"
        >
          {/* top accent line */}
          <div className="h-0.5 bg-gradient-to-r from-main via-main2 to-main3" />

          <div className="p-5 sm:p-6 flex flex-col gap-4">
            {/* error */}
            {error && (
              <div className="flex items-start gap-2.5 px-4 py-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-700/40 text-rose-600 dark:text-rose-400 text-sm">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            {/* name + textarea in a nice grid on sm+ */}
            <div className="grid sm:grid-cols-[1fr_2fr] gap-4 items-start">
              {/* name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="comment-username" className="text-xs font-semibold uppercase tracking-wider text-additionalText dark:text-gray-400">
                  Your name
                </label>
                <input
                  id="comment-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  maxLength={100}
                  autoComplete="nickname"
                  placeholder="Jane Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-600 text-mainText dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none focus:ring-2 focus:ring-main/50 focus:border-main transition-all"
                />
              </div>

              {/* text */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="comment-text" className="text-xs font-semibold uppercase tracking-wider text-additionalText dark:text-gray-400">
                  Comment
                </label>
                <textarea
                  id="comment-text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                  maxLength={2000}
                  rows={3}
                  placeholder="Share your thoughts on this article…"
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-600 text-mainText dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none focus:ring-2 focus:ring-main/50 focus:border-main transition-all resize-none leading-relaxed"
                />
              </div>
            </div>

            {/* footer */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-additionalText dark:text-gray-500 font-poppins">
                {text.length > 0 && <>{2000 - text.length} characters left</>}
              </span>
              <button
                id="submit-comment-btn"
                type="submit"
                disabled={submitting || !username.trim() || !text.trim()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-main hover:bg-main2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[.97] transition-all duration-150 shadow-md shadow-main/25"
              >
                {submitting ? <><Spinner /> Posting…</> : <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Post comment
                </>}
              </button>
            </div>
          </div>
        </form>
      )}

      {/* ── Comment list ─────────────────────────────────────────── */}
      {comments.length === 0 ? (
        /* empty state */
        <div className="flex flex-col items-center gap-4 py-14 text-center">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <svg className="w-6 h-6 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-mainText dark:text-white text-sm">No comments yet</p>
            <p className="text-sm text-additionalText dark:text-gray-400 mt-0.5">Be the first to share your opinion!</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-700/50">
          {comments.map((c, i) => {
            const isLatest = i === comments.length - 1;
            return (
              <div
                key={i}
                ref={isLatest ? latestRef : undefined}
                className="flex items-start gap-3 sm:gap-4 py-5 group"
              >
                {/* avatar */}
                <div
                  className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm select-none"
                  style={{ background: getAvatarGradient(c.username) }}
                >
                  {getInitials(c.username)}
                </div>

                {/* bubble */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-sm font-bold text-mainText dark:text-white font-poppins">
                      {c.username}
                    </span>
                    {isLatest && success && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-main/10 dark:bg-main/20 text-main font-semibold">
                        just now
                      </span>
                    )}
                    {c.createdAt && !( isLatest && success) && (
                      <span className="text-[11px] text-additionalText dark:text-gray-500 font-poppins">
                        {formatDate(c.createdAt)}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-poppins text-additionalText dark:text-gray-300 leading-relaxed whitespace-pre-wrap break-words">
                    {c.text}
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
