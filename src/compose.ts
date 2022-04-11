import { Middle } from './types'

export default (middlewares: Middle[]) => {
  if (middlewares.length === 1) {
    return middlewares[0]
  }
  return middlewares.reduce(function a(prev, next) {

    console.log(prev.toString(), 'prev===');
    
    return function b(...args) {
      console.log(prev.toString(), 'prev=====');
      
      return prev(next(...args))
    }
  })
  // return middlewares.reduce((prev, next)=> (...args) => prev(next(...args)))
}