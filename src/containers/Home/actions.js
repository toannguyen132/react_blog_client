import {
  STATUS_LOADING,
  STATUS_SUCCESS,
  STATUS_ERROR } from './constants';

export function loadArticles(){
  return {
    type: STATUS_LOADING
  }
}

export function loadArticlesSuccess(articles){
  return {
    type: STATUS_SUCCESS,
    articles
  }
}

export function loadArticlesError(error){
  return {
    type: STATUS_ERROR,
    error
  }
}

