'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RenderDescription from '../components/RenderDescription';
import Image from 'next/image';

interface EmailPaywallProps {
  paragraphs: any[];
}

const EmailPaywall = ({ paragraphs }: EmailPaywallProps) => {
  const [isEmail, setIsEmail] = useState(
    typeof document !== 'undefined' ? document.cookie.includes('email=true') : false
  );
  const [email, setEmail] = useState('');
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [submitEmail, setSubmitEmail] = useState(false);
  const [hasConsent, setHasConsent] = useState(
    typeof document !== 'undefined' ? document.cookie.includes('cookieconsent_status=allow') : false
  );

  const handleEmailModalOpen = () => setEmailModalOpen(true);
  const handleEmailModalClose = () => setEmailModalOpen(false);
  const handleEmailChange = (value: string) => setEmail(value);

  useEffect(() => {
    if (!submitEmail) return;

    fetch('https://dev.nice-advice.info/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        source: 'nice-advice.info',
      }),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to send email');
        }
        return res.json();
      })
      .then(() => {
        setIsEmail(true);
        setEmailModalOpen(false);
        if (typeof document !== 'undefined') {
          document.cookie = `email=true; path=/; max-age=31536000; SameSite=Lax`;
        }
      })
      .catch((err: any) => {
        console.error('Email error:', err);
      })
      .finally(() => {
        setSubmitEmail(false);
        setEmailModalOpen(false);
      });
  }, [submitEmail, email]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (document.cookie.includes('cookieconsent_status=allow')) {
      setHasConsent(true);
      return;
    }

    const interval = setInterval(() => {
      if (document.cookie.includes('cookieconsent_status=allow')) {
        setHasConsent(true);
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitEmail(true);
  };

  if (!paragraphs || !paragraphs[1]) return null;

  return (
    <div className="pt-6 flex flex-col gap-4">
      <h3 className="section__title text-2xl text-mainText dark:text-white">
        {paragraphs[1].subtitle}
      </h3>

      {isEmail && (
        <RenderDescription
          description={paragraphs[1].description}
          className="section__description text-base"
          truncate={false}
        />
      )}

      {isEmail && paragraphs[1].image?.url && (
        <div className="w-full relative aspect-[4/3]">
          <Image
            src={paragraphs[1].image.url}
            alt={paragraphs[1].subtitle}
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            className="object-cover rounded"
          />
        </div>
      )}
      
      {!isEmail && (
        <div>
          <p className="text-red-400">
            Please allow cookies and share your email to access the full
            version of the article.
          </p>
          {hasConsent && (
            <button
              onClick={handleEmailModalOpen}
              className="block mx-auto mt-5 border rounded px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Share 🗝️
            </button>
          )}
        </div>
      )}
      <AnimatePresence>
        {emailModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 300,
              }}
              className="relative w-full max-w-sm overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-white/20 dark:border-gray-700 shadow-2xl rounded-2xl md:rounded-3xl"
            >
              <button
                type="button"
                onClick={handleEmailModalClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 bg-gray-100/50 hover:bg-gray-200/50 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 rounded-full transition-colors z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-6 sm:p-8">
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-bold font-merriweather text-gray-900 dark:text-white mb-2">
                    Unlock Article
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                    Share your email with us to continue reading the
                    rest of this premium content.
                  </p>
                </div>

                {submitEmail ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Unlocking...
                    </h3>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="share-email"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1"
                      >
                        Email
                      </label>
                      <input
                        id="share-email"
                        onChange={event =>
                          handleEmailChange(event.target.value)
                        }
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-main2 focus:border-main2 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row gap-3 mt-4">
                      <button
                        type="button"
                        onClick={handleEmailModalClose}
                        className="w-full sm:w-1/3 px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 outline-none"
                      >
                        Cancel
                      </button>
                      <div className="flex-1 w-full">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="w-full h-full px-4 py-3 rounded-xl font-medium text-white bg-main2 hover:bg-main3 shadow-lg shadow-main2/30 transition-all flex items-center justify-center"
                        >
                          Share Email
                        </motion.button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmailPaywall;
