export function timeAgo(dateString: string | Date) {
    const date = new Date(dateString);
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = Math.floor(seconds / (365 * 24 * 60 * 60));

    if (interval >= 1) {
        return interval + (interval > 1 ? ' years ago' : ' year ago');
    }
    interval = Math.floor(seconds / (30 * 24 * 60 * 60));
    if (interval >= 1) {
        return interval + (interval > 1 ? ' months ago' : ' month ago');
    }
    interval = Math.floor(seconds / (24 * 60 * 60));
    if (interval >= 1) {
        return interval + (interval > 1 ? ' days ago' : ' day ago');
    }
    interval = Math.floor(seconds / (60 * 60));
    if (interval >= 1) {
        return interval + (interval > 1 ? ' hours ago' : ' hour ago');
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + (interval > 1 ? ' minutes ago' : ' minute ago');
    }
    return Math.floor(seconds) + (seconds > 1 ? ' seconds ago' : ' second ago');
}