class TimeController {
  getEpoch(req, res) {
    const epoch = Math.floor(new Date().getTime() / 1000);
    res.json({
      epoch: epoch,
    });
  }
}

module.exports = new TimeController();
