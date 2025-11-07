'use client';

import React from 'react';

type Props = {
  size?: number;
  color?: string;
  label?: string;
  overlay?: boolean;
};

export default function ScissorLoader({
  size = 96,
  color = '#ffffff',
  label = 'Styling your look…',
  overlay = false,
}: Props) {
  const content = (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="flex flex-col items-center justify-center gap-3"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes scissor-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes scissor-snip-top {
            0%, 100% { transform: rotate(-14deg); }
            50% { transform: rotate(18deg); }
          }
          @keyframes scissor-snip-bottom {
            0%, 100% { transform: rotate(14deg); }
            50% { transform: rotate(-18deg); }
          }
          .scissor-cut-circle {
            transform-origin: 50px 50px;
            animation: scissor-spin 1.4s linear infinite;
            opacity: 0.9;
          }
          .scissor-blade-top,
          .scissor-blade-bottom {
            transform-origin: 0px 0px;
          }
          .scissor-blade-top {
            animation: scissor-snip-top 0.9s ease-in-out infinite;
          }
          .scissor-blade-bottom {
            animation: scissor-snip-bottom 0.9s ease-in-out infinite;
          }
        `,
        }}
      />

      <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="6 8"
          strokeLinecap="round"
          className="scissor-cut-circle"
        />

        <g transform="translate(50,50)">
          <g transform="rotate(90)" opacity="0.9">
            <circle cx="-10" cy="15" r="8" fill="none" stroke={color} strokeWidth="3" />
            <circle cx="10" cy="15" r="8" fill="none" stroke={color} strokeWidth="3" />
          </g>

          <circle cx="0" cy="0" r="2.8" fill={color} />

          <g className="scissor-blade-top">
            <path
              d="M 0 0 L 34 -8"
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path d="M 2 -2 L 36 -12" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
          </g>

          <g className="scissor-blade-bottom">
            <path
              d="M 0 0 L 34 8"
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path d="M 2 2 L 36 12" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
          </g>
        </g>
      </svg>
      <span className="text-sm text-white/80">{label}</span>
    </div>
  );

  if (!overlay) return content;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#181818]/90 backdrop-blur-sm">
      {content}
    </div>
  );
}
