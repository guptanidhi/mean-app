const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const Registration = require('../model/register');
const Movie = require('../model/movieSchema');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/register', (req, res, next) => {
	const userData = {
		firstName: req.body.fname.trim(),
		lastName: req.body.lname.trim(),
		email: req.body.email.trim(),
		password: req.body.password.trim()
	};

	const newUser = new Registration(userData);
	newUser.save((err) => {
		if(err) {
			return res.status(400).json({
				success: false,
				message: 'Registration Failed. Try again!'
			});
		}
		return res.status(200).json({
			success: true,
			message: 'Successfully Registered, Now you can login.'
		});
	})
});

router.post('/login', (req, res, next) => {
	const userData = {
    email: req.body.email.trim(),
    password: req.body.password.trim()
  };
  return Registration.findOne({ email: userData.email, password: userData.password }, (err, user) => {
    if(err) {
      return res.status(400).json({
				success: false,
				message: 'Could not process the form. Please try again.'
			});
    }
    if(!user){
      const error = new Error('Incorrect Email or Password');
      return res.status(400).json({
				success: false,
				message: 'IncorrectCredentialsError'
			});
    }

  	const payload = {
      sub: user._id
    };

    // Create a token string
    // const token = jwt.sign(payload, config.jwtSecret);
    const token = jwt.sign(payload, "Secret Key");
    return res.json({
			success: true,
			message: 'Successfully logged in!',
			token
		});
  });
})

router.post('/addToFav', (req, res, next) => {
	const movieData = {
		title: req.body.title.trim(),
    id: req.body.id.trim(),
    vote_average: req.body.vote_average.trim(),
    poster_path: req.body.poster_path.trim()
	};
	const newMovie = new Movie(movieData);
	newMovie.save((err) => {
		if(err) {
			return res.status(400).json({
				success: false,
				message: 'Add to Favorites Failed. Try again!'
			});
		}
		return res.status(200).json({
			success: true,
			message: 'Movie added to your favorite list Successfully...'
		});
	})
});

router.get('/getFavList', (req, res, next) => {
	Movie.find({}, function(err, list){
		if(err){
			res.send(err);
		}else{
			res.send(list);
		}
	});
});

router.delete('/deleteMovie', (req, res, next) => {
	if(req.body)
    {
      var movieId = req.body.id;
      Movie.remove({id:movieId},function(err){
        if(err) {
          res.send(err);
        }
        res.status(200).json({
    			message: "Movie Deleted Successfully."
    		});
      });
    }
});

module.exports = router;
