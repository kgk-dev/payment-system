import { redirect } from 'react-router-dom'

export async function one() {
  return redirect('/signup/2')
}

export async function two() {
  return redirect('/signup/3')
}

export async function three() {
  return redirect('/signup/4')
}

export async function four() {
  return redirect('/signup/5')
}

export async function five() {
  return redirect('/')
}