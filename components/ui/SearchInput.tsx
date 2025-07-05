import { useState, KeyboardEvent, ChangeEvent } from 'react';

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  autoFocus?: boolean;
  initialValue?: string;
}

export default function SearchInput({
  placeholder = 'Search...',
  onSearch,
  className = '',
  autoFocus = false,
  initialValue = '',
}: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState(initialValue);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleChange}
        className="pl-10 pr-12 py-2 rounded-md border border-sidebar-border bg-background text-sidebar-foreground focus:outline-none focus:ring-2 focus:ring-sidebar-primary/50 w-full"
        onKeyDown={handleKeyDown}
        autoFocus={autoFocus}
      />
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sidebar-foreground/70"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <button 
        onClick={handleSearch}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sidebar-foreground/70 hover:text-sidebar-foreground p-1 rounded-md hover:bg-sidebar-border/30 transition-colors"
        aria-label="Search"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
        </svg>
      </button>
    </div>
  );
}
