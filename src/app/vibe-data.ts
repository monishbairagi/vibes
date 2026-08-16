export type VibeSong = {
  title: string;
  fileName: string;
};

export type VibeConfig = {
  id: string;
  name: string;
  description: string;
  assetFolder: string;
  backgrounds: string[];
  songs: VibeSong[];
};

export const VIBE_CONFIGS: VibeConfig[] = [
  {
    id: 'durga-puja',
    name: 'Durga Puja',
    description: 'A festive collection of devotional songs for the celebration of Maa Durga.',
    assetFolder: 'durga-puja',
    backgrounds: [
      'wallpaper-1.png',
      'wallpaper-2.png',
      'wallpaper-3.png',
      'wallpaper-4.png'
    ],
    songs: [
      {
        title: 'Rupang Dehi Jayang Dehi',
        fileName: 'Rupang Dehi Jayang Dehi  Pandit Tushar Dutta  Durga Stotram, argala stotram.mp3'
      },
      {
        title: 'Yaa Chandi',
        fileName: 'Yaa Chandi  য চণড  Mahalaya  Mahishasuramarddini  Dr. Upali Chattopadhyay.mp3'
      }
    ]
  },
  {
    id: 'truck-driver',
    name: 'Truck Driver',
    description: 'A cinematic ride through classic road-trip melodies and nostalgic energy.',
    assetFolder: 'truck-driver',
    backgrounds: ['wallpaper-1.mp4'],
    songs: [
      {
        title: 'Aaye Ho Meri Zindagi Mein Tum Bahar Banke',
        fileName: 'Aaye Ho Meri Zindagi Mein Tum Bahar Banke.mp3'
      },
      {
        title: 'Bahut Jatate Ho Chah Humse',
        fileName: 'Bahut Jatate Ho Chah Humse Lyrics  Alka Yagnik, Mohammed Aziz.mp3'
      },
      {
        title: 'Mera Dil Bhi Kitna Pagal Hai',
        fileName: 'Mera Dil Bhi Kitna Pagal Hai   Saajan  Kumarsanu, Alka Yagnik (1991)Sanjay Dutt, Madhuri Dixit.mp3'
      },
      {
        title: 'Pehli Pehli Baar Mohabbat Ki Hai',
        fileName: 'Pehli Pehli Baar Mohabbat Ki Hai  Sirf Tum  Sanjay Kapoor, Priya Gill - 90\'s Love Songs.mp3'
      }
    ]
  }
];
