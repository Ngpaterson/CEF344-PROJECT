// Select the database to use.
use('paterson');

// Insert a few documents into the PortfolioData collection.
// db.getCollection('testimonials').insertMany(
//     [
//         {
          
//             image: 'https://cdn.dribbble.com/userupload/7518943/file/original-b39a16475b25ac10559e04034bd8b9b7.png?compress=1&resize=1504x1128',
//             title: 'Online Crypto Casino',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21632973-Online-Crypto-Casino-Mobile-Designs',
//         },
//         {
       
//             image: 'https://cdn.dribbble.com/userupload/7531024/file/original-28960363b0b1e5a03c2f6f1f077c298e.jpg?compress=1&resize=1504x1128',
//             title: 'Education App UIX',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21637001-Education-App-UIX',
//         },
//         {
//             image: 'https://cdn.dribbble.com/userupload/7474794/file/original-ec5e3ff0615f4ec018a8662d76206bde.jpg?compress=1&resize=1504x1126',
//             title: 'Recipe app design',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21617723-Recipe-app-design',
//         },
//         {
        
//             image: 'https://cdn.dribbble.com/userupload/7527073/file/original-a56488a4a04a23bfbeb97cafc030dde5.png?compress=1&resize=1504x1128',
//             title: 'OnStep - Shoes Store',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21635811-OnStep-Shoes-Store',
//         },
//         {
     
//             image: 'https://cdn.dribbble.com/users/5147614/screenshots/17480773/media/77bbee6dafd811f65d14bd38f4c426ab.png?compress=1&resize=1200x900&vertical=top',
//             title: 'Mobile App Exploration',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/17480773-NWS-Mobile-App-Exploration',
//         },
//         {
       
//             image: 'https://cdn.dribbble.com/userupload/7528445/file/original-4b13d4c68619e9e932565427083bb19d.jpg?compress=1&resize=1504x1126',
//             title: 'Recipe app',
//             github: 'https://github.com',
//             demo: 'https://dribbble.com/shots/21636337-Recipe-app',
//         }

//     ]
// ); 

// Insert a few documents into the PortfolioData collection.
// db.getCollection('testimonials').insertMany(
//  [
//         {
//           avatar: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg',
//           name: 'James Brown',
//           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
//         },
        
//         {
//           avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rvvFzP2v-40awpf_uw6dq1UVh8R3jkGM2rrrqIbd6Ih3_d_fCEW8Fn0sl5OsJ1qaLuo&usqp=CAU',
//           name: 'Tina Snow ',
//           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
//         },
//         {
//           avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpfFkpLYgdR4R0-ZomZ0ixnZVgLQUOnZnWQ&usqp=CAU',
//           name: 'Kevin Roussel',
//           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
//         },
//         {
//           avatar: 'https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1612484390216-5NVBC0NJJTFP1OPNRU6F/corporate%2Bbusiness%2Bheadshots%2Blos%2Bangeles_Danielle%2BSpires.jpg',
//           name: 'Louisa McBrown',
//           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
//         },
      
      
//       ]
// );


// db.getCollection('portfolios').insertMany(
//     [
//            {
//              image: 'https://ibb.co/7GY9jjs',
//              title: 'Portfolio',
//              github: 'https://github.com/Ngpaterson/CEF344-PROJECT.git',
//              demo: 'https://paterson-nguepi.netlify.app',
//            }
   
//             ]
//    );
//    https://www.gettyimages.fr/detail/photo/portfolio-image-libre-de-droits/175431947

    db.tests.updateMany(
     {name:'Jeff Stones'},
     { $set: { review:'We were impressed with Paterson,s ability to work independently and deliver high-quality work on time and within budget. As a junior front-end developer, they were able to bring fresh ideas and creative solutions to our website redesign project. They were always willing to listen to our feedback and make changes as needed. We highly recommend Paterson to anyone looking for a talented and reliable front-end developer.',
            avatar:'https://img.freepik.com/photos-premium/portrait-homme-afro-americain-beau-elegant-dans-veste-noire-mode-chemise-blanche-col-cravate-elegante-posant-arriere-plan-du-paysage-urbain-bureaux-verre-manhattan_175356-7011.jpg'}}
    );

//    db.testimonials.deleteMany({
//      title: 'Education App UIX'
//    });