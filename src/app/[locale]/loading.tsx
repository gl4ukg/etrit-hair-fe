import ScissorLoader from '@/components/ScissorLoader';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-[#181818]">
      <ScissorLoader size={120} color="#ffffff" label="Styling your look…" />
    </div>
  );
}
