const axios = require('axios');
const apiKey = process.env.TMDB_API_KEY;
// const apiKey = process.env.TMDB_API_KEY;
module.exports = async (req, res) => {
  const { body } = req;
  const tmdbUrl = `https://api.themoviedb.org/3/movie/${body.id}?api_key=${apiKey}`;
  try {
    // 发送 HTTP 请求以获取 TMDb API 的响应
    const response = await axios.get(tmdbUrl);
    // 将 TMDb API 的响应返回给调用方
    res.send(response.data);
  } catch (error) {
    // 处理错误情况
    res.status(500).send('Error fetching data from TMDb API');
  }
};
