import Product01 from '../assets/home/ProductCard01.png'
import Product02 from '../assets/home/ProductCard02.png' 
import Product03 from '../assets/home/ProductCard03.png' 
import Product04 from '../assets/home/ProductCard04.png' 
import Product05 from '../assets/home/ProductCard05.png'
import Product06 from '../assets/home/ProductCard06.png' 
import Product07 from '../assets/home/ProductCard07.png' 
import Product08 from '../assets/home/ProductCard08.png' 
import Product09 from '../assets/home/RoomInspiration01.png'
import Product10 from '../assets/home/background01.png';
import Product11 from '../assets/home/categoryItem01.png'
import Product12 from '../assets/home/categoryItem02.png'
import Product13 from '../assets/home/categoryItem03.png';
import Logo04_customer_support from '../assets/Shop/customer_support.png';
import Logo02_guarantee from '../assets/Shop/guarantee.png'
import Logo01_quality from '../assets/Shop/quality.png'
import Logo03_shipping from '../assets/Shop/shipping.png'

import Table_01 from '../assets/product_items/table/table_01.jpg'
import Table_02 from '../assets/product_items/table/table_02.jpg'
import Table_03 from '../assets/product_items/table/table_03.jpg'
import Table_04 from '../assets/product_items/table/table_04.jpg'
import Table_05 from '../assets/product_items/table/table_05.jpg'
import Table_06 from '../assets/product_items/table/table_06.jpg'
import Table_07 from '../assets/product_items/table/table_07.jpg'
import Table_08 from '../assets/product_items/table/table_08.jpg'
import Table_09 from '../assets/product_items/table/table_09.jpg'
import Table_10 from '../assets/product_items/table/table_10.jpg'
import Table_11 from '../assets/product_items/table/table_11.jpg'
import Table_12 from '../assets/product_items/table/table_12.jpg'
import Table_13 from '../assets/product_items/table/table_13.jpg'
import Table_14 from '../assets/product_items/table/table_14.jpg'
import Table_15 from '../assets/product_items/table/table_15.png'
import Table_16 from '../assets/product_items/table/table_05.jpg'
import Table_17 from '../assets/product_items/table/table_06.jpg'
import Table_18 from '../assets/product_items/table/table_07.jpg'

import Sofa_01 from '../assets/product_items/sofa/sofa_01.jpg'
import Sofa_02 from '../assets/product_items/sofa/sofa_02.jpg'
import Sofa_03 from '../assets/product_items/sofa/sofa_03.jpg'
import Sofa_04 from '../assets/product_items/sofa/sofa_04.jpg'
import Sofa_05 from '../assets/product_items/sofa/sofa_05.jpg'
import Sofa_06 from '../assets/product_items/sofa/sofa_06.jpg'
import Sofa_07 from '../assets/product_items/sofa/sofa_07.jpg'
import Sofa_08 from '../assets/product_items/sofa/sofa_08.jpg'
import Sofa_09 from '../assets/product_items/sofa/sofa_09.jpg'
import Sofa_10 from '../assets/product_items/sofa/sofa_10.jpg'
import Sofa_11 from '../assets/product_items/sofa/sofa_11.jpg'
import Sofa_12 from '../assets/product_items/sofa/sofa_12.jpg'
import Sofa_13 from '../assets/product_items/sofa/sofa_13.jpg'
import Sofa_14 from '../assets/product_items/sofa/sofa_14.jpg'
import Sofa_15 from '../assets/product_items/sofa/sofa_15.jpg'
import Sofa_16 from '../assets/product_items/sofa/sofa_16.jpg'
import Sofa_17 from '../assets/product_items/sofa/sofa_17.jpg'
import Sofa_18 from '../assets/product_items/sofa/sofa_18.png'
import Sofa_19 from '../assets/product_items/sofa/sofa_19.png'
import Sofa_20 from '../assets/product_items/sofa/sofa_20.png'
import Sofa_21 from '../assets/product_items/sofa/sofa_21.png'
import Sofa_22 from '../assets/product_items/sofa/sofa_22.png'

