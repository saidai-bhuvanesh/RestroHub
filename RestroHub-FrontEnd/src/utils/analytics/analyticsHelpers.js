export const getColorForStatus = (status) => {
  switch (status.toLowerCase()) {
    case 'completed':
    case 'delivered':
      return 'text-green-500 bg-green-100';
    case 'processing':
    case 'preparing':
      return 'text-blue-500 bg-blue-100';
    case 'pending':
    case 'waiting':
      return 'text-yellow-500 bg-yellow-100';
    case 'cancelled':
    case 'delayed':
      return 'text-red-500 bg-red-100';
    default:
      return 'text-gray-500 bg-gray-100';
  }
};

export const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  return Math.floor(seconds) + " seconds ago";
};
