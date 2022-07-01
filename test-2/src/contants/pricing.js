import { v4 as uuidv4 } from "uuid";

export const pricing = [
  {
    id: uuidv4(),
    name: "Basic",
    price: "$9.99 / year",
    desc: [
      {
        id: uuidv4(),
        text: "Mencatat barang masuk",
      },
      {
        id: uuidv4(),
        text: "Mencatat barang keluar",
      },
      {
        id: uuidv4(),
        text: "Mencatat hasil keuntungan",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Business",
    price: "$24.99 / year",
    desc: [
      {
        id: uuidv4(),
        text: "Mencatat barang masuk",
      },
      {
        id: uuidv4(),
        text: "Mencatat barang keluar",
      },
      {
        id: uuidv4(),
        text: "Dapat menganalisa hasil penjualan dengan CHART",
      },
      {
        id: uuidv4(),
        text: "Support 7x24 jam",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Entrepreneur",
    price: "$40.99 / year",
    desc: [
      {
        id: uuidv4(),
        text: "Mencatat barang masuk",
      },
      {
        id: uuidv4(),
        text: "Mencatat barang keluar",
      },
      {
        id: uuidv4(),
        text: "Dapat menganalisa hasil penjualan dengan CHART",
      },
      {
        id: uuidv4(),
        text: "Support 7x24 jam",
      },
      {
        id: uuidv4(),
        text: "Export data ke Excel",
      },
      {
        id: uuidv4(),
        text: "AI Prediksi penghasilan",
      },
    ],
  },
];
