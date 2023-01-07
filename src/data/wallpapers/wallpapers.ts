const wallpapersData = [
    {
        name: "road",
        hours: 19,
    },

    {
        name: "forest",
        hours: 16,
    },
    {
        name: "books",
        hours: 13,
    },
    {
        name: "mountain",
        hours: 11,
    },
    {
        name: "stars",
        hours: 10,
    },
    {
        name: "road",
        hours: 7,
    },
    {
        name: "mountain",
        hours: 4,
    },
    {
        name: "books",
        hours: 0,
    },
];

export function findWallpaper() {
    const hours = new Date().getHours();

    const nameImg = wallpapersData.find((wallpaper) => hours >= wallpaper.hours)?.name;

    return nameImg;
}
