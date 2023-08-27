import { redirect } from "react-router-dom";

export async function one() {
  return redirect('/login/2')
}

export async function two() {
  console.log("called actino two")
  return redirect('/users')
}