import Bed_01 from '../assets/product_items/bed/bed_01.jpg'
import Bed_02 from '../assets/product_items/bed/bed_02.jpg'
import Bed_03 from '../assets/product_items/bed/bed_03.jpg'
import Bed_04 from '../assets/product_items/bed/bed_04.jpg'
import Bed_05 from '../assets/product_items/bed/bed_05.jpg'
import Bed_06 from '../assets/product_items/bed/bed_06.jpg'
import Bed_07 from '../assets/product_items/bed/bed_07.jpg'
import Bed_08 from '../assets/product_items/bed/bed_08.jpg'

import Chair_01 from '../assets/product_items/chair/chair_01.jpg'
import Chair_02 from '../assets/product_items/chair/chair_02.jpg'
import Chair_03 from '../assets/product_items/chair/chair_03.jpg'
import Chair_04 from '../assets/product_items/chair/chair_04.jpg'
import Chair_05 from '../assets/product_items/chair/chair_01.jpg'
import Chair_06 from '../assets/product_items/chair/chair_06.jpg'
import Chair_07 from '../assets/product_items/chair/chair_07.jpg'
import Chair_08 from '../assets/product_items/chair/chair_08.jpg'
import Chair_09 from '../assets/product_items/chair/chair_09.jpg'
import Chair_10 from '../assets/product_items/chair/chair_10.jpg'
import Chair_11 from '../assets/product_items/chair/chair_11.jpg'
import Chair_12 from '../assets/product_items/chair/chair_12.jpg'
import Chair_13 from '../assets/product_items/chair/chair_13.jpg'
import Chair_14 from '../assets/product_items/chair/chair_14.jpg'
import Chair_15 from '../assets/product_items/chair/chair_15.jpg'
import Chair_16 from '../assets/product_items/chair/chair_16.png'
import Chair_17 from '../assets/product_items/chair/chair_04.jpg'

import Lamp_01 from '../assets/product_items/lamp/lamp_01.png'

/**
 * make this array to connect with db images id otherwise 
 * i have to store this to some cloud storage (s3) that i don't
 * have it .   
*/

/**
 * Category
 * 1 -> sofa   22
 * 2 -> bed    08
 * 3 -> chair  17
 * 4 -> table  18
 * 5 -> lamp   01
 */
export const image_list = new Map();
image_list.set(1,  Sofa_01)
image_list.set(2, Sofa_02);
image_list.set(3, Sofa_03);
image_list.set(4, Sofa_04);
image_list.set(5, Sofa_05);
image_list.set(6, Sofa_06);
image_list.set(7, Sofa_07);
image_list.set(8, Sofa_08);
image_list.set(9, Sofa_09);
image_list.set(10, Sofa_10);
image_list.set(11, Sofa_11);
image_list.set(12, Sofa_12);
image_list.set(13, Sofa_13);
image_list.set(14, Sofa_14);
image_list.set(15, Sofa_15);
image_list.set(16, Sofa_16);
image_list.set(17, Sofa_17);
image_list.set(18, Sofa_18);
image_list.set(19, Sofa_19);
image_list.set(20, Sofa_20);
image_list.set(21, Sofa_21);
image_list.set(22, Sofa_22);
image_list.set(23, Bed_01);
image_list.set(24, Bed_02);
image_list.set(25, Bed_03);
image_list.set(26, Bed_04);
image_list.set(27, Bed_05);
image_list.set(28, Bed_06);
image_list.set(29, Bed_07);
image_list.set(30, Bed_08);
image_list.set(31, Chair_01);
image_list.set(32, Chair_02);
image_list.set(33, Chair_03);
image_list.set(34, Chair_04);
image_list.set(35, Chair_05);
image_list.set(36, Chair_06);
image_list.set(37, Chair_07);
image_list.set(38, Chair_08);
image_list.set(39, Chair_09);
image_list.set(40, Chair_10);
image_list.set(41, Chair_11);
image_list.set(42, Chair_12);
image_list.set(43, Chair_13);
image_list.set(44, Chair_14);
image_list.set(45, Chair_15);
image_list.set(46, Chair_16);
image_list.set(47, Chair_17);
image_list.set(48, Table_01);
image_list.set(49, Table_02);
image_list.set(50, Table_03);
image_list.set(51, Table_04);
image_list.set(52, Table_05);
image_list.set(53, Table_06);
image_list.set(54, Table_07);
image_list.set(55, Table_08);
image_list.set(56, Table_09);
image_list.set(57, Table_10);
image_list.set(58, Table_11);
image_list.set(59, Table_12);
image_list.set(60, Table_13);
image_list.set(61, Table_14);
image_list.set(62, Table_15);
image_list.set(63, Table_16);
image_list.set(64, Table_17);
image_list.set(65, Table_18);
image_list.set(66, Lamp_01);

