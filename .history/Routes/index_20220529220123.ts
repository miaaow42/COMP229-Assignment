import express from 'express';
const router = express.Router();

/* GET Home page. */
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home' });
});

/* GET Home page. */
router.get('/home', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'About' });
});

/* GET Products page. */
router.get('/products', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Products' });
});

/* GET Services page. */
router.get('/services', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Services' });
});

/* GET Contact Us page. */
router.get('/contact', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Contact' });
});

export default router;
