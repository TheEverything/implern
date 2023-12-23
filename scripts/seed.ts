const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

const categories = [
  { title: "Design", icon: "🎨" },
  { title: "Software", icon: "👨‍💻" },
  { title: "Finance", icon: "💰" }
];

const subCategories = [
  { title: "Nextjs", imageUrl: "https://nextjs.org/static/favicon/favicon-32x32.png", categoryId: "311076de-bac5-4126-baf1-38f64fba58e2" },
  { title: "React", imageUrl: "https://reactjs.org/favicon.ico", categoryId: "312f822b-6caa-49ff-8464-22c05e8ebf81" },
  { title: "Figma", imageUrl: "https://www.figma.com/favicon.ico", categoryId: "16efd6d8-8c4f-4c46-ae0c-744eb8967308" },
  { title: "Framer", imageUrl: "https://www.framer.com/favicon.ico", categoryId: "16efd6d8-8c4f-4c46-ae0c-744eb8967308" }
];

const lists = [
  {
    title: "My first list",
    description: "This is my first list",
    addedUserIds: ["user_2Zx0VAZTyQ9z7rmUKEwbBgTcv41"],
    ownerId: "user_2Zx0VAZTyQ9z7rmUKEwbBgTcv41",
    subCategoryId: "16b05c9f-9743-43d9-a2dc-af0c03f42308",
    upCount: 0,
    commentCount: 0
  }
];

const channels = [
  {
    imageUrl: "https://i3.ytimg.com/vi/dphmbB77W_4/hqdefault.jpg",
    name: "Fireship",
    youtubeUrl: "https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA"
  },
  {
    imageUrl: "https://i3.ytimg.com/vi/7h732qLxtAk/hqdefault.jpg",
    name: "Traversy Media",
    youtubeUrl: "https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA"
  },
  {
    imageUrl: "https://i3.ytimg.com/vi/8fxDLhw0MZI/hqdefault.jpg",
    name: "Fatih Altaylı",
    youtubeUrl: "https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA"
  }
];

const videos = [
  {
    title: "Facebook Did It Again",
    youtubeUrl: "https://youtu.be/dphmbB77W_4",
    imageUrl: "https://i3.ytimg.com/vi/dphmbB77W_4/hqdefault.jpg",
    duration: 24,
    channelId: "1855a99b-2293-4677-8081-f9ab0d84f944"
  },
  {
    title: "AI coding assistants just leveled up, again…",
    youtubeUrl: "https://youtu.be/7h732qLxtAk",
    imageUrl: "https://i3.ytimg.com/vi/7h732qLxtAk/hqdefault.jpg",
    duration: 4,
    channelId: "1855a99b-2293-4677-8081-f9ab0d84f944"
  },
  {
    title: "Filistin topraklarını sattı mı? / Gazeteci Murat Bardakçı & Fatih Altaylı - Teke Tek Bilim",
    youtubeUrl: "https://youtu.be/8fxDLhw0MZI",
    imageUrl: "https://i3.ytimg.com/vi/8fxDLhw0MZI/hqdefault.jpg",
    duration: 87,
    channelId: "ce2935f3-0641-4bc5-9707-40ade14ff841"
  },
  {
    title: "BÜYÜK TÜRKİYE?",
    youtubeUrl: "https://youtu.be/D5rNsud_dL8",
    imageUrl: "https://i3.ytimg.com/vi/D5rNsud_dL8/hqdefault.jpg",
    duration: 13,
    channelId: "3e7c7ea2-03b2-45af-aa65-721af6529424"
  },
  {
    title: "Kurucu Baba: MUSTAFA KEMAL ATATÜRK",
    youtubeUrl: "https://youtu.be/eHErA9idd-8",
    imageUrl: "https://i3.ytimg.com/vi/eHErA9idd-8/hqdefault.jpg",
    duration: 12,
    channelId: "1855a99b-2293-4677-8081-f9ab0d84f944"
  },
  {
    title: "MUSTAFA KEMAL ATATÜRK",
    youtubeUrl: "https://youtu.be/0rvt0tnxRS4",
    imageUrl: "https://i3.ytimg.com/vi/0rvt0tnxRS4/hqdefault.jpg",
    duration: 24,
    channelId: "ce2935f3-0641-4bc5-9707-40ade14ff841"
  }
];

async function main() {
  try {
    // await database.category.createMany({ data: categories });
    // await database.subCategory.createMany({ data: subCategories });
    // await database.list.createMany({ data: lists });
    // await database.video.createMany({ data: videos });
    // await database.channel.createMany({ data: channels });

    console.log("Success");

    ////
  } catch (error) {
    console.log("Error seeding the database categories", error);

    ////
  } finally {
    await database.$disconnect();
  }
}

main();
