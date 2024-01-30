export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelDetail(channelId) {
    return this.apiClient
      .channels({
        params: {
          part: 'snippet,contentDetails,statistics',
          id: channelId,
        },
      })
      .then((res) => res.data.items[0]);
  }

  async relatedVideos(channelId) {
    return this.apiClient
      .playlists({
        params: {
          part: 'snippet,contentDetails',
          channelId: channelId,
          maxResults: 25,
        },
      })
      .then((res) => res.data.items);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet,statistics',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }
}
