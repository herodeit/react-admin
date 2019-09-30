import Client from '../utils/client'

/**
 * Base RESTFul resource class.
 */
class Resource {
  constructor(uri) {
    this.uri = uri
  }

  /**
   * List resource.
   *
   * @param query
   * @returns {*|AxiosPromise<any>}
   */
  list(query = {}) {
    return Client().get(this.uri, { params: query })
  }

  /**
   * Get resource by Id.
   *
   * @param id
   * @returns {*|AxiosPromise<any>}
   */
  show(id) {
    return Client().get(`${this.uri}/${id}`)
  }

  /**
   * Create resource.
   *
   * @param resource
   * @returns {*|AxiosPromise<any>}
   */
  store(resource) {
    return Client().post(`${this.uri}`, resource)
  }

  /**
   * Update resource by id.
   *
   * @param id
   * @param resource
   * @returns {*|AxiosPromise<any>}
   */
  update(id, resource) {
    return Client().put(`${this.uri}/${id}`, resource)
  }

  /**
   * Delete resource by id.
   *
   * @param id
   * @returns {*|AxiosPromise}
   */
  destroy(id) {
    return Client().delete(`${this.uri}/${id}`)
  }
}

export default Resource
