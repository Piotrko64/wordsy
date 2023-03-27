const wallpapersData = [
   {
      name: 'leaves',
      hours: 23,
   },
   {
      name: 'greenNight',
      hours: 22,
   },
   {
      name: 'stars2',
      hours: 20,
   },
   {
      name: 'cat',
      hours: 19,
   },
   {
      name: 'darkRoad',
      hours: 17,
   },
   {
      name: 'road',
      hours: 16,
   },

   {
      name: 'forest',
      hours: 14,
   },
   {
      name: 'books',
      hours: 12,
   },
   {
      name: 'mountain',
      hours: 9,
   },
   {
      name: 'skyRed',
      hours: 8,
   },
   {
      name: 'road',
      hours: 7,
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
