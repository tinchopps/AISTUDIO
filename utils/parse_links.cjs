const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../temp_links.txt');
const rawData = fs.readFileSync(filePath, 'utf8');
const data = JSON.parse(rawData);

const albums = {};

data.forEach(item => {
    if (!albums[item.album]) {
        albums[item.album] = [];
    }
    albums[item.album].push(item);
});

// Helper to map mimeType to MediaType
const getMediaType = (mimeType) => {
    if (mimeType && mimeType.startsWith('video')) return 'MediaType.VIDEO';
    return 'MediaType.PHOTO';
};

// Helper to generate ID
const generateId = (albumName) => {
    return albumName.toLowerCase().replace(/[^a-z0-9]/g, '_');
};

Object.keys(albums).forEach(albumName => {
    const items = albums[albumName];
    const albumId = generateId(albumName);
    
    // Use the first image as cover if available
    const coverItem = items.find(i => i.type === 'photo') || items[0];
    const coverImage = coverItem ? coverItem.url : '';

    console.log(`  {`);
    console.log(`    id: '${albumId}',`);
    console.log(`    title: '${albumName}',`);
    console.log(`    date: '2007-2008',`); // Default date, user can change
    console.log(`    coverImage: '${coverImage}',`);
    console.log(`    media: [`);
    
    items.forEach(item => {
        const type = getMediaType(item.mimeType);
        console.log(`      { id: '${item.id}', type: ${type}, url: '${item.url}' },`);
    });

    console.log(`    ]`);
    console.log(`  },`);
});
