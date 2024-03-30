import { createContext, useState } from "react";

const ApiContext = createContext();

function Api({ children }) {
  const [users, setUser] = useState([
    {
      name: "Muhammad Abduh Tuasikal",
      email: "imuhammadabduh@gmail.com",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, laboriosam adipisci commodi exercitationem totam nihil perferendis sunt ducimus autem. Alias cupiditate, sunt dolore vitae corporis ratione omnis veritatis odit dignissimos!",
      url: "https://www.blibli.com/friends-backend/wp-content/uploads/2024/02/B110049-Cover-Ras-Kucing-Munchkin.jpg",
      lengthContents: 43,
      lengthDownloads: 347,
      lengthFavorites: 658,
    },
    {
      name: "Muhammad Umar Fathoni",
      email: "imuhammadumarfatoni@gmail.com",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod nobis non nihil dicta aperiam possimus ad enim ducimus sed unde quas nulla impedit ut, nemo amet numquam dolor qui?",
      url: "https://static.vecteezy.com/system/resources/previews/033/540/056/large_2x/two-funny-cats-take-a-selfie-on-the-beach-humor-created-using-artificial-intelligence-photo.jpg",
      lengthContents: 236,
      lengthDownloads: 63,
      lengthFavorites: 3455,
    },
  ]);

  const [admin, setAdmin] = useState({
    name: "Muhammad Abduh",
    email: "imuhammadabduh@gmail.com",
    desc: "Saya Muhammad Abduh dari palembang sebagai pengguna platform WARFOT, saya saat ini sudah mempunyai 100 konten, 100 kali konten saya didownload, dan 100 konten orang lain menyukainya.",
    lengthContents: 34,
    lengthDownloads: 658,
    lengthFavorites: 4397,
    url: "https://www.blibli.com/friends-backend/wp-content/uploads/2024/02/B110049-Cover-Ras-Kucing-Munchkin.jpg",
  });

  const [photosAdmin, setPhotosAdmin] = useState([
    {
      _id: 14,
      name: "Produk admin 1",
      desc: "1 Saya Muhammad Abduh dari palembang sebagai pengguna platform WARFOT, saya saat ini sudah mempunyai 100 konten, 100 kali konten saya didownload, dan 100 konten orang lain menyukainya.",
      price: 22000,
      lengthDownloadProduct: 658,
      lengthFavoriteProduct: 4397,
      url: "https://rm.id/files/konten/berita/ini-lho-arti-gambar-semangka-palestina-yang-lagi-viral-berikut-sejarahnya_195300.jpeg",
    },
    {
      _id: 265,
      name: "Produk admin 2",
      desc: "2 Saya Muhammad Abduh dari palembang sebagai pengguna platform WARFOT, saya saat ini sudah mempunyai 100 konten, 100 kali konten saya didownload, dan 100 konten orang lain menyukainya.",
      price: 43000,
      lengthDownloadProduct: 658,
      lengthFavoriteProduct: 4397,
      url: "https://asset-a.grid.id//crop/0x0:0x0/360x240/photo/2021/07/13/gambar-ilustrasi-bisa-memperjela-20210713123218.jpg",
    },
  ]);

  const [photos, setPhotos] = useState([
    {
      _id: 1,
      name: "Profuct 1",
      desc: "1 Saya Muhammad Abduh dari palembang sebagai pengguna platform WARFOT, saya saat ini sudah mempunyai 100 konten, 100 kali konten saya didownload, dan 100 konten orang lain menyukainya.",
      price: 22000,
      lengthDownloadProduct: 658,
      lengthFavoriteProduct: 4397,
      url: "https://www.blibli.com/friends-backend/wp-content/uploads/2024/02/B110049-Cover-Ras-Kucing-Munchkin.jpg",
    },
    {
      _id: 2,
      name: "Profuct 2",
      desc: "2 Saya Muhammad Abduh dari palembang sebagai pengguna platform WARFOT, saya saat ini sudah mempunyai 100 konten, 100 kali konten saya didownload, dan 100 konten orang lain menyukainya.",
      price: 43000,
      lengthDownloadProduct: 658,
      lengthFavoriteProduct: 4397,
      url: "https://static.vecteezy.com/system/resources/previews/033/540/056/large_2x/two-funny-cats-take-a-selfie-on-the-beach-humor-created-using-artificial-intelligence-photo.jpg",
    },
  ]);

  const [getDataDetileProduct, setGetDataDetileProduct] = useState({});
  const [getDataDetileUser, setGetDataDetileUser] = useState({});

  return (
    <ApiContext.Provider
      value={{
        users,
        setUser,
        photos,
        setPhotos,
        admin,
        setAdmin,
        getDataDetileProduct,
        setGetDataDetileProduct,
        getDataDetileUser,
        setGetDataDetileUser,
        photosAdmin,
        setPhotosAdmin,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiContext;
export { Api };
