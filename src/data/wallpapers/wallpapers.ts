const wallpapersData = [
   {
      name: 'leaves',
      hours: 23,
   },
   {
      name: 'stars2',
      hours: 21,
   },
   {
      name: 'cat',
      hours: 20,
   },
   {
      name: 'road',
      hours: 18,
   },

   {
      name: 'forest',
      hours: 16,
   },
   {
      name: 'books',
      hours: 14,
   },
   {
      name: 'mountain',
      hours: 12,
   },

   {
      name: 'road',
      hours: 8,
   },
   {
      name: 'mountain',
      hours: 4,
   },
   {
      name: 'books',
      hours: 1,
   },
];

export function findWallpaper() {
   const hours = new Date().getHours();

   return wallpapersData.find((wallpaper) => hours >= wallpaper.hours)?.name;
}
