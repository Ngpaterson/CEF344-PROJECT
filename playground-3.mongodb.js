
use('paterson');

 db.getCollection('portfolios').insertMany(
     [
         {
          
             image: 'https://cdn.dribbble.com/userupload/8054511/file/original-a2c1ff8d10f40686f9bcd809de4048dd.png?compress=1&resize=640x480&vertical=center',
             title: 'TEST',
             github: 'https://github.com',
             demo: 'https://cdn.dribbble.com/userupload/8054511/file/original-a2c1ff8d10f40686f9bcd809de4048dd.png?compress=1&resize=640x480&vertical=center',
         },

    ]
 ); 

// Insert a few documents into the PortfolioData collection.
// db.getCollection('testimonials').insertMany(
//  [
//         {
//           avatar: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg',
//           name: 'James Brown',
//           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
//         },
        
//       
      
//       ]
// );



//    db.portfolios.updateMany(
//     {title:'Portfolio'},
//     { $set: { image:'https://cdn.dribbble.com/userupload/7531024/file/original-28960363b0b1e5a03c2f6f1f077c298e.jpg?compress=1&resize=1504x1128'}}
//    );

  //  db.testimonials.deleteMany({
  //   name: 'Louisa McBrown'
  //  });