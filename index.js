const express = require("express");
const app = express();
const port = 3000;

const userTable = [
  {
    userId: 1,
    userName: "eni",
    password: "ssdf",
  },
  {
    userId: 12,
    userName: "lax",
    password: "ssdf",
  },
];

const moviesTable = [
  {
    movieName: "rr",
    movieId: 123,
  },
  {
    movieName: "kgf",
    movieId: 456,
  },
];

const movieUserBooking = [
  {
    movieId: 123,
    userId: 1,
    ticketCount: 10,
  },
  {
    movieId: 456,
    userId: 1,
    ticketCount: 10,
  },
  {
    movieId: 123,
    userId: 12,
    ticketCount: 10,
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getAllUsers", (req, res) => {
  res.send(JSON.stringify(userTable));
});

app.get("/getAllMovies", (req, res) => {
  res.send(JSON.stringify(moviesTable));
});

app.get("/getUserBooking", (req, res) => {
  console.log(req.query);

  const respon = movieUserBooking.filter((booking) => {
    if (booking.userId == req.query.userId) {
      return true;
    } else {
      return false;
    }
  });
   
  const moviesnames=[];

  respon.forEach(x=>{
   const moveNAme=moviesTable.find(e=>e.movieId===x.movieId).movieName
     moviesnames.push(moveNAme);
   
  }
       res.send(moviesnames);
  )
      const fu=respon.find(e=>e.movieId===parseInt(res.query.movieId))
     if(!fu) res.status(404).send("error");
     const ans=  moviesTable.find(e=>e.movieId===parseInt(res.query.movieId));
     res.send(ans);

  const fff = moviesTable.find((movie) => {
    if (movie.movieId === respon.movieId) return;
  });
  //   console.log(fff);
  console.log(respon);

  //   respon.movieName = fff.movieName;

  res.send(JSON.stringify(respon));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
