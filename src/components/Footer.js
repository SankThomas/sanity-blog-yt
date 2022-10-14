import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-slate-400 max-w-7xl mx-auto py-10 flex items-center justify-center text-center flex-col">
        <h3 className="text-xl">Share on social media</h3>
        <ul className="text-sm text-slate-600 dark:text-slate-400 mt-4 flex items-center justify-center flex-wrap gap-4">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Pinterest</li>
          <li>Tumblr</li>
        </ul>
      </footer>
    </>
  );
}