export const shopScreen_slider_content = [
    {
        logo: Logo01_quality,
        title: 'High Quality',
        description: 'crafted from top materials'
    },
    {
        logo: Logo02_guarantee,
        title: 'Warranty Protection',
        description: 'Over 2 years'
    },
    {
        logo: Logo03_shipping,
        title: 'Free Shipping',
        description: 'Order over 150 $'
    },
    {
        logo: Logo04_customer_support,
        title: '24 / 7 Support',
        description: 'Dedicated support'
    },
]

export const products_list =[
    {
        product_id: 1,
        imgSrc : Product01 ,
        productName: 'Syltherine',
        productType: 'Stylish cafe chair',
        productPrice: 3500,
        isNewProduct: true
    },
    {
        product_id: 2,
        imgSrc : Product02 ,
        productName: 'Leviosa',
        productType: 'Luxury big sofa',
        productPrice: 2500,
        discountPercentage : 20,
        isNewProduct: true
    },
    {
        product_id: 3,
        imgSrc : Product02 ,
        productName: 'Leviosa',
        productType: 'Luxury big sofa',
        productPrice: 2500,
        discountPercentage : 20,
        isNewProduct: false
    },
    {
        product_id: 4,
        imgSrc : Product03 ,
        productName: 'Lolito',
        productType: 'Outdoor bar table and stool',
        productPrice: 5500,
        isNewProduct: true
    },
    {
        product_id: 5,
        imgSrc : Product04 ,
        productName: 'Respira',
        productType: 'Outdoor bar table and stool, Luxury big sofa',
        productPrice: 500,
        discountPercentage : 0,
        isNewProduct: false
    },
    {
        product_id: 6,
        imgSrc : Product05 ,
        productName: 'Syltherine',
        productType: 'Stylish cafe chair',
        productPrice: 3500,
        discountPercentage : 30,
        isNewProduct: true
    },
    {
        product_id: 7,
        imgSrc : Product06 ,
        productName: 'Leviosa',
        productType: 'Luxury big sofa',
        productPrice: 0,
        isNewProduct: true
    },
    {
        product_id: 8,
        imgSrc : Product07 ,
        productName: 'Lolito',
        productType: 'Outdoor bar table and stool',
        productPrice: 5500,
        discountPercentage : 50,
        isNewProduct: false
    },
    {
        product_id: 9,
        imgSrc : Product08 ,
        productName: 'Respira',
        productType: 'Outdoor bar table and stool, Luxury big sofa ok  ok ok ok o ko ko k ok ok ok ok ok ok k ',
        productPrice: 500,
        discountPercentage : 0,
        isNewProduct: true
    },
    {
        product_id: 10,
        imgSrc : Product09 ,
        productName: 'Syltherine',
        productType: 'Stylish cafe chair',
        productPrice: 3500,
        discountPercentage : 30,
        isNewProduct: false
    },
    {
        product_id: 11,
        imgSrc : Product10 ,
        productName: 'Leviosa',
        productType: 'Luxury big sofa',
        productPrice: 2500,
        discountPercentage : 20,
        isNewProduct: true
    },
    {
        product_id: 12,
        imgSrc : Product11 ,
        productName: 'Lolito',
        productType: 'Outdoor bar table and stool',
        productPrice: 5500,
        discountPercentage : 50,
        isNewProduct: true
    },
    {
        product_id: 13,
        imgSrc : Product12 ,
        productName: 'Respira',
        productType: 'Outdoor bar table and stool, Luxury big sofa',
        productPrice: 500,
        discountPercentage : 0,
        isNewProduct: true
    },
    {
        product_id: 14,
        imgSrc : Product13 ,
        productName: 'Syltherine',
        productType: 'Stylish cafe chair',
        productPrice: 3500,
        discountPercentage : 30,
        isNewProduct: true
    },
    {
        product_id: 15,
        imgSrc : Product02 ,
        productName: 'Leviosa',
        productType: 'Luxury big sofa',
        productPrice: 2500,
        discountPercentage : 20,
        isNewProduct: true
    },
    {
        product_id: 16,
        imgSrc : Product03 ,
        productName: 'Lolito',
        productType: 'Outdoor bar table and stool',
        productPrice: 5500,
        discountPercentage : 50,
        isNewProduct: true
    },
    {
        product_id: 17,
        imgSrc : Product04 ,
        productName: 'Respira',
        productType: 'Outdoor bar table and stool, Luxury big sofa',
        productPrice: 500,
        discountPercentage : 0,
        isNewProduct: true
    },
    {
        product_id: 18,
        imgSrc : Product05 ,
        productName: 'Syltherine',
        productType: 'Stylish cafe chair',
        productPrice: 3500,
        discountPercentage : 30,
        isNewProduct: true
    },
    {
        product_id: 19,
        imgSrc : Product06 ,
        productName: 'Leviosa',
        productType: 'Luxury big sofa',
        productPrice: 0,
        discountPercentage : 20,
        isNewProduct: true
    },
    {
        product_id: 20,
        imgSrc : Product07 ,
        productName: 'Lolito',
        productType: 'Outdoor bar table and stool',
        productPrice: 5500,
        discountPercentage : 50,
        isNewProduct: true
    },
    {
        product_id: 21,
        imgSrc : Product08 ,
        productName: 'Respira',
        productType: 'Outdoor bar table and stool, Luxury big sofa',
        productPrice: 500,
        discountPercentage : 0,
        isNewProduct: false
    },
    {
        product_id: 22,
        imgSrc : Product09 ,
        productName: 'Syltherine',
        productType: 'Stylish cafe chair',
        productPrice: 3500,
        discountPercentage : 30,
        isNewProduct: true
    },
    {
        product_id: 23,
        imgSrc : Product10 ,
        productName: 'Leviosa',
        productType: 'Luxury big sofa',
        productPrice: 2500,
        discountPercentage : 20,
        isNewProduct: true
    },
    {
        product_id: 24,
        imgSrc : Product11 ,
        productName: 'Lolito',
        productType: 'Outdoor bar table and stool',
        productPrice: 5500,
        discountPercentage : 50,
        isNewProduct: true
    },
    {
        product_id: 25,
        imgSrc : Product12 ,
        productName: 'Respira',
        productType: 'Outdoor bar table and stool, Luxury big sofa',
        productPrice: 500,
        discountPercentage : 0,
        isNewProduct: true
    },
    {
        product_id: 26,
        imgSrc : Product01 ,
        productName: 'Syltherine',
        productType: 'Stylish cafe chair',
        productPrice: 3500,
        discountPercentage : 30,
        isNewProduct: true
    },
    {
        product_id: 27,
        imgSrc : Product02 ,
        productName: 'Leviosa',
        productType: 'Luxury big sofa',
        productPrice: 2500,
        discountPercentage : 20,
        isNewProduct: false
    },
    {
        product_id: 28,
        imgSrc : Product03 ,
        productName: 'Lolito',
        productType: 'Outdoor bar table and stool',
        productPrice: 5500,
        discountPercentage : 50,
        isNewProduct: true
    },
    {
        product_id: 29,
        imgSrc : Product04 ,
        productName: 'Respira',
        productType: 'Outdoor bar table and stool, Luxury big sofa',
        productPrice: 500,
        discountPercentage : 0,
        isNewProduct: true
    },
    {
        product_id: 30,
        imgSrc : Product05 ,
        productName: 'Syltherine',
        productType: 'Stylish cafe chair',
        productPrice: 3500,
        discountPercentage : 30,
        isNewProduct: true
    },
    {
        product_id: 31,
        imgSrc : Product06 ,
        productName: 'Leviosa',
        productType: 'Luxury big sofa',
        productPrice: 0,
        discountPercentage : 20,
        isNewProduct: true
    },
    {
        product_id: 32,
        imgSrc : Product07 ,
        productName: 'Lolito',
        productType: 'Outdoor bar table and stool',
        productPrice: 5500,
        discountPercentage : 50,
        isNewProduct: true
    },
    {
        product_id: 33,
        imgSrc : Product08 ,
        productName: 'Respira',
        productType: 'Outdoor bar table and stool, Luxury big sofa',
        productPrice: 500,
        discountPercentage : 0,
        isNewProduct: false
    },
    {
        product_id: 34,
        imgSrc : Product09 ,
        productName: 'Syltherine',
        productType: 'Stylish cafe chair',
        productPrice: 3500,
        discountPercentage : 30,
        isNewProduct: true
    },
    {
        product_id: 35,
        imgSrc : Product10 ,
        productName: 'Leviosa',
        productType: 'Luxury big sofa',
        productPrice: 2500,
        discountPercentage : 20,
        isNewProduct: false
    },
    {
        product_id: 36,
        imgSrc : Product11 ,
        productName: 'Lolito',
        productType: 'Outdoor bar table and stool',
        productPrice: 5500,
        discountPercentage : 50,
        isNewProduct: true
    },
    {
        product_id: 37,
        imgSrc : Product12 ,
        productName: 'Respira',
        productType: 'Outdoor bar table and stool, Luxury big sofa',
        productPrice: 500,
        discountPercentage : 0,
        isNewProduct: false
    }
] 

