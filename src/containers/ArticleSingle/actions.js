import { STATUS_LOADING, STATUS_SUCCESS, STATUS_ERROR } from './constants';

export const loadArticle = () => ({
  type: STATUS_LOADING
});

export const loadArticleSuccess = (article) => ({
  type: STATUS_SUCCESS,
  article
});

export const loadArticleError = (err) => ({
  type: STATUS_ERROR,
  err
});

