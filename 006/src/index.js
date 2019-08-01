// import style './style.css'
import './scss/main.scss'
import './scss/style.css'
import './img/js-logo.png'
import {suma} from './suma'

console.log('hello')

const fn = value=>!value?'no':'si'

console.log(fn(false))
console.log(fn(true))
console.log(suma(1,2))