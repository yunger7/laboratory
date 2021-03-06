// Logger middleware test
app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host', req.hostname);
  console.log('path', req.path);
  console.log('method', req.method);
  next();
});