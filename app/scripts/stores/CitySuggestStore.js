/**
 * CitySuggestStore
 *
 * @exports CitySuggestStore singleton
 */

import AbstractStore from '../stores/AbstractStore';

/**
 * @inheritdoc
 */
export default class CitySuggestStore extends AbstractStore {
  /**
   * @inheritdoc
   */
  getActionListeners() {
    return {
      /**
       * Load start
       */
      'city:loadStart': () => {
        this
          .set('loading', true)
          .set('error', null)
          .set('list', [])
          .trigger('change');
      },
      /**
       * Load success
       *
       * @param {array} items Items
       */
      'city:loadSuccess': list => {
        this
          .set('loading', false)
          .set('error', null)
          .set('list', list)
          .trigger('change');
      },
      /**
       * Load error
       *
       * @param {Error} error Error
       */
      'city:loadError': error => {
        this
          .reset()
          .set('error', error)
          .trigger('change');
      },
    };
  }
}

const instance = new CitySuggestStore();

export default instance;
