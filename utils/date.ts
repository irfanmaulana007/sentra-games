import { formatDistanceToNow } from 'date-fns';

/**
 * Format a date to a relative time string (e.g., "2 hours ago")
 * @param dateString ISO date string
 * @returns Formatted relative time string
 */
export function getRelativeTime(dateString: string): string {
  try {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
}
