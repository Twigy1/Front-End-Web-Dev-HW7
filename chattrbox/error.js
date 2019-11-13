var handleError = function(err, res) {
  res.writeHead(404);
  fs.readFile('app/error.html', function(err, data) {
    res.end(data);
  });
};
