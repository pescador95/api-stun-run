module.exports = function (bd, app, cors) {
  app.get("/score/", cors(), async (req, res, next) => {
    try {
      const { rows } = await bd.conn.query(
        "SELECT * FROM SCORE ORDER BY SCORE DESC LIMIT 10"
      );
      return res.status(200).send(rows);
    } catch (err) {
      return res.status(400).send(err);
    }
  });

  app.post("/score/", cors(), async (req, res, next) => {
    const player1 = req.body.playerName1;
    const score1 = req.body.score1;
    const player2 = req.body.playerName2;
    const score2 = req.body.score2;
    console.log(req.body);
    let response = [];

    try {
      const query1 = await bd.conn.query(
        "INSERT INTO score (player, score) VALUES ($1, $2) RETURNING *",
        [player1, score1]
      );
      const query2 = await bd.conn.query(
        "INSERT INTO score (player, score) VALUES ($1, $2) RETURNING *",
        [player2, score2]
      );

      response.push(query1);
      response.push(query2);

      return res.status(200).send(response.body);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
};
