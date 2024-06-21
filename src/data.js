import vivo from './views/imgs/vivo.jpg'
import hp from './views/imgs/hp.jpg'
import victus from './views/imgs/victus.webp'
import pavilion from './views/imgs/pavilion.jpg'
import lenovo from './views/imgs/lenovo.webp'
import ideapad from './views/imgs/ideapad.jpg'

const products = [
    {
        id : "Asus VivoBook 15",
        name : "Asus VivoBook 15",
        rating : "4.3",
        mrp : "₹33,999",
        price : "₹19,999",
        description : " Asus VivoBook 15 X515MA-BR011W Intel Celeron N4020 15.6 Inches Everyday Computing Laptop (4GB/256GB SSD/Windows 11/Transparent Silver/1.8 Kg)",
        img : vivo
    },
    {
        id: "HP Laptop 15",
        name: "HP Laptop 15",
        rating: "4.1",
        mrp: "₹52,999",
        price: "₹40,999",
        description: "HP Laptop 15, 13th Gen Intel Core i3-1315U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Thin & light, Intel Iris Xᵉ graphics, Dual speakers (Win 11, MSO 2021, Silver, 1.59 kg), fd0006TU",
        img: hp
    },
    {
        id: "HP Victus",
        name: "HP Victus",
        rating: "3.8",
        mrp: "₹84,999",
        price: "₹48,999",
        description: "HP Victus Gaming Laptop, AMD Ryzen 5 5600H, AMD 4GB Radeon RX 6500M Graphics, 15.6-inch (39.6 cm), FHD, IPS, 8GB DDR4, 512GB SSD, Backlit KB, B&O (Win 11, Blue, 2.29 kg), fb0147AX",
        img: victus
    },
    {
        id: "HP Pavilion 15",
        name: "HP Pavilion 15",
        rating: "3.9",
        mrp: "₹74,999",
        price: "₹60,999",
        description: "HP Pavilion 15, AMD Ryzen 7 5700U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 1TB SSD, AMD Radeon Graphics, FPR, 720p HD Camera, Backlit KB, Audio by B&O (Win 11, MSO 2021, Silver, 1.75 kg), eh1147AU",
        img: pavilion
    },
    {
        id: "Lenovo IdeaPad Flex 5",
        name: "Lenovo IdeaPad Flex 5",
        rating: "4.3",
        mrp: "₹78,999",
        price: "₹66,999",
        description: "Lenovo IdeaPad Flex 5 12th Gen Intel Core i5-1235U 14 (35.56cm) WUXGA IPS 2-in-1 Laptop (16GB/512GB SSD/Win 11/Office 21/Backlit KB/Fingerprint/FHD Camera/Alexa/3 mon Game Pass/Grey/1.5Kg), 82R700JJIN",
        img: lenovo
    },
    {
        id: "Lenovo IdeaPad Slim 5",
        name: "Lenovo IdeaPad Slim 5",
        rating: "4.7",
        mrp: "₹90,999",
        price: "₹67,999",
        description: "Lenovo IdeaPad Slim 5 13th Gen Intel Core i5 13500H 16 (40.6cm) WUXGA IPS Laptop (16GB/512GB SSD/Win 11/Office 2021/Backlit KB/FHD Camera/Alexa/3 Month Game Pass/Cloud Grey/1.89Kg), 82XF003CIN",
        img: ideapad
    }
];

export default products;