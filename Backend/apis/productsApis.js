import bcrypt from "bcrypt";
const saltRounds = 10;

const data={
        users: [
            {
                name: "FARHAN ALI",
                email: "fari-abbasi@outlook.com",
                password: bcrypt.hashSync("12345",saltRounds),
                isAdmin: true,
            },
            {
                name: "ARSALAN ALI",
                email: "farsalan-abbasi@outlook.com",
                password: bcrypt.hashSync("123456",saltRounds),
                isAdmin: false,
            },
        ],
    products:[
        {
            //_id: '1',
            name: '422067-Embroidered 3PC',
            slug: '422067-embroidered-3pc',
            desc: "Create statement looks for your evening’s plans with our SUNDEW embroidered three piece dress form latest Ready to Stitch Eid Summer 2022 collection by Nishat Linen.",
            image: '/images/Nishat/Embroidered-3pc.png',
            price: 14900,
            color: 'Nude',
            Fabric: 'Lawn',
            Measurement: 
            {  mtrs1: '-> Embroidered Lawn Shirt 2.5 MTRS'
,                 
                    mtrs2: '-> Embroidered  Organza Border For Shirt 1 MTR'
                ,
                  mtrs3: '-> Embroidered Voile Dupatta 2.5 MTRS'
            ,
                  mtrs4: '-> Embroidered Organza Border For Dupatta 2.25 MTRS'
            ,
                 mtrs5: '-> Dyed Cambric Trousers 2.5 MTRS'
            }
        ,          
           countInStock: 0,
           brand: 'nishatlinen',
           category: 'Stitched',
           note:'*Note: Actual fabric color, style and composition may differ slightly from the product image.',
           ratings: 2.5,
           numReviews: 70,
        },
        {
            //_id: '2',
            name: '422068-Embroidered 3PC',
            slug: '422068-embroidered-3pc',
            desc: 'Bring on the festive cheer with our FRENCH BLUE embroidered three piece dress  from latest Ready to Stitch Eid Summer 2022 collection by Nishat Linen.',
            image: '/images/Nishat/Embroidered-3pc-02.png',
            price: 8500,
            color: 'Aqua Blue',
            Fabric: 'Lawn',
            Measurement:
                {
                    mtrs1: '-> Embroidered Lawn Shirt 2.5 MTRS',
                    mtrs2: '-> Embroidered  Organza Border For Shirt 1 MTR',
                    mtrs3: '-> Embroidered Voile Dupatta 2.5 MTRS',
                    mtrs4: '-> Embroidered Organza Border For Dupatta 2.25 MTRS',
                   mtrs5: '-> Dyed Cambric Trousers 2.5 MTRS',
                }
            ,
           countInStock: 110,
           brand: 'nishatlinen',
           category: 'Stitched',
           note:'*Note: Actual fabric color, style and composition may differ slightly from the product image.',
           ratings: 3.5,
           numReviews: 210,

        },
        {
            //_id: '3',
            name: '422069-Embroidered 3PC',
            slug: '422069-embroidered-3pc',
            desc: 'Create statement looks for your evening’s plans with our SUNDEW embroidered three piece dress form latest Ready to Stitch Eid Summer 2022 collection by Nishat Linen.',
            image: '/images/Nishat/Embroidered-3pc-03.png',
            price: 9900,
            color: 'Nude',
            Fabric: 'Lawn',
            Measurement: 
             
               {     mtrs1: '-> Embroidered Lawn Shirt 2.5 MTRS'
             ,  mtrs2: '-> Embroidered  Organza Border For Shirt 1 MTR'
           , mtrs3: '-> Embroidered Voile Dupatta 2.5 MTRS'
           , mtrs4: '-> Embroidered Organza Border For Dupatta 2.25 MTRS'
          ,mtrs5: '-> Dyed Cambric Trousers 2.5 MTRS'
                }
            , 
           countInStock: 3,
           brand: 'nishatlinen',
           category: 'Stitched',
           note:'*Note: Actual fabric color, style and composition may differ slightly from the product image.',
           ratings: 4.5,
           numReviews: 310,

        },
        {
            //_id: '4',
            name: '422066-Embroidered 3PC',
            slug: '422066-embroidered-3pc',
            desc: 'Add some color to your day events with this BLUSH embroidered three piece dress form latest Ready to Stitch Eid Summer 2022 collection by Nishat Linen.',
            image: '/images/Nishat/Embroidered-3pc-04.png',
            price: 6900,
            color: 'Nude',
            Fabric: 'Lawn',
            Measurement: 
                
                  {  mtrs1: '-> Embroidered Lawn Shirt 2.5 MTRS'
                ,mtrs2: '-> Embroidered  Organza Border For Shirt 1 MTR'
                  ,  mtrs3: '-> Embroidered Voile Dupatta 2.5 MTRS'
                ,mtrs4: '-> Embroidered Organza Border For Dupatta 2.25 MTRS'
                  ,  mtrs5: '-> Dyed Cambric Trousers 2.5 MTRS'
                } 
                ,
            
           countInStock: 0,
           brand: 'nishatlinen',
           category: 'Stitched',
           note:'*Note: Actual fabric color, style and composition may differ slightly from the product image.',
           ratings: 1.5,
           numReviews: 50,

        },
        {
           //_id: '5',
            name: '422065-Embroidered 3PC',
            slug: '422065-embroidered-3pc',
            desc: 'Design the dress of your dreams by wearing this LAVENDER embroidered three piece dress from latest Ready to Stitch Eid Summer 2022 collection by Nishat Linen.',
            image: '/images/Nishat/Embroidered-3pc-05.png',
            price: 11900,
            color: 'Lavender',
            Fabric: 'Lawn',
            Measurement: 
              {      mtrs1: '-> Embroidered Lawn Shirt 2.5 MTRS'
            ,mtrs2: '-> Embroidered  Organza Border For Shirt 1 MTR'
                  ,      mtrs3: '-> Embroidered Voile Dupatta 2.5 MTRS'
            ,       mtrs4: '-> 6 Embroidered Organza Border For Dupatta'
            ,mtrs5: '-> Dyed Cambric Trousers 2.5 MTRS'}
                ,
           countInStock: 4,
           brand: 'nishatlinen',
           category: 'Stitched',
           note:'*Note: Actual fabric color, style and composition may differ slightly from the product image.',
           ratings: 4.9,
           numReviews: 510,

        },
        {
           //_id: '6',
            name: '42206-Embroidered 3PC',
            slug: '42206-embroidered-3pc',
            desc: 'Design the dress of your dreams by wearing this LAVENDER embroidered three piece dress from latest Ready to Stitch Eid Summer 2022 collection by Nishat Linen.',
            image: '/images/Nishat/Embroidered-3pc-05.png',
            price: 11900,
            color: 'Lavender',
            Fabric: 'Lawn',
            Measurement: 
              {      mtrs1: '-> Embroidered Lawn Shirt 2.5 MTRS'
            ,mtrs2: '-> Embroidered  Organza Border For Shirt 1 MTR'
                  ,      mtrs3: '-> Embroidered Voile Dupatta 2.5 MTRS'
            ,       mtrs4: '-> 6 Embroidered Organza Border For Dupatta'
            ,mtrs5: '-> Dyed Cambric Trousers 2.5 MTRS'}
                ,
           countInStock: 4,
           brand: 'nishatlinen',
           category: 'Stitched',
           note:'*Note: Actual fabric color, style and composition may differ slightly from the product image.',
           ratings: 4.9,
           numReviews: 510,

        },
    {
            //_id: '7',
            name: 'Blue Blended Unsititched kameez Shalwar',
            slug: 'blue-blended-unsititched-kameez-shalwar-fabric',
            image: '/images/jdot/blue-blended-unstitched-kameez-shalwar-fabric-jjms-3_blue.png',
            price: 4900,
            size: '4.5meters',
            color: 'Blue',
            Fabric: 'Cotton',
            countInStock: 0,
           brand: 'JDot',
           category: 'UnStitched Kameez Shalwar Fabric',
           disclaimer:'Due to the photographic lighting & different screen calibrations, the colors of the original product may slightly vary from the picture.',
           ratings: 2.5,
           numReviews: 909,
           jdotcollection: "Festive Affair '22" 
        },
        {
            //_id: '8',
            name: 'Brown blended Uunstitched kameez Shalwar',
            slug: 'brown-blended-unsititched-kameez-shalwar-fabric',
            image: '/images/jdot/brown-blended-unstitched-kameez-shalwar-fabric-jjms-4_brown.png',
            price: 2900,
            size: '4.5meters',
            color: 'Brown',
            Fabric: 'Cotton',
            countInStock: 10,
           brand: 'JDot',
           category: 'UnStitched Kameez Shalwar Fabric',
           disclaimer:'Due to the photographic lighting & different screen calibrations, the colors of the original product may slightly vary from the picture.',
           ratings: 3.5,
           numReviews: 8,
           jdotcollection: "Festive Affair '22" 
        },
        {
            //_id: '9',
            name: 'White Blended Unsititched kameez Shalwar',
            slug: 'white-blended-unsititched-kameez-shalwar-fabric',
            image: '/images/jdot/white-blended-unstitched-kameez-shalwar-fabric-jjms-2_white.png',
            price: 6300,
            size: '4.5meters',
            color: 'White',
            Fabric: 'Cotton',
            countInStock: 20,
           brand: 'JDot',
           category: 'UnStitched Kameez Shalwar Fabric',
           disclaimer:'Due to the photographic lighting & different screen calibrations, the colors of the original product may slightly vary from the picture.',
           ratings: 5,
           numReviews: 100,
           jdotcollection: "Festive Affair '22" 
        },
        {
           //_id: '10',
            name: 'Ash Gray Blended Unsititched kameez Shalwar',
            slug: 'ash-gray-blended-unsititched-kameez-shalwar-fabric',
            image: '/images/jdot/ash-grey-blended-unstitched-kameez-shalwar-fabric-jjms-5_ash_grey.png',
            price: 4900,
            size: '4.5meters',
            color: 'Ash Gray',
            Fabric: 'Cotton',
            countInStock: 15,
           brand: 'JDot',
           category: 'UnStitched Kameez Shalwar Fabric',
           disclaimer:'Due to the photographic lighting & different screen calibrations, the colors of the original product may slightly vary from the picture.',
           ratings: 1.5,
           numReviews: 84,
           jdotcollection: "Festive Affair '22" 
        },
        {
          //_id: '11',
            name: 'Gray Blended Unsititched kameez Shalwar',
            slug: 'gray-blended-unsititched-kameez-shalwar-fabric',
            image: '/images/jdot/grey-blended-unstitched-kameez-shalwar-fabric-jjms-01_grey.png',
            price: 8900,
            size: '4.5meters',
            color: 'Gray',
            Fabric: 'Cotton',
            countInStock: 10,
           brand: 'JDot',
           category: 'UnStitched Kameez Shalwar Fabric',
           disclaimer:'Due to the photographic lighting & different screen calibrations, the colors of the original product may slightly vary from the picture.',
           ratings: 4.5,
           numReviews:229,
           jdotcollection: "Festive Affair '22" 
        },
        {
           //_id: '12',
            name: 'Multi color Formal Shirt',
            slug: 'multi-formal-shirt',
            image: '/images/Gull_Ahmed/multi_colored_checkered_formal_shirt_01.png',
            price: 2500,
            color: 'Multi Color',
            Fabric: '60% Cotton 40% Poly',
            countInStock: 10,
           brand: 'Gull Ahmed',
           category: 'Formal Shirt',
           details:'Ideas Man Dress Shirts are tailored to perfection with their clean cuts and exquisite choice of fabric.',
           ratings: 2.5,
           numReviews: 4,
           note: 'Actual product color might slightly vary from the image.',
           size: 'Regular fit',
        },
        {
            //_id: '13',
            name: 'White color Formal Shirt',
            slug: 'white-formal-shirt',
            image: '/images/Gull_Ahmed/white_formal_shirt_cm-yd-3.png',
            price: 2500,
            color: 'Multi Color',
            Fabric: '60% Cotton 40% Polyester',
            countInStock: 10,
           brand: 'Gull Ahmed',
           category: 'Formal Shirt',
           details:'Ideas Man Dress Shirts are tailored to perfection with their clean cuts and exquisite choice of fabric.',
           ratings: 4.5,
           numReviews: 24,
           note: 'Actual product color might slightly vary from the image.',
           size: 'Executive Classic fit',
        },
        {
           //_id: '14',
            name: 'Navy color Formal Shirt',
            slug: 'navy-formal-shirt',
            image: '/images/Gull_Ahmed/navy_formal_shirt.png',
            price: 2100,
            color: 'White',
            Fabric: '60% Cotton 40% Polyester',
            countInStock: 10,
           brand: 'Gull Ahmed',
           category: 'Formal Shirt',
           details:'Ideas Man Dress Shirts are tailored to perfection with their clean cuts and exquisite choice of fabric.',
           ratings: 1.5,
           numReviews: 2,
           note: 'Actual product color might slightly vary from the image.',
           size: 'Executive Classic fit',
        },
        {
            //_id: '15',
            name: 'Pink color Formal Shirt',
            slug: 'pink-formal-shirt',
            image: '/images/Gull_Ahmed/pink_white_formal_shirt_cm-yd-02.png',
            price: 1900,
            color: 'Pink White',
            Fabric: '60% Cotton 40% Polyester',
            countInStock: 10,
           brand: 'Gull Ahmed',
           category: 'Formal Shirt',
           details:'Ideas Man Dress Shirts are tailored to perfection with their clean cuts and exquisite choice of fabric.',
           ratings: 2.5,
           numReviews: 8,
           note: 'Actual product color might slightly vary from the image.',
           size: 'Executive Classic fit',
        },
        {
            //_id: '16',
            name: 'Real Me Amoled',
            slug: 'real-me-Amoled',
            image: '/images/Electronics/real-me-Amoled.png',
            price: 19400,
            ratings: 2,
            numReviews: 8,
            brand: 'Realme',
            color: 'Light Seagreen',
            category: 'Mobile',
            countInStock: 7,
            Specfic: 
                {s_detail1: "-> 6GB RAM 64Gb ROM",
                s_detail2: "-> 10MP AI camera",
                s_detail3: "-> 5500 mAh Battery"}
            
        },
        {
            //_id: '17',
            name: 'Real Me Narzo',
            slug: 'real-me-narzo',
            image: '/images/Electronics/realme_Narzo.png',
            price: 23400,
            numReviews: 39,
            ratings: 3.5,
            brand: 'Realme',
            color: 'Light Blue',
            category: 'Mobile',
            countInStock: 27,
            Specfic: 
                {s_detail1: "-> 4GB RAM 64Gb ROM",
                s_detail2: "-> 8MP AI camera",
                s_detail3: "-> 5000 mAh Battery"}
            
        },
        {
            //_id: '18',
            name: 'Samsung Galaxy A32 -RAM 6BG ROM 128GB - Display 6.4',
            slug: 'samsung-galaxy-A32',
            image: '/images/Electronics/Samsung_Galaxy.png',
            price: 40900,
            numReviews: 30,
            ratings: 4.5,
            brand: 'Samsung',
            color: 'Awsom violet',
            category: 'Mobile',
            countInStock: 30,
            Specfic: {
                s_detail1: "-> 6GB RAM 128GB ROM",
                s_detail2: "-> Display 6.4 - Multi Quad Camera system",
                s_detail3: "-> 5000 mAh Battery",
                s_detail4: "-> 1 Year Warrenty"
        }
        }
,
        {
           //_id: '19',
            name:"LouisWill Men Casuals Fashion Watches",
            slug: 'louiswill-men-casuals-fashion',
            image: '/images/watches/louiswill-casuals.png',
            price: 2400,
            category:'Watchs',
            brand: 'LouisWill',
            color: 'Brown',
            numReviews: 34,
            ratings: 3,
            countInStock: 20,
            detailing:
                { points1: '-> Material: Stainless steel' ,
                 points2: '-> Waterproof: 30M' ,
                 points3: '-> Mirrors: High-hardness reinforced glass' ,
                 points4: '-> Strap Length: 210MM' ,
                 points5: '-> Dial Diameter: 42MM' ,
                 points6: '-> Dial Thickness: 11MM',
                 points7: '-> Weight: 60g' ,
                 points8: '-> Quartz Movement: Luxurious and elegant appearance, classic and unique dial. The original quartz movement can provide accurate and accurate timing, which is very suitable for various business, leisure, indoor activities and daily use.',
                 points9: '-> Luminous Pointers: The luminous pointer effect allows you to see the exact time at night, and the calendar display allows you to not miss any important meeting.' ,
                 points10: '-> 3ATM Waterproof: 3ATM daily waterproof, no need to worry about getting wet or sweat permeating the watch on rainy days, washing your hands, no problem on rainy days and sweating, durable to use.',
                 points11: '-> Fashion and Simple Design- Stainless steel strap, comfortable and durable to wear, Stylish business simple design makes you more unique among the crowd.'
             }
        },
        {
            //_id: '20',
            name:"LouisWill Men Travel Fashion Quartz",
            slug: 'louiswill-men-travel-fashion',
            image: '/images/watches/louiswill-men.png',
            price: 2000,
            category:'Watchs',
            brand: 'LouisWill',
            color: 'Black',
            numReviews: 54,
            ratings: 4,
            countInStock: 19,
            detailing:
                { points1: '-> FASHIONCASUAL DESIGN: unique diamond watchdialdesign, Scratch Proof Mineral Glass, High quality stainless steel strap bring comfortable and gentleman wearing experience.',
                 points2: '-> PRECISE TIME KEEPING:Quartz Movementdesignfor outdoor , provide precise and accurate time keepingeven though you doing some vigorous sports' ,
                 points3: '-> WATERPRROF: 3 ATM Water Resistant for daily life, can bear sweat, accidental rain or water splash, but not suitable for bathing, swimming, diving and so on. perfect for all kind of business, casual activities',
                 points4: '-> GIFTS: This watch is well packaged in a stylish watch box; a perfect gift for relatives or for friends on birthday, Christmas, Valentines day, Fathers day, etc.' 
            }
            


        },
        {
            //_id: '21',
            name:"SKMEI Fashion Muslim Prayer Watches",
            slug: 'skmei-fashion-muslim-prayer',
            image: '/images/watches/skmei-watch.png',
            price: 2999,
            category:'Watchs',
            brand: 'SKMEI',
            color: 'Black',
            numReviews: 34,
            ratings: 2,
            countInStock: 11,
            detailing:
                { points1: '-> Brand Name：SKMEI 1667' ,
                 points2: '-> Gender：Men/Women',
                 points3: '-> Case width:44mm, Case thickness:14mm, Band width:18mm, Watch length:220mm',
                 points4: '-> Waterproof：30M（Does not support swimming）' ,
                 points5: '-> Feature：Pilgnmage time reminder, Qibla name display, Qibla direction, Gregorian calendar, Hijri calendar, City data, Summer time, Bookmark, Language selection, Volume adjustment, Remaining battery Time, Chrono, Alarm ,Date , Week, LED light,12/24 hour clock',
                 points6: '-> Dial Thickness: 11MM' ,
                 points7: '-> Committed to providing a good customer experience!' ,
                 points8: '-> For receiving any damaged or defective product, please contact our customer service promptly, refund or resend or whatever is the best solution.' ,
                 points9: '-> Luminous Pointers: The luminous pointer effect allows you to see the exact time at night, and the calendar display allows you to not miss any important meeting.' ,
                points10: '-> Customer satisfaction is our important pursuit as always.' ,
        }


        },
        {
            //_id: '22',
            name:"VOOM 418 Fashion Men Sports Quartz Watch ",
            slug: 'voom-418-fashion-men-sports',
            image: '/images/watches/voomristwatch.png',
            price: 1299,
            category:'Watchs',
            brand: 'VOOM',
            color: 'Black',
            numReviews: 64,
            ratings: 4.5,
            countInStock: 40,
            detailing:{
                 points1: '-> special function',
                 points2: '-> world time' ,
                 points3: '-> display type' ,
                 points4: '-> pointer & water proof' ,
                 points5: '-> Mineral strengthened glass mirror' ,
                 points6: '-> Original high-quality quartz movement',
        }
        }
    ],
};

export default data;