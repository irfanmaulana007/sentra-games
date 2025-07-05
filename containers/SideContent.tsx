export default function SideContent({ children }: { children: React.ReactNode }) {
    return (
        <aside className="w-full lg:w-1/4">
            <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-hide">
                {children}
            </div>
        </aside>
    );
}
