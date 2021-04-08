const postModel = require('./models/postModel');

/*
// find all athletes that play tennis
var query = Athlete.find({ 'sport': 'Tennis' });

// selecting the 'name' and 'age' fields
query.select('name age');

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec(function (err, athletes) {
  if (err) return handleError(err);
  // athletes contains an ordered list of 5 athletes who play Tennis
})
*/
// find each person with a last name matching 'Ghost'

postModel.find({}, (err, posts) => {
  if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
  if (!posts) return res.status(404).send({message: `No existen posts`});
  console.log("Posts: " + posts);
  res.status(200).send({ posts: posts });
});