export const product_info_dummy = [
    {'General': [
      ['Sales Package', '1 sectional sofa', '1 Three Seater, 2 Single Seater'],
      ['Model Number', 'TFCBLIGRBL6SRHS', 'DTUBLIGRBL568'],
      ['Secondary Material', 'Solid Wood', 'Solid Wood'],
      ['Configuration', 'L-shaped', 'L-shaped'],
      ['Upholstery Material', 'Fabric + Cotton', 'Fabric + Cotton'],
      ['Upholstery Color', 'Bright Grey & Lion', 'Bright Grey & Lion']
    ]
    },
    {'Product': [
      ['Filling Material', 'Foam', 'Matte'],
      ['Finish Type', 'Bright Grey & Lion', 'Bright Grey & Lion'],
      ['Adjustable Headrest', 'No', 'Yes'],
      ['Maximum Load Capacity', '280 KG', '300 KG'],
      ['Origin of Manufacture', 'India', 'India']
    ]},
    {'Dimensions': [
      ['Width', '265.32 cm', '265.32 cm'],
      ['Height', '76 cm', '76 cm'],
      ['Depth', '167.76 cm', '167.76 cm'],
      ['Weight', '45 KG', '65 KG'],
      ['Seat Height', '41.52 cm', '41.52 cm'],
      ['Leg Height', '5.46 cm', '5.46 cm']
    ]},
    {'Warranty': [
      ['Warranty Summary', '1 Year Manufacturing Warranty', '1.2 Year Manufacturing Warranty'],
      ['Warranty Service Type', 
       'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
       'For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com'
      ],
      ['Covered in Warranty',
       'Warranty Against Manufacturing Defect',
       'Warranty of the product is limited to manufacturing defects only.'
      ],
      ['Not Covered in Warranty',
       'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
       'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.'
      ],
      ['Domestic Warranty', '1 Year', '3 Months']
    ]}
];
  