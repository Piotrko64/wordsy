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
      hours: 18,
   },
   {
      name: 'yellow',
      hours: 18,
   },
   {
      name: 'road',
      hours: 16,
   },

   {
      name: 'forest',
      hours: 15,
   },
   {
      name: 'books',
      hours: 13,
   },
   {
      name: 'roses',
      hours: 12,
   },
   {
      name: 'mountain',
      hours: 10,
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
      hours: 5,
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
