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
export const image_list =[
    {
        image_id : 1 ,
        image_src : Sofa_01
    },
    {
        image_id : 2 ,
        image_src : Sofa_02
    },
    {
        image_id : 3 ,
        image_src : Sofa_03
    },
    {
        image_id : 4 ,
        image_src : Sofa_04
    },
    {
        image_id : 5 ,
        image_src : Sofa_05
    },
    {
        image_id : 6 ,
        image_src : Sofa_06
    },
    {
        image_id : 7 ,
        image_src : Sofa_07
    },
    {
        image_id : 8 ,
        image_src : Sofa_08
    },
    {
        image_id : 9 ,
        image_src : Sofa_09
    },
    {
        image_id : 10 ,
        image_src : Sofa_10
    },
    {
        image_id : 11 ,
        image_src : Sofa_11
    },
    {
        image_id : 12 ,
        image_src : Sofa_12
    },
    {
        image_id : 13 ,
        image_src : Sofa_13
    },
    {
        image_id : 14 ,
        image_src : Sofa_14
    },
    {
        image_id : 15 ,
        image_src : Sofa_15
    },
    {
        image_id : 16 ,
        image_src : Sofa_16
    },
    {
        image_id : 17 ,
        image_src : Sofa_17
    },
    {
        image_id : 18 ,
        image_src : Sofa_18
    },
    {
        image_id : 19 ,
        image_src : Sofa_19
    },
    {
        image_id : 20 ,
        image_src : Sofa_20
    },
    {
        image_id : 21 ,
        image_src : Sofa_21
    },
    {
        image_id : 22 ,
        image_src : Sofa_22
    },
    {
        image_id : 23 ,
        image_src : Bed_01
    },
    {
        image_id : 24 ,
        image_src : Bed_02
    },
    {
        image_id : 25 ,
        image_src : Bed_03
    },
    {
        image_id : 26 ,
        image_src : Bed_04
    },
    {
        image_id : 27 ,
        image_src : Bed_05
    },
    {
        image_id : 28 ,
        image_src : Bed_06
    },
    {
        image_id : 29 ,
        image_src : Bed_07
    },
    {
        image_id : 30 ,
        image_src : Bed_08
    },
    {
        image_id : 31 ,
        image_src : Chair_01
    },
    {
        image_id : 32 ,
        image_src : Chair_02
    },
    {
        image_id : 33 ,
        image_src : Chair_03
    },
    {
        image_id : 34 ,
        image_src : Chair_04
    },
    {
        image_id : 35 ,
        image_src : Chair_05
    },
    {
        image_id : 36 ,
        image_src : Chair_06
    },
    {
        image_id : 37 ,
        image_src : Chair_07
    },
    {
        image_id : 38 ,
        image_src : Chair_08
    },
    {
        image_id : 39 ,
        image_src : Chair_09
    },
    {
        image_id : 40 ,
        image_src : Chair_10
    },
    {
        image_id : 41 ,
        image_src : Chair_11
    },
    {
        image_id : 42 ,
        image_src : Chair_12
    },
    {
        image_id : 43 ,
        image_src : Chair_13
    },
    {
        image_id : 44 ,
        image_src : Chair_14
    },
    {
        image_id : 45 ,
        image_src : Chair_15
    },
    {
        image_id : 46 ,
        image_src : Chair_16
    },
    {
        image_id : 47 ,
        image_src : Chair_17
    },
    {
        image_id : 48 ,
        image_src : Table_01
    },
    {
        image_id : 49 ,
        image_src : Table_02
    },
    {
        image_id : 50 ,
        image_src : Table_03
    },
    {
        image_id : 51 ,
        image_src : Table_04
    },
    {
        image_id : 52 ,
        image_src : Table_05
    },
    {
        image_id : 53 ,
        image_src : Table_06
    },
    {
        image_id : 54 ,
        image_src : Table_07
    },
    {
        image_id : 55 ,
        image_src : Table_08
    },
    {
        image_id : 56 ,
        image_src : Table_09
    },
    {
        image_id : 57 ,
        image_src : Table_10
    },
    {
        image_id : 58 ,
        image_src : Table_11
    },
    {
        image_id : 59 ,
        image_src : Table_12
    },
    {
        image_id: 60 ,
        image_src : Table_13
    },
    {
        image_id: 61 ,
        image_src : Table_14
    },
    {
        image_id: 62 ,
        image_src : Table_15
    },
    {
        image_id: 63 ,
        image_src : Table_16
    },
    {
        image_id: 64 ,
        image_src : Table_17
    },
    {
        image_id: 65 ,
        image_src : Table_18
    },
    {
        image_id: 66 ,
        image_src : Lamp_01
    }
]    

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
  